/** Scroll to a home-page section; navigates home first if needed */
export const HOME_PATHS = ["/", "/egg-incubators"];

/** GitHub Pages serves folder routes with a trailing slash (e.g. /egg-incubator-maharashtra/). */
export const normalizePathname = (pathname: string): string => {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
};

export const isHomePath = (pathname: string) => {
  const path = normalizePathname(pathname);
  return path === "/" || path === "/egg-incubators";
};

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

  if (isHomePath(pathname)) {
    scrollNow();
    return;
  }

  navigate({ pathname: "/", hash: sectionId });
};
