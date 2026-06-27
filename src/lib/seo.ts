import type { BlogPost } from "@/lib/blogs";
import { GOOGLE_RATING, googleReviews } from "@/lib/reviews";

export const SITE_URL = "https://www.jbincubators.in";
export const SITE_NAME = "JB Egg Incubator";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;
export const DEFAULT_PHONE = "+91 8767189437";

/** Paste your Google Search Console HTML tag value in .env as VITE_GSC_VERIFICATION= */
export const GOOGLE_SITE_VERIFICATION =
  (import.meta.env.VITE_GSC_VERIFICATION as string | undefined)?.trim() || "";

/** Primary + secondary search phrases for Google & on-page SEO */
export const TARGET_KEYWORDS = [
  "egg incubator maharashtra",
  "egg incubator india",
  "egg incubator manufacturer in maharashtra",
  "egg incubator manufacturer in india",
  "egg incubator manufacturer vidarbha",
  "automatic egg incubator maharashtra",
  "automatic egg incubator nagpur",
  "automatic egg incubator bhandara",
  "poultry incubator supplier maharashtra",
  "poultry incubator supplier india",
  "egg hatching machine maharashtra",
  "egg hatching machine india",
  "egg incubator nagpur",
  "egg incubator bhandara",
  "egg incubator vidarbha",
  "egg incubator nagpur",
  "vidarbha egg incubator",
  "nagpur egg incubator",
  "poultry incubator vidarbha",
  "poultry incubator nagpur",
  "fully automatic egg incubator",
  "100 egg incubator",
  "120 egg incubator",
  "egg incubator manufacturer",
  "egg incubator supplier India",
  "how to hatch eggs in incubator",
  "egg incubation temperature chart",
  "21 day hatching process",
  "humidity for egg hatching",
] as const;

export const KEYWORDS_META = [
  ...TARGET_KEYWORDS,
  "JB incubator",
  "JBW100",
  "JBST100",
  "JBI80M",
  "JB528C",
  "JB160A",
  "JB240C",
  "JB612C",
  "JB816C",
  "combine egg incubator",
  "commercial egg incubator",
  "160 egg incubator",
  "528 egg incubator",
  "egg hatching machine price",
  "poultry incubator nagpur",
  "poultry incubator bhandara",
].join(", ");

export type PageKey =
  | "home"
  | "products"
  | "product"
  | "about"
  | "details"
  | "contact"
  | "order"
  | "blogs"
  | "training"
  | "hatchingGuide"
  | "calculator"
  | "notFound";

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  noindex?: boolean;
}

