import type { BlogPost } from "@/lib/blogs";

export const SITE_URL = "https://www.jbincubators.in";
export const SITE_NAME = "JB Egg Incubator";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;
export const DEFAULT_PHONE = "+91 8767189437";

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
  "commercial egg incubator",
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
    title: "Egg Incubator Maharashtra & India | JB Manufacturer Bhandara",
    description:
      "Buy egg incubator in Maharashtra & India from JB — egg incubator manufacturer in Vidarbha (Bhandara, Nagpur). Automatic egg incubator, poultry incubator supplier & egg hatching machine from ₹2,700 with pan-India delivery.",
    path: "/egg-incubators",
    keywords: KEYWORDS_META,
  },
  products: {
    title: "Egg Hatching Machine Maharashtra & India | JB Incubator Models",
    description:
      "Compare egg hatching machine price in Maharashtra & India. Automatic egg incubator JBW100, JBST100, JBI80M from poultry incubator supplier JB — factory in Bhandara, Vidarbha.",
    path: "/products",
    keywords:
      "egg hatching machine maharashtra, egg hatching machine india, automatic egg incubator maharashtra, automatic egg incubator nagpur, JBW100, JBST100, JBI80M, poultry incubator supplier",
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

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  image: DEFAULT_OG_IMAGE,
  description:
    "Egg incubator manufacturer in Maharashtra and India. Automatic egg incubator, poultry incubator supplier, and egg hatching machine from Bhandara, Vidarbha — serving Nagpur and pan-India.",
  telephone: "+91-8767189437",
  email: "jbincubator5@gmail.com",
  foundingDate: "2022",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 12 },
  priceRange: "₹2700-₹15000",
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "City", name: "Nagpur" },
    { "@type": "City", name: "Bhandara" },
    { "@type": "AdministrativeArea", name: "Vidarbha" },
    { "@type": "Country", name: "India" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8767189437",
    contactType: "sales",
    areaServed: ["IN", "Maharashtra", "Vidarbha"],
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
    "egg incubator maharashtra",
    "egg incubator india",
    "automatic egg incubator",
    "fully automatic egg incubator",
    "100 egg incubator",
    "egg incubator manufacturer",
    "egg incubator supplier India",
    "poultry incubator supplier",
    "egg hatching machine",
    "how to hatch eggs in incubator",
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
    "Egg incubator Maharashtra & India — automatic egg incubator manufacturer and poultry incubator supplier from Bhandara, Vidarbha.",
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
