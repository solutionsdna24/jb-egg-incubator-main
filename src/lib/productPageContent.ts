import { ROUTES, PRODUCT_SLUGS } from "./routes";

export interface ProductPageContent {
  model: string;
  /** SEO-rich intro paragraphs (800+ words total with sections) */
  intro: string[];
  sections: { heading: string; body: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedModels: string[];
  relatedBlogSlugs: string[];
  relatedLandingPaths: string[];
}

const sharedFaqs = (model: string, hatchRate: string, turning: string, power: string, warranty: string) => [
  {
    question: `What is the hatch rate of ${model}?`,
    answer: `${model} delivers ${hatchRate} when you follow JB poultry incubation training — fresh eggs, stable humidity, and correct lockdown on days 19–21.`,
  },
  {
    question: `Does ${model} support automatic egg turning?`,
    answer: turning,
  },
  {
    question: `What is the power consumption of ${model}?`,
    answer: `${model} runs at ${power} on standard 220V Indian power — low enough for village household circuits across Maharashtra and India.`,
  },
  {
    question: `What warranty comes with ${model}?`,
    answer: warranty,
  },
  {
    question: `What temperature range does ${model} maintain?`,
    answer: `${model} is factory-calibrated for 37.5°C–37.8°C — the ideal chicken egg incubator range. Digital models display live readings on the controller.`,
  },
  {
    question: `Does ${model} have humidity control?`,
    answer: `Yes. ${model} supports manual or digital humidity monitoring depending on model tier. Maintain 50–55% days 1–18 and 65–70% during lockdown for best poultry egg incubator results.`,
  },
  {
    question: `What is the delivery time for ${model}?`,
    answer: `Nagpur and Vidarbha orders typically arrive in 1–5 days from our Bhandara factory. Pan-India courier delivery takes 3–10 days depending on your state. Call +91 8767189437 for today's stock.`,
  },
  {
    question: `Is ${model} suitable for duck eggs?`,
    answer: `Yes. Duck eggs need slightly higher humidity — JB support guides duck settings on ${model}. Many Maharashtra farmers hatch duck and chicken in separate cycles.`,
  },
  {
    question: `Can I hatch quail eggs in ${model}?`,
    answer: `Yes. Quail eggs need shorter cycles and careful tray spacing. Contact JB for quail tray advice on ${model} before your first batch.`,
  },
  {
    question: `What after-sales support does JB provide for ${model}?`,
    answer: `Free phone setup in Marathi and English, spare parts from Bhandara, poultry incubation training, and hatching guide PDF. ${model} buyers join 1,000+ farmers supported since 2022.`,
  },
];

const productPages: Record<string, ProductPageContent> = {
  JBW100: {
    model: "JBW100",
    intro: [
      "The JBW100 is JB's best-selling 100 egg incubator — a manual poultry egg incubator and chicken egg incubator built for beginners, backyard farms, and first-time hatchers across egg incubator Maharashtra, Vidarbha, Nagpur, and all India. As an egg incubator manufacturer in India based in Bhandara, JB designed JBW100 for farmers who want a reliable 100 eggs incubator without the cost of a fully automatic incubator or commercial hatchery incubator.",
      "Unlike generic egg incubator machine listings online, every JBW100 is assembled and calibrated at our Lakhandur factory for Indian 220V power and summer heat. Thermocol body keeps weight low for rural delivery. At 120W power consumption, running costs stay affordable for village poultry farms comparing egg hatching machine price across Maharashtra.",
      "Search 100 egg incubator, 100 eggs incubator, or digital egg incubator alternatives — JBW100 is the honest entry point before upgrading to semi-automatic JBST100 or fully automatic incubator JBI80M. Factory-direct pricing from ₹2,700 with no middleman markup.",
    ],
    sections: [
      {
        heading: "Why Choose JBW100 as Your 100 Egg Incubator?",
        body: [
          "JBW100 fits farmers hatching up to 100 chicken eggs per cycle who want to learn the full 21 day process. Manual turning builds incubation skills that improve results when you later upgrade to an automatic egg incubator or commercial egg incubator.",
          "The poultry egg incubator design uses a single fan cooling system, dual bulb heating, and a branded controller tested for stable 37.5°C–37.8°C. Farmers in Nagpur division and Vidarbha report 80%+ hatch rates when following JB training — competitive with imported egg incubator machine brands at half the price.",
          "Ideal for seasonal hatching, school agriculture projects, women's self-help groups, and desi chicken breeders starting a small hatchery incubator journey before scaling to 160, 240, or 528 egg combine models.",
        ],
      },
      {
        heading: "JBW100 vs Automatic Egg Incubator Models",
        body: [
          "A manual 100 egg incubator costs less than a semi-automatic or fully automatic incubator because you turn eggs by hand three to five times daily. JBST100 adds a digital hygrometer for repeat monthly hatches. JBI80M eliminates turning with automatic egg rotation and a metal body.",
          "Choose JBW100 when budget is tight and you hatch once or twice a year. Choose automatic egg incubator JBST100 when humidity swings hurt your lockdown results. Choose JBI80M when labour time matters for a commercial poultry egg incubator workflow.",
          "Compare all models on our products page or use the incubation capacity calculator. JB remains one egg incubator manufacturer in India with transparent pricing from starter to hatchery incubator scale.",
        ],
      },
      {
        heading: "Egg Incubator Maharashtra & Pan-India Delivery",
        body: [
          "JB delivers JBW100 across egg incubator Maharashtra statewide — Nagpur, Pune, Mumbai, Nashik, and rural talukas. Vidarbha customers often collect from our Bhandara factory within one hour of Nagpur.",
          "Pan-India courier packaging protects the thermocol body during transit. Every order includes setup guidance, warranty card, and links to free poultry incubation training. Search egg incubator manufacturer in India — JB ships the same JBW100 quality to Karnataka, Gujarat, Uttar Pradesh, and every state.",
          "Call +91 8767189437 for total landed price including delivery to your district.",
        ],
      },
      {
        heading: "Specifications That Matter for Poultry Farmers",
        body: [
          "Capacity up to 100 eggs per cycle with manual humidity monitoring via water channels. Temperature range 37.5°C–37.8°C with manual adjustment. Power 120 Watt at 220V AC — suitable for household circuits in rural Maharashtra.",
          "Body: thermocol for lightweight transport. Warranty: 6 months on controller and adapter, 1 year unit support. Hatch rate target 80%+ with proper egg selection and lockdown discipline.",
          "JBW100 also works as a chicken egg incubator for broiler and layer breeds. Duck and quail eggs are supported with species-specific humidity guidance from our team.",
        ],
      },
    ],
    faqs: sharedFaqs(
      "JBW100",
      "80%+ hatch rate",
      "JBW100 is a manual egg incubator — you turn eggs 3–5 times daily. For automatic egg turning, upgrade to JBI80M fully automatic incubator or JBST100 for digital humidity tracking.",
      "120 Watt",
      "6 months warranty on controller and adapter · 1 year unit support on the incubator body.",
    ),
    relatedModels: ["JBST100", "JBI80M", "JB160A"],
    relatedBlogSlugs: [
      "how-to-hatch-eggs-in-incubator",
      "85-percent-hatch-rate-tips",
      "manual-vs-automatic-incubator",
      "choose-right-egg-incubator",
      "egg-hatching-machine-price-india",
    ],
    relatedLandingPaths: [
      ROUTES.landing100Egg,
      ROUTES.landingChicken,
      ROUTES.landingMaharashtra,
      ROUTES.landingNagpur,
      ROUTES.landingPrice,
    ],
  },
  JBST100: {
    model: "JBST100",
    intro: [
      "JBST100 is JB's most popular semi-automatic egg incubator — a digital egg incubator and poultry egg incubator with hygrometer feedback for repeat hatchers in Nagpur, Vidarbha, and across egg incubator Maharashtra. The 120 egg tray layout holds up to 100 eggs per cycle with optimal spacing for 85%+ hatch rates.",
      "Farmers searching automatic egg incubator at mid-range egg hatching machine price choose JBST100 over manual JBW100 for better humidity control during lockdown. Fiber composite body survives monthly use better than thermocol. Still manual turning — upgrade to JBI80M for a fully automatic incubator with auto egg rotation.",
      "Factory-built in Bhandara by an egg incubator manufacturer in India since 2022. From ₹4,999 with pan-India delivery and Marathi-English phone support.",
    ],
    sections: [
      {
        heading: "Semi-Automatic Egg Incubator with Digital Hygrometer",
        body: [
          "JBST100 combines mercury thermometer accuracy with a digital hygrometer — critical for poultry egg incubator success when Maharashtra summer dries the air. Monitor humidity without guessing during days 19–21 lockdown.",
          "Double fan cooling and fiber body suit repeat monthly hatch cycles. Popular with Nagpur poultry farms, small commercial hatcheries, and farmers who outgrew a 100 eggs incubator but do not yet need a commercial hatchery incubator.",
          "Keyword variations: 120 egg incubator, automatic egg incubator maharashtra, digital egg incubator, chicken egg incubator with humidity display.",
        ],
      },
      {
        heading: "Who Should Buy JBST100?",
        body: [
          "Buy JBST100 if you hatch every few weeks and lost chicks to dry lockdown on a manual unit. Buy JBW100 if you hatch seasonally on a tight budget. Buy JBI80M if daily turning is unsustainable.",
          "JBST100 sits in the sweet spot for egg incubator machine buyers comparing semi-automatic vs fully automatic incubator cost. Pair with our 21 day hatching process guide and poultry incubation training.",
          "Related sizes: upgrade path to JBI80M (80 auto), JB160A (160 auto), or JB240C combine incubator for commercial scale.",
        ],
      },
      {
        heading: "Delivery & Support from Bhandara Factory",
        body: [
          "Fastest delivery in Nagpur division and Vidarbha — typically 1–5 days. Maharashtra statewide and pan-India courier available. Factory pickup welcome at Lakhandur, Bhandara.",
          "Every JBST100 includes setup call support, warranty registration, and access to free hatching guide PDF. 1,000+ farmers trust JB as their poultry incubator supplier.",
        ],
      },
      {
        heading: "JBST100 Technical Overview",
        body: [
          "Capacity: up to 100 eggs (120 tray layout). Power: 120W at 220V. Temperature 37.5°C–37.8°C. Humidity 50–70% with digital display. Manual turning with humidity tracking.",
          "Hatch rate target 85%+ with proper process. Body: fiber composite. Ideal for small commercial farms and repeat hatch cycles across India.",
        ],
      },
    ],
    faqs: sharedFaqs(
      "JBST100",
      "85%+ hatch rate",
      "JBST100 is semi-automatic — digital humidity monitoring with manual egg turning 3–5 times daily. For full automatic egg turning choose JBI80M.",
      "120 Watt",
      "6 months warranty on controller and adapter · 1 year unit support.",
    ),
    relatedModels: ["JBW100", "JBI80M", "JB160A", "JB240C"],
    relatedBlogSlugs: [
      "automatic-egg-incubator-machine-guide",
      "manual-vs-automatic-incubator",
      "85-percent-hatch-rate-tips",
      "automatic-egg-incubator-maharashtra",
      "common-incubation-mistakes",
    ],
    relatedLandingPaths: [
      ROUTES.landing120Egg,
      ROUTES.landingAutomatic,
      ROUTES.landingVidarbha,
      ROUTES.landingNagpur,
    ],
  },
  JBI80M: {
    model: "JBI80M",
    intro: [
      "JBI80M is JB's premium fully automatic egg incubator — a metal-body digital egg incubator with automatic egg rotation, fuse backup, and 85%+ hatch rates. Up to 80 eggs per cycle for hatcheries and busy farmers across egg incubator Maharashtra and India who need a fully automatic incubator without commercial combine scale.",
      "Search fully automatic incubator, automatic egg incubator maharashtra, or poultry egg incubator with auto turning — JBI80M eliminates daily hand-turning labour. Built by an egg incubator manufacturer in India at Bhandara for 220V rural power including Vidarbha voltage fluctuation.",
      "From ₹10,499 factory-direct. Compare with JBST100 semi-automatic or step up to JB160A / JB528C commercial hatchery incubator when weekly batch volume grows.",
    ],
    sections: [
      {
        heading: "Fully Automatic Incubator Features",
        body: [
          "Automatic egg rotation on schedule — no manual turning. Digital hygrometer and thermometer. Metal body for durability. Dual fan cooling. Fuse and battery backup for power cuts common in rural Maharashtra.",
          "Ideal commercial egg incubator entry point before combine setter-hatcher systems. Chicken egg incubator, duck, and quail supported with JB guidance.",
        ],
      },
      {
        heading: "JBI80M vs Semi-Automatic & Manual Models",
        body: [
          "JBW100 manual 100 egg incubator: lowest price, most labour. JBST100: digital humidity, manual turn. JBI80M: full automation in a compact egg incubator machine footprint.",
          "For 160+ eggs see JB160A. For 528+ setting capacity see JB528C hatchery incubator. Use capacity calculator before buying.",
        ],
      },
      {
        heading: "Maharashtra & India Delivery",
        body: [
          "Nagpur region 1–3 day delivery common. Pan-India secure packaging. Marathi and English setup support from the Bhandara team that built your unit.",
        ],
      },
      {
        heading: "Specifications Summary",
        body: [
          "80 eggs · metal body · 120W · 37.5°C–37.8°C digital · 50–70% humidity digital · automatic turning · 85%+ hatch target · 6 month controller warranty · 1 year unit support.",
        ],
      },
    ],
    faqs: sharedFaqs(
      "JBI80M",
      "85%+ hatch rate",
      "Yes — JBI80M is a fully automatic egg incubator with automatic egg rotation. No manual turning required.",
      "120 Watt",
      "6 months warranty on controller and adapter · 1 year unit support · fuse and battery backup included.",
    ),
    relatedModels: ["JBST100", "JB160A", "JB528C"],
    relatedBlogSlugs: [
      "automatic-egg-incubator-machine-guide",
      "manual-vs-automatic-incubator",
      "commercial-poultry-incubator-supplier",
      "85-percent-hatch-rate-tips",
      "why-farmers-trust-jb-incubators",
    ],
    relatedLandingPaths: [
      ROUTES.landingFullyAutomatic,
      ROUTES.landingAutomatic,
      ROUTES.landingMaharashtra,
    ],
  },
  JB528C: {
    model: "JB528C",
    intro: [
      "JB528C is a commercial combine egg incubator — 528 eggs setting plus 104 hatching in a weekly batch hatchery incubator system. Auto 45° turning, BLDC fan, digital temperature and humidity, 400W power. Built for commercial poultry farms and hatcheries across Maharashtra and India.",
      "Search commercial egg incubator, hatchery incubator, or 528 egg incubator — JB528C is factory-made in Bhandara by an egg incubator manufacturer in India. Step up from JBI80M or JB160A when monthly chick output demands setter-hatcher automation.",
    ],
    sections: [
      {
        heading: "Commercial Combine Setter-Hatcher System",
        body: [
          "Weekly batch workflow: set up to 528 eggs, transfer to 104 hatching capacity on schedule. Automatic 45° egg turning reduces labour vs manual poultry egg incubator units.",
          "BLDC fan and digital controls maintain stable conditions for commercial hatchery incubator operations in Vidarbha heat.",
        ],
      },
      {
        heading: "Compare Commercial JB Models",
        body: [
          "JB240C: 240+80 for mid-scale. JB612C: 612+204 for larger hatcheries. JB816C: 816+272 high-capacity. JB160A: 160 egg fully automatic for farms not yet ready for combine systems.",
        ],
      },
      {
        heading: "Installation & Support",
        body: [
          "Phone consultation before purchase. Delivery across Maharashtra and India. Spare parts from Bhandara factory. Training modules for weekly batch management.",
        ],
      },
      {
        heading: "JB528C at a Glance",
        body: [
          "528 setting + 104 hatching · 400W · auto turning · digital temp/humidity · commercial egg incubator · Made in India · JB Bhandara.",
        ],
      },
    ],
    faqs: sharedFaqs(
      "JB528C",
      "80–85% hatch rate with proper weekly batch process",
      "Yes — automatic 45° egg turning across setter trays.",
      "400 Watt",
      "Commercial warranty and support — contact JB for full terms on combine incubators.",
    ),
    relatedModels: ["JB240C", "JB612C", "JB816C", "JBI80M"],
    relatedBlogSlugs: [
      "commercial-poultry-incubator-supplier",
      "egg-incubator-manufacturer-india",
      "choose-right-egg-incubator",
    ],
    relatedLandingPaths: [ROUTES.landingHatchingMachine, ROUTES.landingMaharashtra],
  },
  JB160A: {
    model: "JB160A",
    intro: [
      "JB160A is a 160 egg fully automatic incubator — ACP body, 200W, digital controls, 80–85% hatch rate. Ideal small farm automatic egg incubator between JBI80M and commercial combine models. Egg incubator manufacturer JB, Bhandara, Maharashtra.",
      "Search 160 egg incubator, digital egg incubator, or automatic poultry egg incubator — JB160A handles weekly batches for growing farms in Nagpur and Vidarbha without full hatchery incubator investment.",
    ],
    sections: [
      {
        heading: "160 Egg Automatic Incubator for Small Farms",
        body: [
          "Fully automatic turning and digital monitoring. ACP body durability. 200W power. Ideal for hobbyists scaling to small commercial chicken egg incubator production.",
        ],
      },
      {
        heading: "Upgrade Path from Starter Models",
        body: [
          "From JBW100 100 eggs incubator or JBST100 → JBI80M → JB160A → JB240C combine. Match capacity to monthly chick sales with our calculator.",
        ],
      },
      {
        heading: "Delivery Across India",
        body: [
          "Maharashtra priority dispatch from factory. Pan-India courier. Setup support included.",
        ],
      },
      {
        heading: "Key Specs",
        body: [
          "160 eggs · fully automatic · ACP body · 200W · digital egg incubator controls · JB manufacturer Bhandara.",
        ],
      },
    ],
    faqs: sharedFaqs(
      "JB160A",
      "80–85% hatch rate",
      "Yes — fully automatic egg turning on JB160A.",
      "200 Watt",
      "Contact JB for commercial automatic incubator warranty details.",
    ),
    relatedModels: ["JBI80M", "JB240C", "JBST100"],
    relatedBlogSlugs: ["choose-right-egg-incubator", "commercial-poultry-incubator-supplier"],
    relatedLandingPaths: [ROUTES.landingAutomatic, ROUTES.products],
  },
  JB240C: {
    model: "JB240C",
    intro: [
      "JB240C combine incubator — 240 eggs setting plus 80 hatching, 3 trays, auto turning, 300W, digital controls. Mid-scale commercial egg incubator and hatchery incubator for farms outgrowing JB160A or JBI80M.",
      "Factory-direct from egg incubator manufacturer in India — Bhandara, Maharashtra. Pan-India delivery.",
    ],
    sections: [
      {
        heading: "240+80 Combine Incubator Workflow",
        body: [
          "Setter-hatcher split for weekly batches. Automatic turning. Digital temperature and humidity. 300W power for stable commercial operation.",
        ],
      },
      {
        heading: "Related Incubator Sizes",
        body: [
          "Smaller: JBI80M, JB160A. Larger: JB528C, JB612C, JB816C. Compare on products page.",
        ],
      },
      {
        heading: "Maharashtra Hatchery Support",
        body: [
          "JB team advises tray schedules and spare parts. Nagpur and Vidarbha farms welcome for factory demo.",
        ],
      },
      {
        heading: "Summary",
        body: [
          "240+80 eggs · combine · automatic · 300W · commercial poultry egg incubator · JB Bhandara.",
        ],
      },
    ],
    faqs: sharedFaqs(
      "JB240C",
      "80–85% with weekly batch discipline",
      "Yes — automatic 45° turning on setter trays.",
      "300 Watt",
      "Commercial combine warranty — enquire with JB sales.",
    ),
    relatedModels: ["JB160A", "JB528C", "JB612C"],
    relatedBlogSlugs: ["commercial-poultry-incubator-supplier", "automatic-egg-incubator-machine-guide"],
    relatedLandingPaths: [ROUTES.landingHatchingMachine],
  },
  JB612C: {
    model: "JB612C",
    intro: [
      "JB612C commercial combine incubator — 612 eggs setting plus 204 hatching, 6 trays, auto 45° turning, BLDC fan, 500W. High-volume hatchery incubator for commercial poultry operations across egg incubator Maharashtra and India.",
    ],
    sections: [
      {
        heading: "Commercial Hatchery Scale",
        body: [
          "Monthly capacity up to 1,020 eggs in weekly batch rhythm. BLDC cooling for uniform heat. Digital controls. Built in Bhandara by JB — egg incubator manufacturer in India.",
        ],
      },
      {
        heading: "Compare JB612C vs JB816C",
        body: [
          "JB816C adds trolley tray system and 816+272 capacity for the largest hatcheries. JB528C suits smaller commercial entry.",
        ],
      },
      {
        heading: "Support & Delivery",
        body: [
          "Pre-sales consultation. Maharashtra fast lane delivery. National courier for other states.",
        ],
      },
      {
        heading: "At a Glance",
        body: [
          "612+204 · 500W · 6 trays · commercial egg incubator · hatchery incubator · JB.",
        ],
      },
    ],
    faqs: sharedFaqs(
      "JB612C",
      "80–85% commercial batch target",
      "Yes — automatic turning on all setter trays.",
      "500 Watt",
      "Commercial warranty package — contact +91 8767189437.",
    ),
    relatedModels: ["JB528C", "JB816C", "JB240C"],
    relatedBlogSlugs: ["commercial-poultry-incubator-supplier", "egg-incubator-manufacturer-india"],
    relatedLandingPaths: [ROUTES.landingMaharashtra],
  },
  JB816C: {
    model: "JB816C",
    intro: [
      "JB816C high-capacity combine incubator — 816 eggs setting plus 272 hatching, trolley tray system, 570W, auto turning and exhaust. Top-tier commercial hatchery incubator from egg incubator manufacturer JB, Bhandara, Maharashtra.",
    ],
    sections: [
      {
        heading: "Maximum JB Combine Capacity",
        body: [
          "For hatcheries needing 816+ setting eggs per batch. Trolley trays simplify loading. BLDC fan and digital systems for commercial egg incubator reliability.",
        ],
      },
      {
        heading: "When to Choose JB816C",
        body: [
          "When JB612C or JB528C cannot meet weekly chick orders. Full consultation before purchase. Installation guidance included.",
        ],
      },
      {
        heading: "Pan-India from Bhandara Factory",
        body: [
          "Made in India. Delivered nationwide. Spare parts and phone support from the manufacturing team.",
        ],
      },
      {
        heading: "Specifications",
        body: [
          "816+272 · 570W · trolley system · automatic turning · commercial hatchery incubator.",
        ],
      },
    ],
    faqs: sharedFaqs(
      "JB816C",
      "80–85% with professional batch management",
      "Yes — full automatic turning and exhaust system.",
      "570 Watt",
      "Commercial hatchery warranty — detailed terms from JB sales team.",
    ),
    relatedModels: ["JB612C", "JB528C"],
    relatedBlogSlugs: ["commercial-poultry-incubator-supplier", "best-egg-incubator-company-india"],
    relatedLandingPaths: [ROUTES.landingHatchingMachine, ROUTES.landingMaharashtra],
  },
};

export const getProductPageContent = (model: string): ProductPageContent | undefined =>
  productPages[model];

export const getRelatedProductLinks = (model: string) => {
  const content = productPages[model];
  if (!content) return [];
  return content.relatedModels
    .map((id) => {
      const slug = PRODUCT_SLUGS[id];
      return slug ? { id, slug, path: ROUTES.product(slug) } : null;
    })
    .filter(Boolean) as { id: string; slug: string; path: string }[];
};

export const BLOG_SLUG_TITLES: Record<string, string> = {
  "how-to-hatch-eggs-in-incubator": "How to Hatch Eggs in an Incubator",
  "21-day-hatching-process": "21 Day Hatching Process",
  "common-incubation-mistakes": "Common Incubation Mistakes",
  "85-percent-hatch-rate-tips": "5 Tips for 85%+ Hatch Rate",
  "manual-vs-automatic-incubator": "Manual vs Automatic Incubator",
  "choose-right-egg-incubator": "How to Choose the Right Egg Incubator",
  "automatic-egg-incubator-machine-guide": "Automatic Egg Incubator Buyer Guide",
  "automatic-egg-incubator-maharashtra": "Automatic Egg Incubator Maharashtra",
  "commercial-poultry-incubator-supplier": "Commercial Poultry Incubator Supplier",
  "egg-incubator-manufacturer-india": "Egg Incubator Manufacturer India",
  "egg-hatching-machine-price-india": "Egg Hatching Machine Price India",
  "why-farmers-trust-jb-incubators": "Why Farmers Trust JB Incubators",
  "best-egg-incubator-company-india": "Best Egg Incubator Company India",
};