export const PAGE_SEO: Record<PageKey, PageSeo> = {
  home: {
    title: "Egg Incubator Vidarbha, Nagpur & Maharashtra | JB Bhandara",
    description:
      "Buy egg incubator in Vidarbha, Nagpur & Maharashtra from JB — egg incubator manufacturer in Bhandara. Automatic egg incubator & egg hatching machine from ₹2,700. Fast Vidarbha delivery. Call +91 8767189437.",
    path: "/egg-incubators",
    keywords:
      "egg incubator vidarbha, egg incubator nagpur, egg incubator maharashtra, vidarbha egg incubator, nagpur egg incubator, egg incubator bhandara, automatic egg incubator nagpur, poultry incubator vidarbha, egg hatching machine maharashtra",
  },
  products: {
    title: "Egg Incubator Models Maharashtra & India | JBW100 to JB816C",
    description:
      "Full JB egg incubator catalogue — 100 egg JBW100 from ₹2,700 to commercial combine incubators (528+104, 160, 240+80, 612+204, 816+272). Poultry incubator supplier Bhandara, Maharashtra.",
    path: "/products",
    keywords:
      "egg hatching machine maharashtra, automatic egg incubator india, combine egg incubator, commercial egg incubator, JBW100, JBST100, JBI80M, JB528C, JB160A, JB240C, JB612C, JB816C, poultry incubator supplier",
  },
  details: {
    title: "Egg Incubator Manufacturer Maharashtra & India | About JB",
    description:
      "JB is an egg incubator manufacturer in Maharashtra & India — factory at Lakhandur, Bhandara, Vidarbha. Trusted poultry incubator supplier with 85%+ hatch rates & warranty.",
    path: "/about",
    keywords:
      "egg incubator manufacturer in maharashtra, egg incubator manufacturer in india, egg incubator manufacturer vidarbha, egg incubator bhandara, poultry incubator quality",
  },
  about: {
    title: "About JB Egg Incubator | Manufacturer Since 2022 — Bhandara",
    description:
      "About JB — egg incubator manufacturer since 2022 in Bhandara, Vidarbha. Brand story, team of 12+, manufacturing process, customer success stories & journey since 2022.",
    path: "/about",
    keywords:
      "about JB egg incubator, egg incubator manufacturer, egg incubator supplier India, poultry incubator Maharashtra, brand story JB incubator",
  },
  training: {
    title: "Poultry Incubation Training | How to Hatch Eggs — JB Guide",
    description:
      "Free poultry incubation training: how to hatch eggs in incubator, egg incubation temperature chart, 21 day hatching process & common incubation mistakes.",
    path: "/guides/poultry-incubation-training",
    keywords:
      "how to hatch eggs in incubator, egg incubation temperature chart, 21 day hatching process, common incubation mistakes, humidity for egg hatching",
  },
  hatchingGuide: {
    title: "Download Free Hatching Guide | JB Egg Incubator PDF",
    description:
      "Download free JB hatching guide — temperature chart, humidity for egg hatching, 21 day process. For egg incubator Maharashtra & India farmers.",
    path: "/guides/free-hatching-guide",
    keywords:
      "free hatching guide, egg incubation guide, humidity for egg hatching, 21 day hatching process, egg incubator training",
  },
  calculator: {
    title: "Incubation Capacity Calculator | Choose Your JB Model",
    description:
      "Calculate incubation capacity — find the right 100 egg incubator, 120 egg layout, or fully automatic egg incubator for your farm.",
    path: "/tools/incubation-capacity-calculator",
    keywords:
      "100 egg incubator, 120 egg incubator, incubation capacity calculator, automatic egg incubator, egg hatching machine",
  },
  product: {
    title: "JB Egg Incubator Model | Specifications & Price",
    description:
      "Detailed egg incubator specifications — capacity, power, humidity, warranty. Egg incubator manufacturer JB, Bhandara Maharashtra.",
    path: "/products",
    keywords: KEYWORDS_META,
  },
  contact: {
    title: "Egg Incubator Nagpur & Bhandara | Contact JB Maharashtra",
    description:
      "Contact JB Egg Incubator — poultry incubator supplier in Bhandara, Vidarbha. Egg hatching machine & automatic egg incubator orders for Nagpur, Maharashtra & all India. Call +91 8767189437.",
    path: "/contact",
    keywords:
      "egg incubator nagpur, egg incubator bhandara, egg incubator maharashtra, poultry incubator supplier maharashtra, contact JB incubator vidarbha",
  },
  order: {
    title: "Order Egg Incubator Maharashtra & India | Price Quote",
    description:
      "Request egg hatching machine price & order automatic egg incubator online. JB manufacturer in Bhandara, Maharashtra — fast response for Nagpur, Vidarbha & pan-India delivery.",
    path: "/order-egg-incubator",
    keywords:
      "order egg incubator maharashtra, egg hatching machine maharashtra, automatic egg incubator india, poultry incubator supplier india",
  },
  blogs: {
    title: "Egg Incubator Blog Maharashtra & India | JB Guides",
    description:
      "Guides on egg incubator Maharashtra & India, automatic egg incubator Nagpur & Bhandara, poultry incubator supplier Vidarbha, and egg hatching machine pricing.",
    path: "/blog",
    keywords:
      "egg incubator blog maharashtra, automatic egg incubator guide, egg hatching machine india, poultry incubator supplier vidarbha, egg incubator nagpur",
  },
  notFound: {
    title: "Page Not Found | JB Egg Incubator",
    description:
      "The page you requested was not found. Browse JB Egg Incubator products, blog, and contact details.",
    path: "/404",
    noindex: true,
  },
};

export const canonicalUrl = (path: string) =>
  path === "/" ? `${SITE_URL}/egg-incubators` : `${SITE_URL}${path}`;

