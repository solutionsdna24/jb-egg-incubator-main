import { productSpecifications } from "./specifications";
import { landingPages } from "./landingPages";

const SITE_URL = "https://www.jbincubators.in";
const SITE_NAME = "JB Egg Incubator";

const canonicalUrl = (path: string) =>
  path === "/" ? `${SITE_URL}/egg-incubators` : `${SITE_URL}${path}`;

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/egg-incubators": {
    title: "Egg Incubator Vidarbha, Nagpur & Maharashtra | JB Bhandara",
    description:
      "Buy egg incubator in Vidarbha, Nagpur & Maharashtra from JB — egg incubator manufacturer in Bhandara. Automatic egg incubator & egg hatching machine from ₹2,700.",
  },
  "/products": {
    title: "Egg Incubator Models Maharashtra & India | JBW100 to JB816C",
    description:
      "Full JB egg incubator catalogue — 100 egg JBW100 from ₹2,700 to commercial combine incubators. Poultry incubator supplier Bhandara, Maharashtra.",
  },
  "/about": {
    title: "About JB Egg Incubator | Manufacturer Since 2022 — Bhandara",
    description:
      "About JB — egg incubator manufacturer since 2022 in Bhandara, Vidarbha. Brand story, team of 12+, manufacturing process & customer success stories.",
  },
  "/contact": {
    title: "Egg Incubator Nagpur & Bhandara | Contact JB Maharashtra",
    description:
      "Contact JB Egg Incubator — poultry incubator supplier in Bhandara, Vidarbha. Orders for Nagpur, Maharashtra & all India. Call +91 8767189437.",
  },
  "/order-egg-incubator": {
    title: "Order Egg Incubator Maharashtra & India | Price Quote",
    description:
      "Request egg hatching machine price & order automatic egg incubator online. JB manufacturer in Bhandara, Maharashtra — pan-India delivery.",
  },
  "/blog": {
    title: "Egg Incubator Blog Maharashtra & India | JB Guides",
    description:
      "Guides on egg incubator Maharashtra & India, automatic egg incubator Nagpur & Bhandara, poultry incubator supplier Vidarbha, and pricing.",
  },
  "/guides/poultry-incubation-training": {
    title: "Poultry Incubation Training | How to Hatch Eggs — JB Guide",
    description:
      "Free poultry incubation training: how to hatch eggs in incubator, egg incubation temperature chart, 21 day hatching process & common mistakes.",
  },
  "/guides/free-hatching-guide": {
    title: "Download Free Hatching Guide | JB Egg Incubator PDF",
    description:
      "Download free JB hatching guide — temperature chart, humidity for egg hatching, 21 day process. For egg incubator Maharashtra & India farmers.",
  },
  "/tools/incubation-capacity-calculator": {
    title: "Incubation Capacity Calculator | Choose Your JB Model",
    description:
      "Calculate incubation capacity — find the right 100 egg incubator, 120 egg layout, or fully automatic egg incubator for your farm.",
  },
};

const PRODUCT_META: Record<string, { title: string; description: string }> = {
  JBW100: {
    title: "100 Egg Incubator JBW100 from ₹2,700 | Manual Hatching Machine",
    description:
      "JBW100 100 egg incubator — manual egg hatching machine from ₹2,700. Thermocol body, 120W, 80%+ hatch rate. JB manufacturer, Bhandara, Maharashtra.",
  },
  JBST100: {
    title: "120 Egg Incubator JBST100 ₹4,999 | Semi-Automatic with Hygrometer",
    description:
      "JBST100 semi-automatic egg incubator — 100–120 egg capacity, digital hygrometer, fiber body, 85%+ hatch rate. Poultry incubator supplier JB, Bhandara.",
  },
  JBI80M: {
    title: "Fully Automatic Egg Incubator JBI80M ₹10,499 | 80 Eggs",
    description:
      "JBI80M fully automatic egg incubator — 80 eggs, auto turning, metal body, digital controls, 85%+ hatch rate. Premium egg hatching machine from JB.",
  },
  JB528C: {
    title: "528+104 Combine Egg Incubator JB528C | Commercial Setter-Hatcher",
    description:
      "JB528C combine incubator — 528 eggs setting + 104 hatching, 400W, auto 45° turning, BLDC fan. Weekly batch system. Made in India — JB Bhandara.",
  },
  JB160A: {
    title: "160 Egg Fully Automatic Incubator JB160A | 200W Small Farm",
    description:
      "JB160A 160 egg automatic incubator — 80–85% hatch rate, ACP body, 200W. Ideal for small poultry farms & hobbyists. JB manufacturer, Bhandara.",
  },
  JB240C: {
    title: "240+80 Combine Egg Incubator JB240C | 300W Automatic",
    description:
      "JB240C combine incubator — 240 setting + 80 hatching eggs, 3 trays, auto turning, 300W, digital controls. Poultry incubator JB, Bhandara.",
  },
  JB612C: {
    title: "612+204 Commercial Combine Incubator JB612C | 500W",
    description:
      "JB612C commercial combine incubator — 612 setting + 204 hatching, 6 trays, auto 45° turning, BLDC fan, 500W. Egg incubator manufacturer JB, Bhandara.",
  },
  JB816C: {
    title: "816+272 High-Capacity Combine Incubator JB816C | 570W",
    description:
      "JB816C high-capacity combine incubator — 816 setting + 272 hatching, trolley tray system, 570W, auto turning & exhaust. Commercial hatchery machine.",
  },
};

