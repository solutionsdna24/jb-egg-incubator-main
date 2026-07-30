/**
 * Canonical URL helpers for GitHub Pages hosting.
 * - Live site CNAME: jbincubators.in (apex) — www redirects TO apex
 * - Folder routes 301 to trailing-slash URLs — canonical must match the 200 OK URL
 */
export const SITE_URL = "https://jbincubators.in";

/** Normalize route path (no trailing slash) for routing lookups. */
export const toCanonicalPath = (path: string): string => {
  if (!path || path === "/") return "/egg-incubators";
  const clean = path.replace(/\/+$/, "");
  return clean || "/egg-incubators";
};

/** Absolute canonical URL with trailing slash (matches GitHub Pages final URL). */
export const canonicalUrl = (path: string): string =>
  `${SITE_URL}${toCanonicalPath(path)}/`;

/** Same-origin path with trailing slash — use in Link href and static HTML anchors. */
export const publicPath = (path: string): string => `${toCanonicalPath(path)}/`;
