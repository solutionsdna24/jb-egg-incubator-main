import { ROUTES, PRODUCT_SLUGS } from "./routes";

export interface LandingPage {
  path: string;
  h1: string;
  eyebrow: string;
  subtitle: string;
  title: string;
  description: string;
  keywords: string;
  recommendedModel?: string;
  productPath?: string;
  sections: { heading: string; body: string[] }[];
  highlights: string[];
  relatedPaths: string[];
  faqs: { question: string; answer: string }[];
}

const p = (paths: string[]) => paths;

export const landingPages: LandingPage[] = [
  {
    path: "/100-egg-incubator",
    eyebrow: "JBW100 · Budget Pick",
    h1: "100 Egg Incubator — Manual Egg Hatching Machine from ₹2,700",
    subtitle:
      "JBW100 is JB's best-selling 100 egg incubator for beginners in Maharashtra and India. Thermocol body, 120W power, 80%+ hatch rate.",
    title: "100 Egg Incubator India | JBW100 from ₹2,700 — JB",
    description:
      "Buy 100 egg incubator JBW100 from JB — egg incubator manufacturer in Bhandara, Maharashtra. Manual egg hatching machine from ₹2,700 with pan-India delivery.",
    keywords: "100 egg incubator, 100 egg incubator india, 100 egg incubator price, JBW100, egg hatching machine, chicken egg incubator",
    recommendedModel: "JBW100",
    productPath: ROUTES.product(PRODUCT_SLUGS.JBW100),
    highlights: [
      "Up to 100 eggs per hatch cycle",
      "Manual control — easy for first-time farmers",
      "Thermocol body · 120 Watt · 220V",
      "From ₹2,700 with 1 year support",
      "Pan-India delivery from Bhandara factory",
    ],
    sections: [
      {
        heading: "Why Choose a 100 Egg Incubator?",
        body: [
          "A 100 egg incubator is the sweet spot for backyard poultry farms and village hatcheries in India. You get enough capacity to supply local demand without the cost of industrial machines.",
          "JBW100 is JB's entry 100 egg incubator — built at our Lakhandur, Bhandara factory for Indian 220V power and climate. Farmers across Maharashtra, Nagpur, Vidarbha, and nationwide use it for reliable chicken egg hatching.",
        ],
      },
      {
        heading: "JBW100 100 Egg Incubator Features",
        body: [
          "Manual temperature control with branded heating elements, single-fan cooling, and 2-bulb heating system. Holds up to 100 chicken eggs per cycle with 80%+ hatch rates when you follow our free hatching guide.",
          "Compare with our 120 egg incubator JBST100 if you need digital humidity monitoring, or JBI80M fully automatic egg incubator for hands-free operation.",
        ],
      },
    ],
    relatedPaths: p([
      "/120-egg-incubator",
      "/chicken-egg-incubator",
      "/egg-incubator-price-india",
      "/automatic-egg-incubator",
      "/egg-incubator-maharashtra",
    ]),
    faqs: [
      {
        question: "What is the 100 egg incubator price in India?",
        answer: "JBW100 100 egg incubator price starts from ₹2,700. Call +91 8767189437 for today's price and ready stock.",
      },
      {
        question: "Is JBW100 good for chicken eggs?",
        answer: "Yes. JBW100 is ideal as a chicken egg incubator for flocks up to 100 eggs per cycle with proper temperature and humidity.",
      },
    ],
  },
  {
    path: "/120-egg-incubator",
    eyebrow: "JBST100 · Most Popular",
    h1: "120 Egg Incubator — Semi-Automatic with Digital Hygrometer",
    subtitle:
      "JBST100 fits up to 100–120 eggs with digital humidity tracking — the most popular automatic egg incubator for repeat hatchers in Maharashtra & India.",
    title: "120 Egg Incubator India | JBST100 Semi-Automatic — JB",
    description:
      "Buy 120 egg incubator JBST100 from JB — semi-automatic egg incubator with digital hygrometer, fiber body & 85%+ hatch rate. Egg incubator manufacturer Bhandara.",
    keywords: "120 egg incubator, 120 egg incubator india, JBST100, automatic egg incubator, 100 egg incubator, poultry incubator",
    recommendedModel: "JBST100",
    productPath: ROUTES.product(PRODUCT_SLUGS.JBST100),
    highlights: [
      "100–120 egg tray layout capacity",
      "Digital hygrometer + mercury thermometer",
      "Fiber body · double fan cooling",
      "From ₹4,999 · 85%+ hatch rate",
      "Best for repeat monthly hatch cycles",
    ],
    sections: [
      {
        heading: "120 Egg Incubator vs 100 Egg Incubator",
        body: [
          "Farmers searching for a 120 egg incubator often need slightly more tray space and better humidity control than a basic manual unit. JBST100 delivers both with a stronger fiber body and digital hygrometer.",
          "It is our most ordered model across egg incubator Maharashtra and pan-India markets — ideal when you hatch every few weeks and want monitoring without full automation cost.",
        ],
      },
      {
        heading: "Who Should Buy JBST100?",
        body: [
          "Small commercial hatcheries, growing poultry businesses, and serious backyard farmers who have outgrown a manual 100 egg incubator. Pair with our poultry incubation training for best results.",
          "Upgrade to fully automatic egg incubator JBI80M when you need auto egg turning and metal body durability.",
        ],
      },
    ],
    relatedPaths: p([
      "/100-egg-incubator",
      "/automatic-egg-incubator",
      "/fully-automatic-egg-incubator",
      "/egg-incubator-price-india",
      "/egg-hatching-machine-india",
    ]),
    faqs: [
      {
        question: "Does JBST100 hold 120 eggs?",
        answer: "JBST100 uses a 120-egg tray layout and is rated for up to 100 eggs per cycle with optimal spacing for best hatch rates.",
      },
      {
        question: "Is JBST100 an automatic egg incubator?",
        answer: "JBST100 is semi-automatic — digital humidity monitoring with manual egg turning. For full automation see our fully automatic egg incubator JBI80M.",
      },
    ],
  },
  {
    path: "/automatic-egg-incubator",
    eyebrow: "JBST100 & JBI80M",
    h1: "Automatic Egg Incubator — Maharashtra & India",
    subtitle:
      "JB automatic egg incubator models from Bhandara: JBST100 semi-automatic with digital hygrometer and JBI80M fully automatic with auto egg turning.",
    title: "Automatic Egg Incubator Maharashtra & India | JB Models",
    description:
      "Buy automatic egg incubator from JB — egg incubator manufacturer in Bhandara, Vidarbha. JBST100 & JBI80M with digital controls, pan-India delivery from ₹4,999.",
    keywords: "automatic egg incubator, automatic egg incubator maharashtra, automatic egg incubator india, JBST100, JBI80M, egg hatching machine",
    recommendedModel: "JBST100 / JBI80M",
    productPath: ROUTES.product(PRODUCT_SLUGS.JBST100),
    highlights: [
      "Digital humidity & temperature monitoring",
      "JBST100 semi-auto from ₹4,999",
      "JBI80M fully automatic from ₹10,499",
      "120W power · factory-tested in Bhandara",
      "Setup support in Marathi & English",
    ],
    sections: [
      {
        heading: "Semi-Automatic vs Fully Automatic Egg Incubator",
        body: [
          "An automatic egg incubator saves time on monitoring. JBST100 adds digital hygrometer and stronger fiber build — perfect automatic egg incubator for farms hatching regularly across Maharashtra.",
          "JBI80M is our fully automatic egg incubator with metal body, automatic egg rotation, and digital display — built for commercial hatcheries that need consistent hands-free cycles.",
        ],
      },
      {
        heading: "Automatic Egg Incubator Manufacturer in India",
        body: [
          "JB manufactures automatic egg incubator machines at Lakhandur, Bhandara since 2022. Every unit is calibrated for 37.5°C–37.8°C before dispatch to Nagpur, statewide Maharashtra, and all India.",
          "Order online, call +91 8767189437, or WhatsApp for automatic egg incubator price and stock confirmation.",
        ],
      },
    ],
    relatedPaths: p([
      "/fully-automatic-egg-incubator",
      "/120-egg-incubator",
      "/egg-incubator-maharashtra",
      "/egg-hatching-machine-india",
      "/chicken-egg-incubator",
    ]),
    faqs: [
      {
        question: "Which JB model is the best automatic egg incubator?",
        answer: "JBST100 for semi-automatic with digital humidity. JBI80M for fully automatic egg incubator with auto turning and metal body.",
      },
      {
        question: "Do you deliver automatic egg incubators across India?",
        answer: "Yes. JB delivers automatic egg incubator machines pan-India from our Bhandara factory with secure packaging and phone setup support.",
      },
    ],
  },
  {
    path: "/fully-automatic-egg-incubator",
    eyebrow: "JBI80M · Premium",
    h1: "Fully Automatic Egg Incubator — JBI80M Metal Body",
    subtitle:
      "JBI80M fully automatic egg incubator with auto egg turning, digital monitor, fuse backup & 85%+ hatch rate. Premium egg hatching machine from JB India.",
    title: "Fully Automatic Egg Incubator India | JBI80M — JB",
    description:
      "Buy fully automatic egg incubator JBI80M from JB — auto egg turning, digital controls, metal body. Egg incubator manufacturer Bhandara, Maharashtra. From ₹10,499.",
    keywords: "fully automatic egg incubator, fully automatic egg incubator india, JBI80M, automatic egg incubator, commercial egg incubator",
    recommendedModel: "JBI80M",
    productPath: ROUTES.product(PRODUCT_SLUGS.JBI80M),
    highlights: [
      "Automatic egg rotation — no manual turning",
      "Metal body · dual fan cooling",
      "Digital hygrometer & thermometer",
      "Fuse & battery backup for power cuts",
      "Up to 80 eggs · 85%+ hatch rate",
    ],
    sections: [
      {
        heading: "Why Buy a Fully Automatic Egg Incubator?",
        body: [
          "A fully automatic egg incubator eliminates daily egg turning — the biggest labour cost in manual hatching. JBI80M rotates eggs automatically while maintaining stable 37.5°C–37.8°C heat.",
          "Ideal for commercial hatcheries, busy farmers, and egg incubator supplier buyers who run repeat cycles across Maharashtra and India.",
        ],
      },
      {
        heading: "JBI80M Fully Automatic Features",
        body: [
          "Metal construction for durability, Made-in-India adapter, digital monitoring, and backup features for rural power conditions common in Vidarbha and other states.",
          "Compare with automatic egg incubator JBST100 if budget is tighter, or 100 egg incubator JBW100 for seasonal manual hatching.",
        ],
      },
    ],
    relatedPaths: p([
      "/automatic-egg-incubator",
      "/120-egg-incubator",
      "/egg-hatching-machine-india",
      "/egg-incubator-price-india",
      "/chicken-egg-incubator",
    ]),
    faqs: [
      {
        question: "What is the fully automatic egg incubator price?",
        answer: "JBI80M fully automatic egg incubator starts from ₹10,499. Contact JB for current price and delivery to your location.",
      },
      {
        question: "Does JBI80M turn eggs automatically?",
        answer: "Yes. JBI80M is a fully automatic egg incubator with automatic egg rotation and digital temperature monitoring.",
      },
    ],
  },
  {
    path: "/egg-incubator-maharashtra",
    eyebrow: "Factory Direct · Vidarbha",
    h1: "Egg Incubator Maharashtra — Buy from Bhandara Manufacturer",
    subtitle:
      "JB manufactures egg incubators in Lakhandur, Bhandara, Vidarbha. Fast delivery to Nagpur, Pune, Mumbai & all Maharashtra — egg incubator supplier since 2022.",
    title: "Egg Incubator Maharashtra | JB Factory Bhandara",
    description:
      "Buy egg incubator in Maharashtra from JB — manufacturer in Bhandara, Vidarbha. Automatic egg incubator, 100 egg incubator & egg hatching machine with Marathi support.",
    keywords: "egg incubator maharashtra, egg incubator nagpur, egg incubator bhandara, poultry incubator maharashtra, egg incubator manufacturer maharashtra",
    highlights: [
      "Factory in Lakhandur, Bhandara, Vidarbha",
      "Delivery to Nagpur, Wardha, Pune & statewide",
      "Marathi & English phone support",
      "Models from ₹2,700 · ready stock",
      "Local spare parts & warranty service",
    ],
    sections: [
      {
        heading: "Egg Incubator Manufacturer in Maharashtra",
        body: [
          "JB Egg Incubator is an egg incubator manufacturer in Maharashtra based in the Vidarbha region. Local production means faster delivery, spare parts access, and support that understands Maharashtra farm conditions.",
          "We supply 100 egg incubator JBW100, 120 egg incubator JBST100, automatic egg incubator, and fully automatic egg incubator JBI80M to farmers statewide.",
        ],
      },
      {
        heading: "Delivery Across Maharashtra",
        body: [
          "We deliver egg incubators to Nagpur, Bhandara, Wardha, Amravati, Pune, Mumbai, Nashik, and rural talukas. Many customers visit our factory or receive courier delivery with setup guidance.",
          "Farmers outside Maharashtra order the same models with identical warranty — see egg hatching machine India page for pan-India shipping.",
        ],
      },
    ],
    relatedPaths: p([
      "/egg-hatching-machine-india",
      "/automatic-egg-incubator",
      "/egg-incubator-price-india",
      "/100-egg-incubator",
      "/chicken-egg-incubator",
    ]),
    faqs: [
      {
        question: "Where is JB egg incubator factory in Maharashtra?",
        answer: "JB manufactures at Lakhandur, Bhandara, Maharashtra 441803 — in the Vidarbha region near Nagpur.",
      },
      {
        question: "Do you deliver egg incubators to Nagpur?",
        answer: "Yes. We deliver egg incubator Maharashtra statewide including Nagpur, Bhandara, and all districts with phone support.",
      },
    ],
  },
  {
    path: "/egg-hatching-machine-india",
    eyebrow: "Pan-India Delivery",
    h1: "Egg Hatching Machine India — JB Incubator Models & Price",
    subtitle:
      "JB egg hatching machine range from ₹2,700 — manual, semi-automatic & fully automatic. Egg incubator manufacturer in Bhandara shipping across all Indian states.",
    title: "Egg Hatching Machine India | JB Models from ₹2,700",
    description:
      "Buy egg hatching machine in India from JB — JBW100, JBST100, JBI80M. Egg incubator manufacturer with pan-India delivery, 85%+ hatch rates & warranty.",
    keywords: "egg hatching machine india, egg hatching machine, egg hatching machine price, egg incubator india, automatic egg incubator india",
    highlights: [
      "JBW100 from ₹2,700 · JBI80M premium auto",
      "Egg incubator supplier India wide",
      "Secure packaging & fast dispatch",
      "85%+ hatch rate with training support",
      "1 year unit support · 6 month controller warranty",
    ],
    sections: [
      {
        heading: "Egg Hatching Machine Price in India",
        body: [
          "Egg hatching machine price in India varies by automation and body material. JB keeps pricing transparent: JBW100 manual from ₹2,700, JBST100 semi-automatic from ₹4,999, JBI80M fully automatic from ₹10,499.",
          "Use our incubation capacity calculator or call for today's egg hatching machine price and delivery quote to your state.",
        ],
      },
      {
        heading: "Why JB for Egg Hatching Machine India?",
        body: [
          "Factory-direct from Bhandara eliminates middleman markup. 1,000+ farmers trust JB as their egg incubator supplier India wide for honest pricing and after-sales support.",
          "Every egg hatching machine runs on 120W at 220V — practical for village and semi-urban farms across India.",
        ],
      },
    ],
    relatedPaths: p([
      "/egg-incubator-price-india",
      "/egg-incubator-maharashtra",
      "/100-egg-incubator",
      "/automatic-egg-incubator",
      "/fully-automatic-egg-incubator",
    ]),
    faqs: [
      {
        question: "What is egg hatching machine price in India?",
        answer: "JB egg hatching machine price starts from ₹2,700 for JBW100. JBST100 and JBI80M are priced higher based on features.",
      },
      {
        question: "Do you ship egg hatching machines outside Maharashtra?",
        answer: "Yes. JB ships egg hatching machines to every Indian state with secure packaging and setup guidance.",
      },
    ],
  },
  {
    path: "/egg-incubator-price-india",
    eyebrow: "Transparent Pricing",
    h1: "Egg Incubator Price in India — JB Models Compared (2026)",
    subtitle:
      "Clear egg incubator price India guide: JBW100 ₹2,700 · JBST100 ₹4,999 · JBI80M ₹10,499. No hidden costs from JB manufacturer Bhandara.",
    title: "Egg Incubator Price India | JB Models from ₹2,700",
    description:
      "Egg incubator price in India — compare JBW100, JBST100 & JBI80M. 100 egg incubator, automatic egg incubator & fully automatic prices from JB manufacturer.",
    keywords: "egg incubator price india, egg incubator price, egg hatching machine price, 100 egg incubator price, automatic egg incubator price",
    highlights: [
      "JBW100 — from ₹2,700 (100 egg incubator)",
      "JBST100 — from ₹4,999 (120 egg layout)",
      "JBI80M — from ₹10,499 (fully automatic)",
      "Free setup guidance on every order",
      "Call for bulk & current stock price",
    ],
    sections: [
      {
        heading: "Egg Incubator Price Comparison",
        body: [
          "Egg incubator price in India should match capacity and automation. JBW100 is the lowest egg incubator price for a 100 egg incubator — manual thermocol body for beginners.",
          "JBST100 adds digital humidity at mid-range egg incubator price. JBI80M is the premium fully automatic egg incubator price for commercial repeat hatching.",
        ],
      },
      {
        heading: "How to Get Today's Price",
        body: [
          "Prices update with material costs. Submit an order enquiry at jbincubators.in/order-egg-incubator, WhatsApp +91 8767189437, or call for egg incubator price India quote with shipping to your district.",
          "See egg hatching machine India page for feature comparison and egg incubator Maharashtra for local factory pickup options.",
        ],
      },
    ],
    relatedPaths: p([
      "/100-egg-incubator",
      "/120-egg-incubator",
      "/egg-hatching-machine-india",
      "/automatic-egg-incubator",
      "/egg-incubator-maharashtra",
    ]),
    faqs: [
      {
        question: "What is the cheapest egg incubator price in India?",
        answer: "JBW100 100 egg incubator starts from ₹2,700 — the lowest egg incubator price in the JB range.",
      },
      {
        question: "Is shipping included in egg incubator price?",
        answer: "Shipping charges depend on your location. Call JB for total egg incubator price India including delivery to your state.",
      },
    ],
  },
  {
    path: "/chicken-egg-incubator",
    eyebrow: "Chicken · Duck · Quail",
    h1: "Chicken Egg Incubator — Hatch Healthy Chicks with JB",
    subtitle:
      "JB chicken egg incubator machines maintain 37.5°C–37.8°C for 18–21 day cycles. 100 egg, 120 egg & fully automatic models for poultry farms in India.",
    title: "Chicken Egg Incubator India | JB Poultry Incubators",
    description:
      "Buy chicken egg incubator from JB — 100 egg incubator JBW100, automatic models JBST100 & JBI80M. Egg incubator manufacturer Maharashtra, pan-India delivery.",
    keywords: "chicken egg incubator, chicken egg incubator india, poultry incubator, 100 egg incubator, egg hatching machine, how to hatch chicken eggs",
    recommendedModel: "JBW100 / JBST100",
    productPath: ROUTES.product(PRODUCT_SLUGS.JBW100),
    highlights: [
      "Ideal 37.5°C–37.8°C for chicken eggs",
      "50–55% humidity days 1–18 · 65–70% lockdown",
      "21 day hatching process support included",
      "Also suitable for duck & quail eggs",
      "Free hatching guide & training available",
    ],
    sections: [
      {
        heading: "Best Chicken Egg Incubator for Indian Farms",
        body: [
          "A chicken egg incubator must hold stable temperature through India's variable power and summer heat. JB units are factory-calibrated at Bhandara for 37.5°C–37.8°C — the ideal range for chicken egg hatching.",
          "JBW100 is the top chicken egg incubator for beginners. JBST100 adds humidity tracking for better lockdown results. JBI80M handles auto turning for commercial chicken hatcheries.",
        ],
      },
      {
        heading: "Chicken Egg Incubation Tips",
        body: [
          "Use clean eggs within 7 days, turn 3–5 times daily on manual models, and raise humidity to 65–70% on days 19–21. Read our poultry incubation training and free hatching guide for the full 21 day hatching process.",
          "Farmers report 80–90% hatch rates with JB chicken egg incubator when following our temperature chart and support guidance.",
        ],
      },
    ],
    relatedPaths: p([
      "/100-egg-incubator",
      "/automatic-egg-incubator",
      "/egg-incubator-maharashtra",
      "/egg-hatching-machine-india",
      "/egg-incubator-price-india",
    ]),
    faqs: [
      {
        question: "Which JB model is best for chicken eggs?",
        answer: "JBW100 for beginners, JBST100 for repeat chicken egg incubator use with humidity monitoring, JBI80M for fully automatic commercial hatching.",
      },
      {
        question: "What temperature for chicken egg incubator?",
        answer: "Maintain 37.5°C–37.8°C throughout incubation. JB chicken egg incubators are set for this range at the factory.",
      },
    ],
  },
];

export const landingPagesByPath: Record<string, LandingPage> = Object.fromEntries(
  landingPages.map((page) => [page.path, page]),
);

export const LANDING_PATHS = landingPages.map((p) => p.path);

export const getLandingRelated = (page: LandingPage) =>
  page.relatedPaths
    .map((path) => landingPagesByPath[path])
    .filter(Boolean);
