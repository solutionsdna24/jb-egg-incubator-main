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
          "JB Egg Incubator is an egg incubator manufacturer in Maharashtra based in the Vidarbha region at Lakhandur, Bhandara. Local production means faster delivery, spare parts access, and support that understands Maharashtra farm conditions — from Nagpur division heat to Konkan humidity and Pune's growing backyard poultry scene.",
          "We supply 100 egg incubator JBW100, 120 egg incubator JBST100, automatic egg incubator, and fully automatic egg incubator JBI80M to farmers statewide. Commercial hatcheries choose combine models JB528C through JB816C for weekly setter-hatcher batches.",
          "Unlike distant importers, JB calibrates every egg hatching machine for Indian 220V power and trains buyers in Marathi and English. Over 1,000 farmers since 2022 trust factory-direct pricing without dealer markup.",
        ],
      },
      {
        heading: "Maharashtra Poultry Industry & Incubator Demand",
        body: [
          "The Maharashtra poultry industry spans broiler farms, layer units, desi chicken breeders, and growing rural entrepreneurship under government poultry schemes. Farmers from Ahmednagar to Amravati need reliable egg incubators that survive voltage fluctuation and summer temperatures above 40°C in Vidarbha and Marathwada.",
          "Demand for automatic egg incubator machines rises as farms move from seasonal hatching to monthly cycles. JB built its product line around this shift — entry manual units for first-time breeders, semi-automatic JBST100 for repeat hatchers, and JBI80M for commercial operations.",
          "Maharashtra's egg production and rural employment goals depend on affordable hatch technology. JB keeps egg incubator price India competitive by manufacturing locally rather than importing finished goods.",
        ],
      },
      {
        heading: "Statewide Distribution from Bhandara Factory",
        body: [
          "JB's statewide distribution network ships from one Bhandara factory to every Maharashtra district. Nagpur division orders often arrive in 1–3 days. Pune, Mumbai, Nashik, Aurangabad, and Kolhapur receive courier delivery in 3–7 days depending on carrier and stock.",
          "Statewide distribution includes secure packaging, warranty card, setup instructions, and phone support. Many Maharashtra dealers resell imported units — JB sells direct so you speak to the team that assembled your incubator.",
          "Bulk orders for poultry farms, self-help groups, and training centres receive custom quotes. Contact +91 8767189437 with your taluka name for total landed price including courier.",
        ],
      },
      {
        heading: "Delivery Across Maharashtra — City & Rural Talukas",
        body: [
          "We deliver egg incubators to Nagpur, Bhandara, Wardha, Amravati, Pune, Mumbai, Nashik, Aurangabad, Solapur, and rural talukas across all six divisions. Many customers visit our factory for pickup and a live product demo — especially from Nagpur, just 60 km away.",
          "Rural Maharashtra buyers receive the same warranty as Mumbai customers. JB logistics coordinates with major couriers and provides tracking when available. Factory pickup saves shipping for Vidarbha and Nagpur region farmers.",
          "Farmers outside Maharashtra order identical models with the same warranty — see our egg hatching machine India page for pan-India shipping timelines and state-wise delivery notes.",
        ],
      },
      {
        heading: "Models for Every Maharashtra Farm Size",
        body: [
          "Beginners and school projects start with JBW100 100 egg incubator from ₹2,700 — manual thermocol body ideal for learning the 21 day hatching process. Growing farms choose JBST100 with digital hygrometer for better lockdown humidity control.",
          "Commercial Maharashtra hatcheries upgrade to JBI80M fully automatic egg incubator or combine systems JB528C–JB816C when weekly chick output exceeds manual capacity. Our incubation capacity calculator helps match model to monthly egg volume.",
          "Every model includes free setup guidance and links to poultry incubation training. JB spare parts — controllers, fans, hygrometers — ship from Bhandara for fast Maharashtra service.",
        ],
      },
      {
        heading: "Why Maharashtra Farmers Choose JB",
        body: [
          "Maharashtra farmers choose JB for three reasons: factory-direct egg hatching machine price, proven 80–90% hatch rates with training, and real phone support from Bhandara — not a distant call centre.",
          "Regional pages for egg incubator Nagpur and egg incubator Vidarbha detail local delivery and climate tips. JB's YouTube channel @jbeggincubator shows Maharashtra customer hatch videos you can verify before buying.",
          "Search egg incubator Maharashtra and compare — JB offers transparent pricing, Marathi support, and a physical factory you can visit. Order online, call +91 8767189437, or WhatsApp for today's stock.",
        ],
      },
    ],
    relatedPaths: p([
      "/egg-incubator-vidarbha",
      "/egg-incubator-nagpur",
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
      {
        question: "Who is the best egg incubator manufacturer in Vidarbha?",
        answer: "JB Egg Incubator is a leading egg incubator manufacturer in Vidarbha with factory in Bhandara since 2022 — 1,000+ farmers, models from ₹2,700, and local Marathi support.",
      },
      {
        question: "How big is the Maharashtra poultry industry?",
        answer: "Maharashtra has thousands of poultry farms across broiler, layer, and desi breeding — driving strong demand for automatic egg incubator and 100 egg incubator machines from local manufacturers like JB.",
      },
      {
        question: "Does JB offer statewide distribution in Maharashtra?",
        answer: "Yes. JB ships from Bhandara to all Maharashtra districts — Nagpur division in 1–3 days, other regions typically 3–7 days via courier.",
      },
      {
        question: "What egg incubator price in Maharashtra?",
        answer: "JBW100 from ₹2,700, JBST100 from ₹4,999, JBI80M from ₹10,499. Call +91 8767189437 for today's price with delivery to your district.",
      },
      {
        question: "Can I pick up egg incubator from the Maharashtra factory?",
        answer: "Yes. Visit Lakhandur, Bhandara for factory pickup, live demo, and same-day collection when stock is ready.",
      },
    ],
  },
  {
    path: "/egg-incubator-vidarbha",
    eyebrow: "Vidarbha · Factory Direct",
    h1: "Egg Incubator Vidarbha — Buy from Bhandara Manufacturer",
    subtitle:
      "JB is the trusted egg incubator manufacturer in Vidarbha — factory at Lakhandur, Bhandara. Automatic egg incubator & egg hatching machine with fast delivery to Nagpur, Wardha, Gondia & all Vidarbha.",
    title: "Egg Incubator Vidarbha | JB Manufacturer Bhandara",
    description:
      "Buy egg incubator in Vidarbha from JB — egg incubator manufacturer in Bhandara. Automatic egg incubator, 100 egg incubator & combine models. Vidarbha delivery & Marathi support. Call +91 8767189437.",
    keywords:
      "egg incubator vidarbha, vidarbha egg incubator, egg incubator manufacturer vidarbha, automatic egg incubator vidarbha, poultry incubator vidarbha, egg hatching machine vidarbha, egg incubator bhandara",
    highlights: [
      "Only major egg incubator factory in Vidarbha",
      "Lakhandur, Bhandara — heart of Vidarbha",
      "Fast delivery: Nagpur, Wardha, Gondia, Chandrapur",
      "JBW100 from ₹2,700 · commercial combine models",
      "Marathi & English support · since 2022",
    ],
    sections: [
      {
        heading: "Why Buy Egg Incubator in Vidarbha from JB?",
        body: [
          "Vidarbha farmers need egg incubators built for local power conditions, summer heat above 42°C in May, and affordable running costs at 120W. JB manufactures every unit at our Lakhandur, Bhandara factory — so Vidarbha buyers get factory-direct pricing, faster spare parts, and phone support in Marathi and English.",
          "Unlike imported or distant brands, JB egg incubator Vidarbha customers can visit the factory, see live demos, and get same-week delivery across Nagpur division and surrounding districts. We understand rural voltage fluctuation and design controllers accordingly.",
          "Search egg incubator Vidarbha or vidarbha egg incubator — JB is the only major egg incubator manufacturer in the region with 1,000+ happy farmers since 2022.",
        ],
      },
      {
        heading: "Vidarbha Climate & Egg Incubation Challenges",
        body: [
          "Vidarbha climate features hot dry summers, monsoon humidity spikes, and winter nights that affect room temperature where incubators sit. Stable 37.5°C–37.8°C inside the chamber matters more than ambient weather — but farmers must place units away from direct sun and drafty windows.",
          "Summer heat in Nagpur, Chandrapur, and Wardha districts can warm incubation rooms above ideal levels. JBST100 and JBI80M digital monitoring helps Vidarbha farmers catch humidity drops before lockdown fails.",
          "Power cuts remain common in rural Vidarbha talukas. JBI80M includes fuse and battery backup features; all models use efficient 120W heating suitable for household circuits in village homes.",
        ],
      },
      {
        heading: "Poultry Farming in Vidarbha — Growing Demand",
        body: [
          "Poultry farming in Vidarbha expands through broiler contracts, desi chicken breeders, layer farms, and government-backed rural employment schemes. Farmers in Bhandara, Gondia, Gadchiroli, and Yavatmal increasingly hatch their own chicks instead of buying day-olds from distant hatcheries.",
          "Local hatching cuts transport stress and cost. A 100 egg incubator or automatic egg incubator pays back within a few cycles when farmers sell chicks to neighbours and local markets.",
          "JB supports Vidarbha entrepreneurship with free poultry incubation training, hatching guide PDF, and YouTube demos from real regional customers showing successful hatch outcomes.",
        ],
      },
      {
        heading: "Regional Demand for Automatic Egg Incubators",
        body: [
          "Regional demand for automatic egg incubator machines in Vidarbha rises as farms shift from one seasonal hatch to monthly production. JBST100 semi-automatic units lead sales in Nagpur division; JBI80M grows among commercial hatcheries in Bhandara and Wardha.",
          "Combine incubators JB528C–JB816C serve Vidarbha hatcheries scaling to weekly batches. JB factory proximity means faster parts and service than brands shipped from Mumbai or Delhi.",
          "Dealers in Nagpur city often markup imported units — JB factory-direct sales keep egg hatching machine price honest for Vidarbha buyers.",
        ],
      },
      {
        heading: "Egg Incubator Models for Vidarbha Farms",
        body: [
          "Starter farms choose JBW100 100 egg incubator (from ₹2,700) or JBST100 with digital hygrometer. Growing hatcheries upgrade to JBI80M fully automatic egg incubator or commercial combine models JB528C through JB816C.",
          "All JB egg incubators run on standard 220V Indian power — ideal for rural Vidarbha villages. We deliver to Nagpur, Bhandara, Wardha, Gondia, Chandrapur, Amravati, Yavatmal, and every Vidarbha taluka.",
          "Match model to monthly egg count using our incubation capacity calculator or call +91 8767189437 for a recommendation based on your farm size and budget.",
        ],
      },
      {
        heading: "Vidarbha Delivery & Support",
        body: [
          "Most Vidarbha orders ship within 2–5 days. Nagpur and Bhandara customers often collect from factory within one hour drive. We provide free setup guidance, poultry incubation training, and a free hatching guide PDF with every order.",
          "JB spare parts — controllers, fans, hygrometers — ship from Bhandara for fast Vidarbha service. Warranty: 6 months on controller and adapter, 1 year unit support on all models.",
          "Call +91 8767189437 for today's stock, egg hatching machine price, and fastest delivery to your Vidarbha district.",
        ],
      },
    ],
    relatedPaths: p([
      "/egg-incubator-nagpur",
      "/egg-incubator-maharashtra",
      "/100-egg-incubator",
      "/automatic-egg-incubator",
      "/egg-hatching-machine-india",
    ]),
    faqs: [
      {
        question: "Where can I buy egg incubator in Vidarbha?",
        answer: "Buy directly from JB Egg Incubator — manufacturer at Lakhandur, Bhandara, Vidarbha. Call +91 8767189437 or order online with delivery across Vidarbha.",
      },
      {
        question: "What is the egg incubator price in Vidarbha?",
        answer: "JBW100 starts from ₹2,700, JBST100 from ₹4,999, JBI80M from ₹10,499. Commercial combine incubators — contact for price. No middleman markup for Vidarbha buyers.",
      },
      {
        question: "Does JB deliver egg incubator to rural Vidarbha?",
        answer: "Yes. We courier to all Vidarbha districts and villages with secure packaging and phone setup support.",
      },
      {
        question: "How does Vidarbha climate affect egg incubation?",
        answer: "Hot summers and monsoon humidity require stable room placement and digital humidity tracking — JBST100 and JBI80M help Vidarbha farmers maintain 50–70% through the 21 day cycle.",
      },
      {
        question: "Is poultry farming growing in Vidarbha?",
        answer: "Yes — broiler, layer, and desi breeding farms across Bhandara, Nagpur division, and surrounding districts drive strong demand for local egg incubators from JB.",
      },
      {
        question: "Why is regional demand high for automatic incubators in Vidarbha?",
        answer: "Monthly hatch cycles save labour and improve consistency — JBST100 and JBI80M lead Vidarbha sales for repeat commercial hatching.",
      },
      {
        question: "Can I visit the JB factory in Vidarbha?",
        answer: "Yes — welcome at Lakhandur, Bhandara for demo, pickup, and Marathi-English consultation. Call ahead to confirm stock.",
      },
    ],
  },
  {
    path: "/egg-incubator-nagpur",
    eyebrow: "Near Nagpur · 60 km from Factory",
    h1: "Egg Incubator Nagpur — Factory-Direct from Bhandara",
    subtitle:
      "Nagpur's nearest egg incubator manufacturer — JB factory in Bhandara, Vidarbha. Automatic egg incubator, 100 egg incubator & commercial models with fast Nagpur delivery or factory pickup.",
    title: "Egg Incubator Nagpur | JB Manufacturer Near Nagpur",
    description:
      "Buy egg incubator in Nagpur from JB — nearest manufacturer in Bhandara, Vidarbha. Automatic egg incubator & egg hatching machine from ₹2,700. Fast Nagpur delivery. Call +91 8767189437.",
    keywords:
      "egg incubator nagpur, nagpur egg incubator, automatic egg incubator nagpur, egg incubator manufacturer nagpur, poultry incubator nagpur, egg hatching machine nagpur, egg incubator near nagpur",
    highlights: [
      "Factory ~60 km from Nagpur — quick delivery",
      "Pickup available at Bhandara factory",
      "100 egg to 816+272 commercial models",
      "4.8★ Google rating · 1,000+ farmers",
      "Marathi support for Nagpur poultry farmers",
    ],
    sections: [
      {
        heading: "Egg Incubator Nagpur — Why Choose JB?",
        body: [
          "Nagpur poultry farmers searching egg incubator Nagpur or nagpur egg incubator want a reliable local supplier — not a distant call centre. JB Egg Incubator manufactures at Lakhandur, Bhandara, just one hour from Nagpur, making us the closest egg incubator manufacturer for Nagpur division.",
          "You get factory-direct egg hatching machine prices, honest warranty, and after-sales support from the same team that built your incubator. Marathi and English phone support helps first-time buyers through setup and the 21 day hatching process.",
          "JB holds a 4.8★ Google rating with 1,000+ farmers nationwide — many from Nagpur rural, Kamptee, Katol, and Nagpur city suburbs.",
        ],
      },
      {
        heading: "Nagpur Poultry Farms & Hatchery Demand",
        body: [
          "Nagpur poultry farms range from backyard desi chicken breeders to small commercial broiler and layer units supplying Vidarbha markets. Local hatchery demand grows as farmers avoid long transport of day-old chicks from distant suppliers.",
          "Nagpur region farms often run dual income — crops plus poultry — and need compact 100 egg incubator or automatic egg incubator units that fit household power budgets at 120W.",
          "JBST100 is the most ordered egg incubator in Nagpur region for repeat monthly hatches. Commercial Nagpur hatcheries scale to JBI80M or combine incubators JB528C–JB816C when chick output grows.",
        ],
      },
      {
        heading: "Delivery Time to Nagpur — City & Rural District",
        body: [
          "Delivery time to Nagpur is typically 1–3 business days via courier from our Bhandara factory. Nagpur city, Mihan, Hingna, and industrial belt addresses often receive next-day dispatch when stock is ready.",
          "Rural Nagpur district — Kamptee, Kuhi, Umred, Ramtek — receives the same 1–3 day window with tracking when available. Factory pickup in Bhandara is same-day when you call ahead — ideal for farmers who want a live demo before buying.",
          "Call +91 8767189437 with your Nagpur area pin code for exact delivery time and total price including courier.",
        ],
      },
      {
        heading: "JB Customers in the Nagpur Region",
        body: [
          "JB customers in the Nagpur region include backyard breeders, school agriculture projects, women's self-help groups, and small hatcheries across Nagpur city and district. Many share hatch videos on our YouTube channel @jbeggincubator.",
          "Sales Manager Ramesh Patil leads Nagpur region support from our Bhandara team — connecting farmers with the right model and post-purchase guidance. Repeat orders are common once first hatch succeeds at 80%+ rates.",
          "Word of mouth drives Nagpur sales — neighbours see healthy chicks and ask where the incubator came from. JB's factory proximity builds trust that online-only brands cannot match.",
        ],
      },
      {
        heading: "Models Popular with Nagpur Farmers",
        body: [
          "JBST100 is the most ordered egg incubator in Nagpur region — semi-automatic with digital hygrometer for repeat hatch cycles. Beginners start with JBW100 100 egg incubator from ₹2,700. Commercial Nagpur hatcheries choose JBI80M or combine incubators JB528C–JB816C.",
          "Every model ships with setup guidance. All JB units handle Nagpur summer heat when placed in a stable room away from direct sunlight — controllers maintain chamber temperature independent of ambient spikes.",
          "Compare egg incubator price India on our site or visit the Bhandara factory ~60 km from Nagpur for hands-on selection.",
        ],
      },
      {
        heading: "Nagpur Delivery & Factory Visit",
        body: [
          "We deliver egg incubators across Nagpur city, rural Nagpur district, and entire Nagpur division including Wardha and Bhandara neighbours. Many customers drive to our Bhandara factory for pickup and a live product demo — roughly one hour from central Nagpur.",
          "Factory visit lets you compare JBW100, JBST100, and JBI80M side by side before buying. WhatsApp +91 8767189437 for directions, stock check, and Marathi consultation.",
          "Order online at jbincubators.in/order-egg-incubator for a price quote with Nagpur delivery estimate.",
        ],
      },
    ],
    relatedPaths: p([
      "/egg-incubator-vidarbha",
      "/egg-incubator-maharashtra",
      "/120-egg-incubator",
      "/fully-automatic-egg-incubator",
      "/contact",
    ]),
    faqs: [
      {
        question: "Where to buy egg incubator in Nagpur?",
        answer: "Order from JB Egg Incubator — nearest manufacturer in Bhandara, Vidarbha (~60 km from Nagpur). Online order, phone order, or factory pickup.",
      },
      {
        question: "How fast is egg incubator delivery to Nagpur?",
        answer: "Most Nagpur orders arrive in 1–3 days via courier. Factory pickup in Bhandara is same-day when stock is ready.",
      },
      {
        question: "Which egg incubator is best for Nagpur climate?",
        answer: "JBST100 and JBI80M handle Nagpur summer heat with quality controllers. All JB models are tested for Maharashtra 220V power.",
      },
      {
        question: "Does JB supply Nagpur poultry farms?",
        answer: "Yes — JB supplies backyard breeders, commercial hatcheries, and SHG projects across Nagpur city and district with models from ₹2,700.",
      },
      {
        question: "What delivery time to rural Nagpur talukas?",
        answer: "Typically 1–3 business days to Kamptee, Katol, Umred, Ramtek, and other talukas — call with your pin code for exact estimate.",
      },
      {
        question: "Are there JB customers in Nagpur region I can reference?",
        answer: "Yes — watch Nagpur and Vidarbha customer hatch videos on YouTube @jbeggincubator and ask our team for recent local references.",
      },
      {
        question: "Can I pick up egg incubator near Nagpur?",
        answer: "Yes — drive ~60 km to JB factory at Lakhandur, Bhandara for same-day pickup and live demo. Call +91 8767189437 first.",
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
