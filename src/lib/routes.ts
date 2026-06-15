/** Canonical structured URLs for SEO & internal linking */
export const ROUTES = {
  home: "/egg-incubators",
  products: "/products",
  product: (slug: string) => `/products/${slug}` as const,
  about: "/about",
  contact: "/contact",
  order: "/order-egg-incubator",
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}` as const,
  training: "/guides/poultry-incubation-training",
  hatchingGuide: "/guides/free-hatching-guide",
  calculator: "/tools/incubation-capacity-calculator",
} as const;

export const PRODUCT_SLUGS: Record<string, string> = {
  JBW100: "jbw100-100-egg-incubator",
  JBST100: "jbst100-automatic-egg-incubator",
  JBI80M: "jbi80m-fully-automatic-egg-incubator",
};

export const slugToProductId = (slug: string) =>
  Object.entries(PRODUCT_SLUGS).find(([, s]) => s === slug)?.[0];

export const ABOUT_SECTIONS = {
  aboutJb: "about-jb",
  whyChoose: "why-choose-jb",
  manufacturing: "manufacturing-process",
  successStories: "customer-success-stories",
  journey: "our-journey-since-2022",
  team: "team",
} as const;