/** Blog path → meta (no image imports — safe for Vite build hook) */
const BLOG_ROUTE_META: Record<string, { title: string; description: string }> = {
  "how-to-hatch-eggs-in-incubator": {
    title: "How to Hatch Eggs in an Incubator — JB Step-by-Step Guide",
    description:
      "Learn how to hatch eggs in an incubator with JB's poultry training guide — temperature, humidity, turning & lockdown for 85%+ results.",
  },
  "21-day-hatching-process": {
    title: "21 Day Hatching Process Explained — Chicken Egg Timeline",
    description:
      "Complete 21 day hatching process for chicken eggs in a JB egg incubator — what happens each week and what farmers should do.",
  },
  "common-incubation-mistakes": {
    title: "Common Incubation Mistakes — And How JB Farmers Avoid Them",
    description:
      "Avoid common incubation mistakes: wrong humidity, poor turning, old eggs & temperature swings. Tips from JB egg incubator manufacturer.",
  },
  "egg-incubator-vidarbha-nagpur-bhandara": {
    title: "Egg Incubator Vidarbha — Nagpur & Bhandara Delivery from JB Factory",
    description:
      "Buy egg incubator in Vidarbha direct from JB's Bhandara factory. Fast delivery to Nagpur, Bhandara & nearby districts.",
  },
  "automatic-egg-incubator-maharashtra": {
    title: "Automatic Egg Incubator Maharashtra — JB Models & Buyer Guide",
    description:
      "Compare automatic egg incubator Maharashtra options from JB — JBI80M auto turning, digital controls & delivery from Bhandara factory.",
  },
  "egg-hatching-machine-maharashtra-india": {
    title: "Egg Hatching Machine Maharashtra & India — JB Price Guide (2026)",
    description:
      "Clear egg hatching machine price for Maharashtra & India. Compare JBW100, JBST100 & JBI80M from poultry incubator supplier JB.",
  },
  "egg-incubator-manufacturer-india": {
    title: "JB: Leading Egg Incubator Manufacturer in India",
    description:
      "How JB became a trusted egg incubator manufacturer in India — factory in Maharashtra, models for every farm, pan-India supply.",
  },
  "automatic-egg-incubator-machine-guide": {
    title: "Automatic Egg Incubator Machine — Complete JB Buyer Guide",
    description:
      "Everything about automatic egg incubator machines: auto turning, digital controls, and why JBI80M is JB's top automatic model.",
  },
  "egg-hatching-machine-price-india": {
    title: "Egg Hatching Machine Price in India — JB Models Compared (2026)",
    description:
      "Clear egg hatching machine price guide for JBW100, JBST100 & JBI80M. Compare features before you buy from India's trusted supplier.",
  },
  "commercial-poultry-incubator-supplier": {
    title: "Commercial Egg Incubator & Poultry Incubator Supplier in India",
    description:
      "How JB supplies commercial egg incubators to hatcheries and farms — capacity, durability, and support from a poultry incubator supplier.",
  },
  "egg-incubator-maharashtra": {
    title: "Egg Incubator Maharashtra — Manufacturer in Bhandara, Vidarbha",
    description:
      "Buy egg incubator in Maharashtra from JB's Bhandara factory. Serving Nagpur, Vidarbha & statewide — from ₹2,700.",
  },
  "best-egg-incubator-company-india": {
    title: "Why JB Is Among the Best Egg Incubator Companies in India",
    description:
      "Affordable egg hatching machine price, proven hatch rates & real support — what makes JB one of the best egg incubator companies in India.",
  },
  "choose-right-egg-incubator": {
    title: "How to Choose the Right Egg Incubator for Your Farm",
    description:
      "Capacity, budget, and automation — a simple guide to picking JBW100, JBST100, or JBI80M for your poultry setup.",
  },
  "85-percent-hatch-rate-tips": {
    title: "5 Tips for 85%+ Hatch Rate with JB Incubators",
    description:
      "Temperature, humidity, and turning — practical steps Indian farmers use to get the best results from every hatch cycle.",
  },
  "manual-vs-automatic-incubator": {
    title: "Manual vs Automatic Incubator — Which JB Model Suits You?",
    description:
      "Compare daily effort, cost, and hatch consistency between JBW100, JBST100, and JBI80M before you buy.",
  },
  "why-farmers-trust-jb-incubators": {
    title: "Why Farmers Across India Trust JB Egg Incubators",
    description:
      "Affordable pricing, proven hatch results, and real after-sales support — what sets JB apart for poultry farmers.",
  },
};

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  canonical: string;
}

