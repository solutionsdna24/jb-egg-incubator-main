import jbw100 from "@/assets/jbw100.webp";
import jbi80m from "@/assets/jbi80m.webp";
import chicksHatched from "@/assets/chicks-hatched.webp";
import eggsTray from "@/assets/eggs-tray.webp";
import interiorIncubator from "@/assets/interior-incubator.webp";

import jbst100 from "@/assets/jbst100.webp";
import redIncubator from "@/assets/red-incubator-original.webp";
import woodIncubator from "@/assets/wood-incubator-original.webp";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  content: string[];
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-hatch-eggs-in-incubator",
    title: "How to Hatch Eggs in an Incubator — JB Step-by-Step Guide",
    excerpt:
      "Learn how to hatch eggs in an incubator with JB's poultry training guide — temperature, humidity, turning & lockdown for 85%+ results.",
    date: "2026-06-14",
    readTime: "6 min read",
    category: "Training",
    image: eggsTray,
    tags: ["how to hatch eggs in incubator", "egg incubation temperature chart", "humidity for egg hatching"],
    content: [
      "Learning how to hatch eggs in an incubator starts with choosing the right egg incubator — JB offers 100 egg incubator (JBW100), semi-automatic (JBST100), and fully automatic egg incubator (JBI80M) models from our Bhandara factory.",
      "Day 1: Set clean eggs at 37.5°C–37.8°C with 50–55% humidity. Mark eggs and turn 3–5 times daily unless you use JBI80M automatic egg rotation.",
      "Days 1–18: Maintain steady temperature. Check humidity channels. Avoid opening the lid except for turning and water refills.",
      "Days 19–21 (lockdown): Stop turning. Raise humidity to 65–70%. Chicks pip and hatch. Wait until chicks dry before moving to brooder.",
      "JB provides free poultry incubation training, hatching guide download, and WhatsApp consultation. Call +91 8767189437 for model advice.",
    ],
  },
  {
    slug: "21-day-hatching-process",
    title: "21 Day Hatching Process Explained — Chicken Egg Timeline",
    excerpt:
      "Complete 21 day hatching process for chicken eggs in a JB egg incubator — what happens each week and what farmers should do.",
    date: "2026-06-14",
    readTime: "5 min read",
    category: "Training",
    image: chicksHatched,
    tags: ["21 day hatching process", "egg incubation temperature chart", "how to hatch eggs in incubator"],
    content: [
      "The 21 day hatching process for chicken eggs follows a predictable timeline when temperature and humidity stay stable in your egg hatching machine.",
      "Week 1 (Days 1–7): Embryo begins forming. Keep 37.5°C–37.8°C and 50–55% humidity. Turn eggs regularly on manual models.",
      "Week 2 (Days 8–14): Organs develop rapidly. Monitor humidity with JBST100 hygrometer or JBI80M digital display. Minimise lid opening.",
      "Week 3 (Days 15–18): Pre-lockdown phase. Confirm stable readings before stopping turns on day 19.",
      "Lockdown (Days 19–21): Increase humidity for egg hatching to 65–70%. Chicks hatch. JB support team helps first-time farmers through this critical phase.",
    ],
  },
  {
    slug: "common-incubation-mistakes",
    title: "Common Incubation Mistakes — And How JB Farmers Avoid Them",
    excerpt:
      "Avoid common incubation mistakes: wrong humidity, poor turning, old eggs & temperature swings. Tips from JB egg incubator manufacturer.",
    date: "2026-06-13",
    readTime: "4 min read",
    category: "Training",
    image: interiorIncubator,
    tags: ["common incubation mistakes", "humidity for egg hatching", "how to hatch eggs in incubator"],
    content: [
      "Common incubation mistakes cost farmers hatch rate and profit. JB training helps buyers avoid these errors from the first cycle.",
      "Mistake 1: Opening the incubator too often — each opening drops heat and humidity. Plan checks in advance.",
      "Mistake 2: Low lockdown humidity — chicks stick to shell. Target 65–70% on days 19–21.",
      "Mistake 3: Setting old eggs — use eggs within 7 days of laying, stored point-down at 12–15°C.",
      "Mistake 4: Skipping turns on manual models — turn 3–5 times daily or upgrade to fully automatic egg incubator JBI80M.",
      "Download our free hatching guide or book a WhatsApp consultation for personalised poultry incubation training.",
    ],
  },
  {
    slug: "egg-incubator-vidarbha-nagpur-bhandara",
    title: "Egg Incubator Vidarbha — Nagpur & Bhandara Delivery from JB Factory",
    excerpt:
      "Buy egg incubator in Vidarbha direct from JB's Bhandara factory. Fast delivery to Nagpur, Bhandara & nearby districts — egg incubator manufacturer Maharashtra you can visit.",
    date: "2026-06-14",
    readTime: "4 min read",
    category: "Local",
    image: redIncubator,
    tags: ["egg incubator vidarbha", "egg incubator nagpur", "egg incubator bhandara", "egg incubator maharashtra"],
    content: [
      "Farmers across Vidarbha search for a reliable egg incubator near Nagpur and Bhandara — machines that handle local power fluctuations, summer heat, and daily farm use. JB Egg Incubator manufactures at Lakhandur, Bhandara, placing us among the closest egg incubator manufacturers in Vidarbha.",
      "We deliver egg incubators to Nagpur city, Bhandara district, Wardha, Chandrapur, Gondia, and rural talukas across Vidarbha. Many customers collect units from our factory or receive courier delivery with phone setup support in Marathi and English.",
      "As an egg incubator manufacturer in Maharashtra, JB offers JBW100 manual units from ₹2,700, JBST100 semi-automatic models, and JBI80M automatic egg incubator machines for repeat hatch cycles. All run on standard 220V at just 120W.",
      "Vidarbha poultry farmers choose JB because we are a local poultry incubator supplier — spare parts, warranty help, and same-day stock checks without waiting for imports from other states.",
      "Call +91 8767189437 for egg incubator Nagpur & Bhandara delivery estimates, egg hatching machine price, and model recommendations for your farm size.",
    ],
  },
  {
    slug: "automatic-egg-incubator-maharashtra",
    title: "Automatic Egg Incubator Maharashtra — JB Models & Buyer Guide",
    excerpt:
      "Compare automatic egg incubator Maharashtra options from JB — JBI80M auto turning, digital controls & delivery from Bhandara factory to Nagpur and statewide.",
    date: "2026-06-13",
    readTime: "5 min read",
    category: "Buying Guide",
    image: jbi80m,
    tags: ["automatic egg incubator maharashtra", "automatic egg incubator nagpur", "automatic egg incubator bhandara"],
    content: [
      "An automatic egg incubator in Maharashtra saves daily labour — especially for farmers in Nagpur, Bhandara, and Vidarbha who hatch every few weeks or run small commercial hatcheries.",
      "JB's JBI80M is our flagship automatic egg incubator for Maharashtra farms: metal body, digital display, automatic egg rotation, and stable 37.5°C–37.8°C heat control for 50–100 eggs per cycle. It suits buyers who want hands-free operation during busy farm days.",
      "For mid-range budgets, JBST100 adds digital hygrometer and fiber body — popular across Maharashtra when you want monitoring without full automation. JBW100 remains manual and the most affordable egg hatching machine for seasonal hatching.",
      "Maharashtra's summer heat and variable rural power make controller quality critical. JB automatic egg incubator machines include fuse protection and backup features on JBI80M — tested for Indian 220V supply from our Bhandara factory.",
      "Ready to order an automatic egg incubator in Maharashtra? Submit an enquiry or call +91 8767189437 — we confirm stock, egg hatching machine price, and delivery to your district the same day.",
    ],
  },
  {
    slug: "egg-hatching-machine-maharashtra-india",
    title: "Egg Hatching Machine Maharashtra & India — JB Price Guide (2026)",
    excerpt:
      "Clear egg hatching machine price for Maharashtra & India. Compare JBW100, JBST100 & JBI80M from poultry incubator supplier JB — factory in Bhandara, Vidarbha.",
    date: "2026-06-12",
    readTime: "4 min read",
    category: "Pricing",
    image: jbw100,
    tags: ["egg hatching machine maharashtra", "egg hatching machine india", "poultry incubator supplier maharashtra"],
    content: [
      "Egg hatching machine price in Maharashtra and India varies by capacity, body material, and automation level. JB keeps pricing transparent so Vidarbha and nationwide farmers know costs before ordering.",
      "JBW100 starts from ₹2,700 — the lowest egg hatching machine price in our range. Manual control, thermocol body, up to 100 eggs. Ideal for first-time poultry farmers in Maharashtra testing hatch income.",
      "JBST100 sits in the mid range with digital humidity monitoring — our most ordered egg hatching machine across Maharashtra for farms that hatch regularly. JBI80M is the premium automatic option for commercial repeat cycles.",
      "As a poultry incubator supplier in Maharashtra and India, JB ships from ready stock at Lakhandur, Bhandara. Delivery covers Nagpur, statewide Maharashtra, and all Indian states with secure packaging and setup guidance.",
      "Prices update with material costs. WhatsApp or call +91 8767189437 for today's egg hatching machine price in Maharashtra, bulk quotes, and ready stock confirmation.",
    ],
  },
  {
    slug: "egg-incubator-manufacturer-india",
    title: "JB: Leading Egg Incubator Manufacturer in India",
    excerpt:
      "How JB became a trusted egg incubator manufacturer in India — factory in Maharashtra, models for every farm, and pan-India poultry incubator supply.",
    date: "2026-06-14",
    readTime: "5 min read",
    category: "About JB",
    image: interiorIncubator,
    tags: ["Egg incubator manufacturer in India", "Best egg incubator company in India"],
    content: [
      "When farmers search for an egg incubator manufacturer in India, they need more than a catalog — they need reliable machines, honest pricing, and support after delivery. JB Egg Incubator was built for exactly that.",
      "Our factory in Lakhandur, Bhandara, Maharashtra produces manual, semi-automatic, and automatic egg incubator machines tested for Indian 220V power and local climate conditions. Every unit ships with setup guidance so your first hatch cycle starts smoothly.",
      "As a poultry incubator supplier, we serve backyard farmers, village hatcheries, and commercial egg incubator buyers across India. Models start from ₹2,700, making professional hatching accessible without importing expensive equipment.",
      "What sets JB apart from generic listings is real after-sales support: phone help in Marathi and English, spare controllers, and warranty coverage on adapters and units. Farmers report 80–85%+ hatch rates when they follow our temperature and humidity guide.",
      "If you are comparing egg incubator manufacturers in India, visit our Products page for egg hatching machine price details, watch farmer videos on YouTube, or call +91 8767189437 for a personal recommendation.",
    ],
  },
  {
    slug: "automatic-egg-incubator-machine-guide",
    title: "Automatic Egg Incubator Machine — Complete JB Buyer Guide",
    excerpt:
      "Everything about automatic egg incubator machines: auto turning, digital controls, and why JBI80M is JB's top automatic model for serious farmers.",
    date: "2026-06-12",
    readTime: "5 min read",
    category: "Buying Guide",
    image: jbi80m,
    tags: ["Automatic egg incubator machine", "Commercial egg incubator"],
    content: [
      "An automatic egg incubator machine saves daily labour by handling egg turning, temperature monitoring, and sometimes humidity alerts — critical for farmers who hatch every few weeks or run a commercial egg incubator operation.",
      "JB's JBI80M is our flagship automatic egg incubator machine: metal body, digital display, automatic egg rotation, and stable heat control for 50–100 eggs per cycle. It suits hatcheries that need consistent results without manual turning 3–5 times daily.",
      "Semi-automatic JBST100 adds digital hygrometer and thermometer in a fiber body — a strong middle option when you want monitoring without full automation. JBW100 remains manual and budget-friendly for seasonal hatching.",
      "All JB automatic egg incubator machines run on just 120W, keeping electricity costs low over 18–21 day cycles. Power backup features on JBI80M help during brief outages common in rural Maharashtra and other states.",
      "Ready to upgrade? Check egg hatching machine price on our order form or call us — we confirm stock and delivery timelines the same day.",
    ],
  },
  {
    slug: "egg-hatching-machine-price-india",
    title: "Egg Hatching Machine Price in India — JB Models Compared (2026)",
    excerpt:
      "Clear egg hatching machine price guide for JBW100, JBST100 & JBI80M. Compare features before you buy from India's trusted poultry incubator supplier.",
    date: "2026-06-11",
    readTime: "4 min read",
    category: "Pricing",
    image: jbw100,
    tags: ["Egg hatching machine price", "Poultry incubator supplier"],
    content: [
      "Egg hatching machine price in India varies widely — from budget manual units to premium automatic egg incubator machines. JB keeps pricing transparent so farmers know exactly what they pay before ordering.",
      "JBW100 starts from ₹2,700 — the lowest egg hatching machine price in our range. Manual control, thermocol body, up to 100 eggs. Best for beginners testing poultry income with minimal investment.",
      "JBST100 sits in the mid range with digital humidity monitoring and a stronger fiber body. Most popular for small commercial egg incubator setups that hatch regularly but don't need full automation yet.",
      "JBI80M is our premium automatic egg incubator machine with the highest egg hatching machine price in the JB line — justified by metal construction, auto rotation, and digital controls for repeat commercial use.",
      "Prices can change with raw material costs. Submit an order enquiry or WhatsApp +91 8767189437 for today's egg hatching machine price, shipping to your district, and ready stock confirmation.",
    ],
  },
  {
    slug: "commercial-poultry-incubator-supplier",
    title: "Commercial Egg Incubator & Poultry Incubator Supplier in India",
    excerpt:
      "How JB supplies commercial egg incubators to hatcheries and farms — capacity, durability, and support from a poultry incubator supplier you can call.",
    date: "2026-06-09",
    readTime: "4 min read",
    category: "Commercial",
    image: jbst100,
    tags: ["Commercial egg incubator", "Poultry incubator supplier"],
    content: [
      "A commercial egg incubator must run cycle after cycle without failure. JB acts as a poultry incubator supplier for farms scaling from backyard flocks to village hatcheries and repeat commercial production.",
      "Commercial buyers typically choose JBST100 or JBI80M. JBST100 offers humidity tracking for better lockdown results; JBI80M is the fully automatic egg incubator machine for hands-free operation when labour is limited.",
      "We pack units securely for transport across India — Maharashtra, Karnataka, Gujarat, Uttar Pradesh, and more. Most orders ship from ready stock at our Bhandara facility with tracking and phone updates.",
      "Commercial egg incubator customers get priority setup support: calibration help, first-hatch checklist, and spare part guidance. Our team understands hatchery timelines and responds quickly during active cycles.",
      "Contact JB today to discuss commercial egg incubator quantity, egg hatching machine price for bulk orders, and delivery to your farm location.",
    ],
  },
  {
    slug: "egg-incubator-maharashtra",
    title: "Egg Incubator Maharashtra — Manufacturer in Bhandara, Vidarbha",
    excerpt:
      "Buy egg incubator in Maharashtra from JB's Bhandara factory. Egg incubator manufacturer serving Nagpur, Vidarbha & statewide — automatic machines & egg hatching machines from ₹2,700.",
    date: "2026-06-08",
    readTime: "4 min read",
    category: "Local",
    image: redIncubator,
    tags: ["egg incubator maharashtra", "egg incubator manufacturer in maharashtra", "poultry incubator supplier maharashtra"],
    content: [
      "Searching for an egg incubator in Maharashtra? JB manufactures at Lakhandur, Bhandara in Vidarbha — among the state's most trusted egg incubator manufacturers for local farmers and nationwide buyers.",
      "We deliver egg incubators across Maharashtra: Nagpur, Bhandara, Wardha, Amravati, Pune, Mumbai, Nashik, and rural districts. Many farmers get guidance in Marathi from our sales team during setup and first hatch.",
      "Maharashtra's variable power and summer heat make stable temperature control essential. JB automatic egg incubator machines maintain 37.5°C–37.8°C with low 120W consumption — practical for village and semi-urban farms in Vidarbha and beyond.",
      "As an egg incubator manufacturer in Maharashtra and India, JB acts as a poultry incubator supplier with clear egg hatching machine price tiers from ₹2,700. Farmers outside the state order the same models with identical warranty and support.",
      "Call +91 8767189437 for egg incubator Maharashtra — stock check, egg hatching machine price, and delivery estimate to your taluka.",
    ],
  },
  {
    slug: "best-egg-incubator-company-india",
    title: "Why JB Is Among the Best Egg Incubator Companies in India",
    excerpt:
      "Affordable egg hatching machine price, proven hatch rates & real support — what makes JB one of the best egg incubator companies in India for poultry farmers.",
    date: "2026-06-07",
    readTime: "4 min read",
    category: "About JB",
    image: woodIncubator,
    tags: ["Best egg incubator company in India", "Egg incubator manufacturer in India"],
    content: [
      "Choosing the best egg incubator company in India means balancing price, hatch results, and after-sales care — not just the lowest listing online. JB has earned trust from 1,000+ farmers through consistent performance.",
      "We rank among leading egg incubator manufacturers in India because we control quality at our Maharashtra factory, offer clear egg hatching machine price tiers (from ₹2,700), and stay reachable on phone and WhatsApp after delivery.",
      "Customer videos on YouTube show real 85–90% hatch results. Our automatic egg incubator machine line (JBI80M) and commercial egg incubator options compete with imports at a fraction of the cost.",
      "Every order includes setup guidance, warranty on controllers, and help with spare parts. That ongoing support is why repeat buyers and hatcheries recommend JB as a poultry incubator supplier to neighbouring farms.",
      "Compare models on our Products page, read farmer stories on the home page, and order when you're ready — limited stock, selling fast across India.",
    ],
  },
  {
    slug: "choose-right-egg-incubator",
    title: "How to Choose the Right Egg Incubator for Your Farm",
    excerpt:
      "Capacity, budget, and automation — a simple guide to picking JBW100, JBST100, or JBI80M for your poultry setup.",
    date: "2026-06-10",
    readTime: "4 min read",
    category: "Buying Guide",
    image: jbw100,
    content: [
      "Starting or scaling a poultry farm starts with the right incubator. Too small and you miss demand; too complex and beginners struggle with setup.",
      "For backyard farms and first-time users, JBW100 is the smart entry point. It holds up to 100 eggs, runs on just 120W, and starts at ₹2,700 — ideal when you want reliable hatching without a big investment.",
      "JBST100 adds a digital hygrometer and fiber body for farmers who want better humidity monitoring and a sturdier build. It is our most popular model for a reason — great balance of price and features.",
      "JBI80M is the premium pick: metal body, automatic egg turning, and full digital control. Choose it when you hatch regularly and want hands-free operation with consistent results.",
      "Still unsure? Call +91 8767189437 or submit an order enquiry — we help you pick the right model and confirm stock availability the same day.",
    ],
  },
  {
    slug: "85-percent-hatch-rate-tips",
    title: "5 Tips for 85%+ Hatch Rate with JB Incubators",
    excerpt:
      "Temperature, humidity, and turning — practical steps Indian farmers use to get the best results from every hatch cycle.",
    date: "2026-06-05",
    readTime: "5 min read",
    category: "Hatching Tips",
    image: chicksHatched,
    content: [
      "A great incubator is only half the story. These five habits help JB farmers consistently reach 80–85%+ hatch rates.",
      "1. Lock in temperature: Keep the chamber between 37.5°C and 37.8°C. Avoid opening the lid unnecessarily during the first 18 days.",
      "2. Manage humidity: Target 50–55% for days 1–18, then raise to 65–70% for lockdown (days 19–21). JBST100 and JBI80M make this easier with built-in monitoring.",
      "3. Turn eggs regularly: Manual models need turning 3–5 times daily. JBI80M handles this automatically — a major advantage for busy farmers.",
      "4. Use clean, fresh eggs: Store eggs point-down at 12–15°C for no more than 7 days before setting. Cracked or dirty eggs reduce hatch success.",
      "5. Call for setup support: Our team guides first-time users through calibration and first hatch. Order today and get expert help from day one.",
    ],
  },
  {
    slug: "manual-vs-automatic-incubator",
    title: "Manual vs Automatic Incubator — Which JB Model Suits You?",
    excerpt:
      "Compare daily effort, cost, and hatch consistency between JBW100, JBST100, and JBI80M before you buy.",
    date: "2026-05-28",
    readTime: "4 min read",
    category: "Product Comparison",
    image: eggsTray,
    content: [
      "Manual incubators like JBW100 cost less upfront and work well when you can turn eggs several times a day. They are perfect for hobby farms and seasonal hatching.",
      "Semi-automatic JBST100 adds humidity tracking and a stronger fiber body — a sweet spot for small commercial farms that hatch every few weeks.",
      "Fully automatic JBI80M reduces daily labour with auto rotation and digital controls. Hatcheries and serious farmers save time and improve consistency cycle after cycle.",
      "Power use stays low across all models at 120W, so running costs stay affordable even during 21-day cycles.",
      "Ready stock is available now with pan-India delivery. Submit an order enquiry or WhatsApp us to secure your unit before stock runs out.",
    ],
  },
  {
    slug: "why-farmers-trust-jb-incubators",
    title: "Why Farmers Across India Trust JB Egg Incubators",
    excerpt:
      "Affordable pricing, proven hatch results, and real after-sales support — what sets JB apart for poultry farmers.",
    date: "2026-05-20",
    readTime: "3 min read",
    category: "About JB",
    image: interiorIncubator,
    content: [
      "JB Egg Incubator is built in Maharashtra for Indian farming conditions — stable 220V operation, durable materials, and models for every budget.",
      "Over 1,000 farmers rely on JB for backyard flocks, village hatcheries, and growing poultry businesses. Our average hatch rate exceeds 85% when best practices are followed.",
      "Every order includes setup guidance, 1-year unit support, and 6-month warranty on controllers and adapters. Spare parts and replacement help are a phone call away.",
      "We ship across India with secure packaging. Most orders are dispatched quickly from ready stock — no long waiting periods.",
      "Join thousands of successful hatchers. Order from ₹2,700 today — limited stock, selling fast.",
    ],
  },
];

