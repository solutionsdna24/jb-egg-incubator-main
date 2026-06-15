import type { BlogPost } from "@/lib/blogs";

export const SITE_URL = "https://www.jbincubators.in";
export const SITE_NAME = "JB Egg Incubator";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;
export const DEFAULT_PHONE = "+91 8767189437";

/** Primary search phrases for Google & on-page SEO */
export const TARGET_KEYWORDS = [
  "Egg incubator manufacturer in India",
  "Automatic egg incubator machine",
  "Poultry incubator supplier",
  "Commercial egg incubator",
  "Egg hatching machine price",
  "Egg incubator in Maharashtra",
  "Best egg incubator company in India",
] as const;

export const KEYWORDS_META = [
  ...TARGET_KEYWORDS,
  "JB incubator",
  "JBW100",
  "JBST100",
  "JBI80M",
  "egg hatching machine India",
  "poultry incubator price",
  "buy egg incubator online",
].join(", ");

export type PageKey =
  | "home"
  | "products"
  | "details"
  | "contact"
  | "order"
  | "blogs"
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
    title: "Egg Incubator Manufacturer in India | JB Poultry Incubators",
    description:
      "JB is a leading egg incubator manufacturer in India & the best egg incubator company for farmers. Automatic egg incubator machines from ₹2,700. Commercial poultry incubator supplier with pan-India delivery.",
    path: "/egg-incubators",
    keywords: KEYWORDS_META,
  },
  products: {
    title: "Egg Hatching Machine Price & Models | Commercial Egg Incubator",
    description:
      "Compare egg hatching machine price for JBW100, JBST100 & JBI80M. Automatic egg incubator machine & commercial egg incubator options from a trusted poultry incubator supplier in India.",
    path: "/products",
    keywords:
      "egg hatching machine price, commercial egg incubator, automatic egg incubator machine, JBW100 price, JBST100, JBI80M, poultry incubator supplier India",
  },
  details: {
    title: "Best Egg Incubator Company in India | About JB Manufacturer",
    description:
      "Learn why JB is rated among the best egg incubator companies in India. Egg incubator manufacturer in Maharashtra with 85%+ hatch rates, warranty & expert poultry support.",
    path: "/details",
    keywords:
      "best egg incubator company in India, egg incubator manufacturer in India, egg incubator in Maharashtra, poultry incubator quality, incubator warranty",
  },
  contact: {
    title: "Egg Incubator in Maharashtra | Contact Poultry Incubator Supplier",
    description:
      "Contact JB Egg Incubator — poultry incubator supplier based in Bhandara, Maharashtra. Call +91 8767189437 for egg hatching machine price, orders & pan-India delivery.",
    path: "/contact",
    keywords:
      "egg incubator in Maharashtra, contact JB incubator, poultry incubator supplier, egg hatching machine price enquiry, incubator dealer Bhandara",
  },
  order: {
    title: "Order Automatic Egg Incubator | Egg Hatching Machine Price Quote",
    description:
      "Request egg hatching machine price & order your automatic egg incubator machine online. Commercial egg incubator enquiries with fast response from JB manufacturer in India.",
    path: "/jb-egg-incubator-order",
    keywords:
      "order egg incubator, egg hatching machine price quote, automatic egg incubator machine, commercial egg incubator order India",
  },
  blogs: {
    title: "Egg Incubator Blog | Buying Guides & Hatching Tips India",
    description:
      "Read guides on automatic egg incubator machines, commercial poultry incubators, egg hatching machine price & choosing the best egg incubator company in India.",
    path: "/blog",
    keywords:
      "egg incubator blog, automatic egg incubator guide, egg hatching machine price India, commercial egg incubator tips, poultry incubator supplier",
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
    "Egg incubator manufacturer in India. Automatic egg incubator machines, commercial poultry incubators, and egg hatching machines from ₹2,700 with pan-India delivery.",
  telephone: "+91-8767189437",
  email: "jbincubator5@gmail.com",
  priceRange: "₹2700-₹15000",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8767189437",
    contactType: "sales",
    areaServed: "IN",
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
    latitude: 20.8833,
    longitude: 79.6833,
  },
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
    "Best egg incubator company in India — automatic & commercial poultry incubator supplier.",
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
  keywords: KEYWORDS_META,
});