export const routeToPath = (route: string): string => {
  if (!route || route === "egg-incubators") return "/egg-incubators";
  return `/${route.replace(/^\/+/, "")}`;
};

export const getRouteMeta = (route: string): RouteMeta => {
  const path = routeToPath(route);

  const landing = landingPages.find((p) => p.path === path);
  if (landing) {
    return {
      path: landing.path,
      title: landing.title,
      description: landing.description,
      canonical: canonicalUrl(landing.path),
    };
  }

  if (path.startsWith("/products/")) {
    const slug = path.slice("/products/".length);
    const spec = productSpecifications.find((s) => s.slug === slug);
    if (spec) {
      const productSeo = PRODUCT_META[spec.model];
      return {
        path,
        title: productSeo?.title ?? `${spec.model} — ${spec.type}`,
        description:
          productSeo?.description ??
          `${spec.model} egg incubator: ${spec.capacity}. JB manufacturer, Bhandara, Maharashtra.`,
        canonical: canonicalUrl(path),
      };
    }
  }

  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length);
    const blogMeta = BLOG_ROUTE_META[slug];
    if (blogMeta) {
      return {
        path,
        title: blogMeta.title,
        description: blogMeta.description,
        canonical: canonicalUrl(path),
      };
    }
  }

  const pageMeta = PAGE_META[path];
  if (pageMeta) {
    return {
      path,
      title: pageMeta.title,
      description: pageMeta.description,
      canonical: canonicalUrl(path),
    };
  }

  return {
    path: "/egg-incubators",
    title: PAGE_META["/egg-incubators"].title,
    description: PAGE_META["/egg-incubators"].description,
    canonical: canonicalUrl("/egg-incubators"),
  };
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export const injectRouteMetaIntoHtml = (html: string, route: string): string => {
  const meta = getRouteMeta(route);
  const title = `${meta.title} | ${SITE_NAME}`;

  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${escapeHtml(meta.description)}"`,
    )
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${meta.canonical}"`)
    .replace(
      /<link rel="alternate" hreflang="en-IN" href="[^"]*"/,
      `<link rel="alternate" hreflang="en-IN" href="${meta.canonical}"`,
    )
    .replace(
      /<link rel="alternate" hreflang="x-default" href="[^"]*"/,
      `<link rel="alternate" hreflang="x-default" href="${meta.canonical}"`,
    )
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${meta.canonical}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${escapeHtml(title)}"`)
    .replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${escapeHtml(meta.description)}"`,
    )
    .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${escapeHtml(title)}"`)
    .replace(
      /<meta name="twitter:description" content="[^"]*"/,
      `<meta name="twitter:description" content="${escapeHtml(meta.description)}"`,
    );
};
