import { ROUTES, PRODUCT_SLUGS } from "./routes";

export interface InternalLinkGroup {
  title: string;
  links: { label: string; to: string; description?: string }[];
}

export const internalLinkGroups: InternalLinkGroup[] = [
  {
    title: "Egg Incubator Products",
    links: [
      { label: "100 Egg Incubator — JBW100", to: ROUTES.product(PRODUCT_SLUGS.JBW100), description: "Manual egg hatching machine from ₹2,700" },
      { label: "120 Egg Incubator — JBST100", to: ROUTES.product(PRODUCT_SLUGS.JBST100), description: "Semi-automatic 100 egg incubator" },
      { label: "Fully Automatic — JBI80M", to: ROUTES.product(PRODUCT_SLUGS.JBI80M), description: "Premium automatic egg incubator" },
      { label: "Compare All Models", to: ROUTES.products },
    ],
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
      { label: "Egg Incubator Maharashtra", to: `${ROUTES.blog}/egg-incubator-maharashtra` },
      { label: "Egg Incubator Nagpur & Bhandara", to: `${ROUTES.blog}/egg-incubator-vidarbha-nagpur-bhandara` },
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
    "egg incubator Bhandara",
    "egg incubator Nagpur",
    "egg incubator Maharashtra",
    "poultry incubator Maharashtra",
  ],
  informational: [
    "how to hatch eggs in incubator",
    "egg incubation temperature chart",
    "21 day hatching process",
    "common incubation mistakes",
    "humidity for egg hatching",
  ],
};
