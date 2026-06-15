/** Scroll to a home-page section; navigates home first if needed */
export const HOME_PATHS = ["/", "/egg-incubators"];

export const waitAndScrollToHash = (hash: string, maxAttempts = 40, intervalMs = 100) => {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  let attempts = 0;
  const tryScroll = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    attempts += 1;
    if (attempts < maxAttempts) {
      window.setTimeout(tryScroll, intervalMs);
    }
  };

  tryScroll();
};

export const scrollToSection = (
  sectionId: string,
  navigate: (to: string | { pathname: string; hash?: string }) => void,
  pathname: string,
) => {
  const scrollNow = () => waitAndScrollToHash(`#${sectionId}`);

  if (HOME_PATHS.includes(pathname)) {
    scrollNow();
    return;
  }

  navigate({ pathname: "/", hash: sectionId });
};