const absoluteAssetUrl = (src: string) =>
  src.startsWith("http") ? src : `${SITE_URL}${src.startsWith("/") ? src : `/${src}`}`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  image: DEFAULT_OG_IMAGE,
  description:
    "Egg incubator manufacturer in Vidarbha, Nagpur & Maharashtra. Automatic egg incubator, poultry incubator supplier & egg hatching machine from Bhandara — factory-direct since 2022.",
  telephone: "+91-8767189437",
  email: "jbincubator5@gmail.com",
  foundingDate: "2022",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 12 },
  priceRange: "₹2700+",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: GOOGLE_RATING,
    reviewCount: 120,
    bestRating: 5,
    worstRating: 1,
  },
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "AdministrativeArea", name: "Vidarbha" },
    { "@type": "City", name: "Nagpur" },
    { "@type": "City", name: "Bhandara" },
    { "@type": "City", name: "Wardha" },
    { "@type": "City", name: "Gondia" },
    { "@type": "City", name: "Chandrapur" },
    { "@type": "City", name: "Amravati" },
    { "@type": "City", name: "Yavatmal" },
    { "@type": "Country", name: "India" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8767189437",
    contactType: "sales",
    areaServed: ["IN", "Maharashtra", "Vidarbha", "Nagpur", "Bhandara"],
    availableLanguage: ["English", "Marathi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lakhandur",
    addressLocality: "Bhandara",
    addressRegion: "Maharashtra",
    postalCode: "441803",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.1702,
    longitude: 79.655,
  },
  knowsAbout: [
    "egg incubator vidarbha",
    "egg incubator nagpur",
    "egg incubator maharashtra",
    "vidarbha egg incubator",
    "nagpur egg incubator",
    "automatic egg incubator",
    "fully automatic egg incubator",
    "100 egg incubator",
    "egg incubator manufacturer",
    "poultry incubator supplier",
    "egg hatching machine",
    "vidarbha poultry farming",
  ],
  sameAs: [
    "https://youtube.com/@jbeggincubator",
    "https://www.instagram.com/jb_eggs_incubators",
    "https://www.facebook.com/jbeggincubator",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Egg incubator Vidarbha, Nagpur & Maharashtra — JB automatic egg incubator manufacturer from Bhandara factory.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/products?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const faqPageJsonLd = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const blogPostingJsonLd = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  author: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: {
      "@type": "ImageObject",
      url: DEFAULT_OG_IMAGE,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl(`/blog/${post.slug}`),
  },
  keywords: post.tags?.join(", ") ?? KEYWORDS_META,
});

/** Local landing pages — reinforces Vidarbha / Nagpur / Maharashtra rankings */
export const LOCAL_SERVICE_AREAS = [
  {
    name: "Vidarbha",
    path: "/egg-incubator-vidarbha",
    headline: "Egg Incubator Vidarbha",
    blurb: "Factory in Bhandara — fast delivery across all Vidarbha districts.",
  },
  {
    name: "Nagpur",
    path: "/egg-incubator-nagpur",
    headline: "Egg Incubator Nagpur",
    blurb: "Nearest major city to our factory. Same-day pickup & quick courier.",
  },
  {
    name: "Maharashtra",
    path: "/egg-incubator-maharashtra",
    headline: "Egg Incubator Maharashtra",
    blurb: "Statewide delivery — Pune, Mumbai, Nashik & rural talukas.",
  },
] as const;

export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  telephone: "+91-8767189437",
  priceRange: "₹2700+",
  description:
    "Leading egg incubator manufacturer in Vidarbha and Nagpur region. Buy automatic egg incubator & egg hatching machine from Bhandara, Maharashtra.",
  address: organizationJsonLd.address,
  geo: organizationJsonLd.geo,
  areaServed: organizationJsonLd.areaServed,
  aggregateRating: organizationJsonLd.aggregateRating,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
});

export const localAreasItemListJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "JB Egg Incubator — Service Areas in Maharashtra",
  description: "Egg incubator delivery and support in Vidarbha, Nagpur, and Maharashtra.",
  itemListElement: LOCAL_SERVICE_AREAS.map((area, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: area.headline,
    url: canonicalUrl(area.path),
    description: area.blurb,
  })),
});

export interface ProductPageSeo {
  title: string;
  description: string;
  keywords: string;
}

