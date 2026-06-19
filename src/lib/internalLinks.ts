import { ROUTES, PRODUCT_SLUGS } from "./routes";
import { blogPosts } from "./blogs";

export interface InternalLinkGroup {
  title: string;
  links: { label: string; to: string; description?: string }[];
}

export const internalLinkGroups: InternalLinkGroup[] = [
  {
    title: "Keyword Landing Pages",
    links: [
      { label: "100 Egg Incubator", to: ROUTES.landing100Egg, description: "JBW100 from ₹2,700" },
      { label: "120 Egg Incubator", to: ROUTES.landing120Egg, description: "JBST100 semi-automatic" },
      { label: "Automatic Egg Incubator", to: ROUTES.landingAutomatic },
      { label: "Fully Automatic Egg Incubator", to: ROUTES.landingFullyAutomatic },
      { label: "Egg Incubator Vidarbha", to: ROUTES.landingVidarbha },
      { label: "Egg Incubator Nagpur", to: ROUTES.landingNagpur },
      { label: "Egg Incubator Maharashtra", to: ROUTES.landingMaharashtra },
      { label: "Egg Hatching Machine India", to: ROUTES.landingHatchingMachine },
      { label: "Egg Incubator Price India", to: ROUTES.landingPrice },
      { label: "Chicken Egg Incubator", to: ROUTES.landingChicken },
    ],
  },
  {
    title: "Egg Incubator Products",
    links: [
      { label: "JBW100 — 100 Egg Incubator", to: ROUTES.product(PRODUCT_SLUGS.JBW100), description: "From ₹2,700" },
      { label: "JBST100 — Semi-Automatic", to: ROUTES.product(PRODUCT_SLUGS.JBST100), description: "Digital hygrometer" },
      { label: "JBI80M — Fully Automatic", to: ROUTES.product(PRODUCT_SLUGS.JBI80M), description: "Premium 80 egg" },
      { label: "JB528C — 528+104 Combine", to: ROUTES.product(PRODUCT_SLUGS.JB528C) },
      { label: "JB160A — 160 Egg Automatic", to: ROUTES.product(PRODUCT_SLUGS.JB160A) },
      { label: "JB240C — 240+80 Combine", to: ROUTES.product(PRODUCT_SLUGS.JB240C) },
      { label: "JB612C — 612+204 Commercial", to: ROUTES.product(PRODUCT_SLUGS.JB612C) },
      { label: "JB816C — 816+272 Commercial", to: ROUTES.product(PRODUCT_SLUGS.JB816C) },
      { label: "Compare All Models", to: ROUTES.products },
    ],
  },
  {
    title: "Blog Articles",
    links: blogPosts.map((post) => ({
      label: post.title,
      to: ROUTES.blogPost(post.slug),
      description: post.category,
    })),
  },
  {
    title: "Guides & Training",
    links: [
      { label: "Poultry Incubation Training", to: ROUTES.training },
      { label: "Free Hatching Guide (PDF)", to: ROUTES.hatchingGuide },
      { label: "Incubation Capacity Calculator", to: ROUTES.calculator },
      { label: "How to Hatch Eggs in Incubator", to: `${ROUTES.blog}/how-to-hatch-eggs-in-incubator` },
      { label: "21 Day Hatching Process", to: `${ROUTES.blog}/21-day-hatching-process` },
    ],
  },
  {
    title: "About JB",
    links: [
      { label: "About JB Egg Incubator", to: ROUTES.about },
      { label: "Why Choose JB", to: `${ROUTES.about}#why-choose-jb` },
      { label: "Manufacturing Process", to: `${ROUTES.about}#manufacturing-process` },
      { label: "Customer Success Stories", to: `${ROUTES.about}#customer-success-stories` },
      { label: "Our Journey Since 2022", to: `${ROUTES.about}#our-journey-since-2022` },
    ],
  },
  {
    title: "Local & Regional",
    links: [
      { label: "Egg Incubator Vidarbha", to: ROUTES.landingVidarbha },
      { label: "Egg Incubator Nagpur", to: ROUTES.landingNagpur },
      { label: "Egg Incubator Maharashtra", to: ROUTES.landingMaharashtra },
      { label: "Vidarbha Guide (Blog)", to: `${ROUTES.blog}/egg-incubator-vidarbha-nagpur-bhandara` },
      { label: "Poultry Incubator Maharashtra", to: `${ROUTES.blog}/commercial-poultry-incubator-supplier` },
      { label: "Contact — Bhandara Factory", to: ROUTES.contact },
    ],
  },
];

export const seoKeywords = {
  highPriority: [
    "egg incubator Maharashtra",
    "egg incubator India",
    "automatic egg incubator",
    "egg hatching machine",
    "fully automatic egg incubator",
    "100 egg incubator",
    "120 egg incubator",
    "egg incubator manufacturer",
    "egg incubator supplier India",
  ],
  local: [
    "egg incubator vidarbha",
    "egg incubator nagpur",
    "egg incubator maharashtra",
    "vidarbha egg incubator",
    "nagpur egg incubator",
    "egg incubator Bhandara",
    "poultry incubator vidarbha",
    "poultry incubator nagpur",
  ],
  informational: [
    "how to hatch eggs in incubator",
    "egg incubation temperature chart",
    "21 day hatching process",
    "common incubation mistakes",
    "humidity for egg hatching",
  ],
};
