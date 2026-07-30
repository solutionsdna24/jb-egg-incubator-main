import { publicPath } from "./canonical";

/** In-app routes — trailing slash matches GitHub Pages (avoids 301 on crawl). */
export const ROUTES = {
  home: publicPath("/egg-incubators"),
  products: publicPath("/products"),
  product: (slug: string) => publicPath(`/products/${slug}`),
  about: publicPath("/about"),
  contact: publicPath("/contact"),
  order: publicPath("/order-egg-incubator"),
  blog: publicPath("/blog"),
  blogPost: (slug: string) => publicPath(`/blog/${slug}`),
  training: publicPath("/guides/poultry-incubation-training"),
  hatchingGuide: publicPath("/guides/free-hatching-guide"),
  calculator: publicPath("/tools/incubation-capacity-calculator"),
  landing100Egg: publicPath("/100-egg-incubator"),
  landing120Egg: publicPath("/120-egg-incubator"),
  landingAutomatic: publicPath("/automatic-egg-incubator"),
  landingFullyAutomatic: publicPath("/fully-automatic-egg-incubator"),
  landingMaharashtra: publicPath("/egg-incubator-maharashtra"),
  landingVidarbha: publicPath("/egg-incubator-vidarbha"),
  landingNagpur: publicPath("/egg-incubator-nagpur"),
  landingHatchingMachine: publicPath("/egg-hatching-machine-india"),
  landingPrice: publicPath("/egg-incubator-price-india"),
  landingBhandara: publicPath("/egg-incubator-bhandara"),
  landingNearMe: publicPath("/egg-incubator-near-me"),
  landingChicken: publicPath("/chicken-egg-incubator"),
} as const;

export const PRODUCT_SLUGS: Record<string, string> = {
  JBW100: "jbw100-100-egg-incubator",
  JBST100: "jbst100-automatic-egg-incubator",
  JBI80M: "jbi80m-fully-automatic-egg-incubator",
  JB528C: "jb528-528-104-combine-incubator",
  JB160A: "jb160-160-egg-automatic-incubator",
  JB240C: "jb240-240-80-combine-incubator",
  JB612C: "jb612-612-204-combine-incubator",
  JB816C: "jb816-816-272-combine-incubator",
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