/** Unique title & meta description per product — for Google Search Console & rich results */
export const PRODUCT_PAGE_SEO: Record<string, ProductPageSeo> = {
  JBW100: {
    title: "100 Egg Incubator JBW100 from ₹2,700 | Manual Hatching Machine",
    description:
      "JBW100 100 egg incubator — manual egg hatching machine from ₹2,700. Thermocol body, 120W, 80%+ hatch rate. Egg incubator manufacturer JB, Bhandara, Maharashtra. Pan-India delivery.",
    keywords:
      "100 egg incubator, 100 eggs incubator, JBW100, manual egg incubator, chicken egg incubator, poultry egg incubator, digital egg incubator, egg incubator machine, egg incubator manufacturer in India, egg incubator Maharashtra, egg hatching machine maharashtra, hatchery incubator, automatic egg incubator",
  },
  JBST100: {
    title: "120 Egg Incubator JBST100 ₹4,999 | Semi-Automatic with Hygrometer",
    description:
      "JBST100 semi-automatic egg incubator — 100–120 egg capacity, digital hygrometer, fiber body, 85%+ hatch rate. Poultry incubator supplier JB, Bhandara, Maharashtra & India.",
    keywords:
      "120 egg incubator, JBST100, semi automatic egg incubator, digital hygrometer incubator, egg hatching machine price, automatic egg incubator maharashtra",
  },
  JBI80M: {
    title: "Fully Automatic Egg Incubator JBI80M ₹10,499 | 80 Eggs",
    description:
      "JBI80M fully automatic egg incubator — 80 eggs, auto turning, metal body, digital controls, 85%+ hatch rate. Premium egg hatching machine from JB manufacturer, Bhandara, Maharashtra.",
    keywords:
      "fully automatic egg incubator, JBI80M, automatic egg incubator maharashtra, 80 egg incubator, egg hatching machine india, poultry incubator supplier",
  },
  JB528C: {
    title: "528+104 Combine Egg Incubator JB528C | Commercial Setter-Hatcher",
    description:
      "JB528C combine incubator — 528 eggs setting + 104 hatching, 400W, auto 45° turning, BLDC fan, digital temp & humidity. Weekly batch system for hatcheries. Made in India — JB Bhandara.",
    keywords:
      "528 egg incubator, combine egg incubator, setter hatcher incubator, commercial egg incubator maharashtra, JB528C, automatic egg incubator india",
  },
  JB160A: {
    title: "160 Egg Fully Automatic Incubator JB160A | 200W Small Farm",
    description:
      "JB160A 160 egg automatic incubator — 80–85% hatch rate, ACP body, 200W, weekly 53 eggs / monthly 265 eggs. Ideal for small poultry farms & hobbyists. JB manufacturer, Bhandara, Maharashtra.",
    keywords:
      "160 egg incubator, JB160A, fully automatic egg incubator, small farm incubator, egg hatching machine india, automatic egg incubator price",
  },
  JB240C: {
    title: "240+80 Combine Egg Incubator JB240C | 300W Automatic",
    description:
      "JB240C combine incubator — 240 setting + 80 hatching eggs, 3 trays, auto turning, 300W, digital controls. Weekly 80 eggs every 6 days. Poultry incubator JB, Bhandara, Maharashtra & India.",
    keywords:
      "240 egg incubator, combine incubator, JB240C, setter hatcher machine, automatic egg incubator maharashtra, commercial poultry incubator",
  },
  JB612C: {
    title: "612+204 Commercial Combine Incubator JB612C | 500W",
    description:
      "JB612C commercial combine incubator — 612 setting + 204 hatching, 6 trays, auto 45° turning, BLDC fan, 500W. Monthly up to 1,020 eggs. Egg incubator manufacturer JB, Bhandara, Maharashtra.",
    keywords:
      "612 egg incubator, commercial egg incubator, JB612C, hatchery incubator india, combine egg incubator, poultry incubator supplier maharashtra",
  },
  JB816C: {
    title: "816+272 High-Capacity Combine Incubator JB816C | 570W",
    description:
      "JB816C high-capacity combine incubator — 816 setting + 272 hatching, trolley tray system, 570W, auto turning & exhaust. Monthly 1,360 eggs. Commercial hatchery machine — JB Bhandara, India.",
    keywords:
      "816 egg incubator, commercial hatchery incubator, JB816C, large egg incubator india, combine setter hatcher, poultry incubator supplier india",
  },
};

export const getProductPageSeo = (model: string) => PRODUCT_PAGE_SEO[model];

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: canonicalUrl(item.path),
  })),
});

export const productJsonLd = (
  product: { id: string; name: string; price: string; tagline: string; image: string },
  spec: {
    slug: string;
    capacity: string;
    type: string;
    power: string;
    warranty: string;
  },
) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${product.name} — ${spec.type}`,
  description: `${spec.capacity}. ${product.tagline}. Egg incubator by JB — manufacturer in Bhandara, Maharashtra, India.`,
  image: absoluteAssetUrl(product.image),
  sku: product.id,
  mpn: product.id,
  brand: { "@type": "Brand", name: SITE_NAME },
  manufacturer: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: GOOGLE_RATING,
    reviewCount: 120,
    bestRating: 5,
    worstRating: 1,
  },
  review: googleReviews.slice(0, 3).map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
  })),
  offers: {
    "@type": "Offer",
    url: canonicalUrl(`/products/${spec.slug}`),
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: SITE_NAME },
    ...(product.price.includes("₹") && /\d/.test(product.price)
      ? { price: product.price.replace(/[^\d]/g, "") }
      : {}),
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Capacity", value: spec.capacity },
    { "@type": "PropertyValue", name: "Power", value: spec.power },
    { "@type": "PropertyValue", name: "Warranty", value: spec.warranty },
  ],
});

export const itemListJsonLd = (
  items: { name: string; path: string; description: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "JB Egg Incubator Models",
  description: "Egg incubator and egg hatching machine catalogue from JB manufacturer, Maharashtra, India.",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: canonicalUrl(item.path),
    description: item.description,
  })),
});
