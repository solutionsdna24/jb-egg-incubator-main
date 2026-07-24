import { SPA_STATIC_ROUTES } from "./spaRoutes";
import { canonicalUrl } from "./canonical";

const ROUTE_PRIORITY: Record<string, number> = {
  "egg-incubators": 1.0,
  "egg-incubator-maharashtra": 0.95,
  "egg-incubator-vidarbha": 0.95,
  "egg-incubator-nagpur": 0.95,
  products: 0.9,
  blog: 0.85,
};

const routePath = (route: string) => (route === "egg-incubators" ? "/egg-incubators" : `/${route}`);

export const generateSitemapXml = (lastmod?: string) => {
  const mod = lastmod ?? new Date().toISOString().slice(0, 10);
  const urls = SPA_STATIC_ROUTES.map((route) => {
    const priority = ROUTE_PRIORITY[route] ?? (route.startsWith("blog/") ? 0.8 : 0.85);
    const changefreq = route === "egg-incubators" || route === "products" || route === "blog" ? "weekly" : "monthly";
    return `  <url>
    <loc>${canonicalUrl(routePath(route))}</loc>
    <lastmod>${mod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
};