export type BlogSortId = "newest" | "oldest" | "title";

export const BLOG_SORT_OPTIONS: { id: BlogSortId; label: string }[] = [
  { id: "newest", label: "Newest first" },
  { id: "oldest", label: "Oldest first" },
  { id: "title", label: "Title: A to Z" },
];

const categoryOrder = [
  "Local",
  "Training",
  "Buying Guide",
  "Pricing",
  "Hatching Tips",
  "Product Comparison",
  "Commercial",
  "About JB",
];

export const BLOG_CATEGORIES = [...new Set(blogPosts.map((p) => p.category))].sort(
  (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b) || a.localeCompare(b),
);

export const BLOG_FILTER_OPTIONS: { id: string; label: string; description?: string }[] = [
  { id: "all", label: "All Articles", description: "Full blog catalogue" },
  ...BLOG_CATEGORIES.map((category) => ({
    id: category,
    label: category,
    description:
      category === "Local"
        ? "Vidarbha, Nagpur & Maharashtra"
        : category === "Training"
          ? "Hatching guides & how-to"
          : undefined,
  })),
];

export const countBlogsByCategory = (category: string) =>
  category === "all"
    ? blogPosts.length
    : blogPosts.filter((p) => p.category === category).length;

export const filterAndSortBlogs = (
  list: BlogPost[],
  category: string,
  search: string,
  sort: BlogSortId,
): BlogPost[] => {
  const query = search.trim().toLowerCase();
  let result = list.filter((post) => {
    const matchesCategory = category === "all" || post.category === category;
    const matchesSearch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  result = [...result].sort((a, b) => {
    switch (sort) {
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return result;
};

export const getBlogBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getLatestBlogs = (count = 3) =>
  [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

export const getRelatedBlogs = (slug: string, count = 3) => {
  const current = getBlogBySlug(slug);
  const others = blogPosts.filter((post) => post.slug !== slug);

  if (!current?.tags?.length) {
    return [...others]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, count);
  }

  return [...others]
    .sort((a, b) => {
      const score = (post: BlogPost) =>
        post.tags?.filter((tag) => current.tags?.includes(tag)).length ?? 0;
      return score(b) - score(a) || new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, count);
};
