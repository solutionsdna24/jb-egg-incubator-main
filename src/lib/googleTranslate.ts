type SiteLang = "en" | "mr";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string,
        ) => void;
      };
    };
  }
}

let translateLoader: Promise<void> | null = null;

export const isPageTranslated = () => {
  if (
    document.documentElement.classList.contains("translated-ltr") ||
    document.documentElement.classList.contains("translated-rtl")
  ) {
    return true;
  }
  return /(?:^|;\s*)googtrans=\/en\/(?!en)(?:mr|hi|[a-z]{2})/i.test(document.cookie);
};

const clearGoogTransCookies = () => {
  const expires = "Thu, 01 Jan 1970 00:00:00 UTC";
  const { hostname } = window.location;

  document.cookie = `googtrans=;expires=${expires};path=/`;
  document.cookie = `googtrans=;expires=${expires};path=/;domain=${hostname}`;

  if (hostname.includes(".")) {
    document.cookie = `googtrans=;expires=${expires};path=/;domain=.${hostname}`;
  }
};

export const protectTranslatedImages = () => {
  document.querySelectorAll("[data-protected-src]").forEach((node) => {
    const src = node.getAttribute("data-protected-src");
    if (!src) return;

    if (node instanceof HTMLImageElement) {
      const fileName = src.split("/").pop() ?? src;
      if (!node.src.includes(fileName)) {
        node.src = src;
      }
      return;
    }

    if (node instanceof HTMLElement && node.classList.contains("product-image-wrap")) {
      node.style.backgroundImage = `url("${src}")`;
    }
  });
};

export const loadGoogleTranslate = (): Promise<void> => {
  if (translateLoader) return translateLoader;

  translateLoader = new Promise((resolve) => {
    if (document.querySelector(".goog-te-combo")) {
      resolve();
      return;
    }

    window.googleTranslateElementInit = () => {
      window.google?.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,mr", autoDisplay: false },
        "google_translate_element",
      );
      resolve();
    };

    if (document.querySelector('script[src*="translate.google.com"]')) {
      const waitForCombo = () => {
        if (document.querySelector(".goog-te-combo")) {
          resolve();
          return;
        }
        window.setTimeout(waitForCombo, 120);
      };
      waitForCombo();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  });

  return translateLoader;
};

const waitForTranslateCombo = (attempts = 40): Promise<HTMLSelectElement> =>
  new Promise((resolve, reject) => {
    let count = 0;
    const tick = () => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        resolve(select);
        return;
      }
      count += 1;
      if (count >= attempts) {
        reject(new Error("Google Translate not ready"));
        return;
      }
      window.setTimeout(tick, 120);
    };
    tick();
  });

export const restoreEnglish = () => {
  const needsReload = isPageTranslated();

  localStorage.setItem("site-lang", "en");
  clearGoogTransCookies();

  const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
  if (select) {
    select.selectedIndex = 0;
    select.dispatchEvent(new Event("change"));
  }

  document.documentElement.lang = "en";

  if (needsReload) {
    window.location.reload();
    return true;
  }

  document.documentElement.classList.remove("translated-ltr", "translated-rtl");
  protectTranslatedImages();
  return false;
};

export const applySiteLanguage = async (lang: SiteLang) => {
  if (lang === "en") {
    restoreEnglish();
    return;
  }

  await loadGoogleTranslate();
  const select = await waitForTranslateCombo();
  select.value = lang;
  select.dispatchEvent(new Event("change"));
  localStorage.setItem("site-lang", lang);
  window.setTimeout(protectTranslatedImages, 400);
  window.setTimeout(protectTranslatedImages, 1200);
};

export const startImageProtection = () => {
  const observer = new MutationObserver(() => {
    protectTranslatedImages();
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["src", "style"],
  });
  return () => observer.disconnect();
};

export const hideGoogleTranslateBanner = () => {
  document.body.style.top = "0px";
  document.documentElement.style.marginTop = "0px";
  document.querySelectorAll("iframe.goog-te-banner-frame, .goog-te-banner-frame").forEach((el) => {
    (el as HTMLElement).style.display = "none";
  });
};
