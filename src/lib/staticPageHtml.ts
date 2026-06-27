import { landingPages, landingPagesByPath, type LandingPage } from "./landingPages";
import { productSpecifications, type ProductSpecification } from "./specifications";
import { getRouteMeta, injectRouteMetaIntoHtml } from "./routeMeta";
import { getProductPageContent, BLOG_SLUG_TITLES, getRelatedProductLinks } from "./productPageContent";
import { brandStory } from "./about";
import { trainingModules, hatchingGuideSections } from "./training";

const SITE_URL = "https://www.jbincubators.in";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const p = (text: string) => `<p>${escapeHtml(text)}</p>`;

const renderSections = (sections: { heading: string; body: string[] }[]) =>
  sections
    .map(
      (section) =>
        `<section><h2>${escapeHtml(section.heading)}</h2>${section.body.map((b) => p(b)).join("")}</section>`,
    )
    .join("\n");

const renderFaqs = (faqs: { question: string; answer: string }[]) =>
  `<section aria-labelledby="faq-heading"><h2 id="faq-heading">Frequently Asked Questions</h2><dl>${faqs
    .map(
      (faq) =>
        `<dt><strong>${escapeHtml(faq.question)}</strong></dt><dd>${escapeHtml(faq.answer)}</dd>`,
    )
    .join("")}</dl></section>`;

const renderHighlights = (items: string[]) =>
  `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

const renderRelatedLinks = (paths: string[]) => {
  const links = paths
    .map((path) => {
      const page = landingPagesByPath[path];
      if (!page) return "";
      return `<li><a href="${SITE_URL}${path}">${escapeHtml(page.h1.split("—")[0].trim())}</a></li>`;
    })
    .filter(Boolean);
  return `<nav aria-label="Related pages"><h2>Related Pages</h2><ul>${links.join("")}<li><a href="${SITE_URL}/products">All Products &amp; Prices</a></li><li><a href="${SITE_URL}/contact">Contact JB</a></li></ul></nav>`;
};

const renderLandingPage = (page: LandingPage) =>
  `<main id="static-prerender"><article>
<header><p>${escapeHtml(page.eyebrow)}</p><h1>${escapeHtml(page.h1)}</h1>${p(page.subtitle)}</header>
${renderHighlights(page.highlights)}
${renderSections(page.sections)}
${renderFaqs(page.faqs)}
${renderRelatedLinks(page.relatedPaths)}
<p><a href="${SITE_URL}/order-egg-incubator">Get price quote</a> · <a href="tel:+918767189437">Call +91 8767189437</a></p>
</article></main>`;

const renderProductPage = (spec: ProductSpecification) => {
  const path = `/products/${spec.slug}`;
  const content = getProductPageContent(spec.model);
  const specRows = spec.specs
    .map((row) => `<tr><th>${escapeHtml(row.label)}</th><td>${escapeHtml(row.value)}</td></tr>`)
    .join("");

  const intro = content?.intro ?? [
    `${spec.model} is a ${spec.type.toLowerCase()} from JB Egg Incubator — egg incubator manufacturer in Bhandara, Maharashtra.`,
  ];
  const sections = content?.sections ?? [];
  const faqs = content?.faqs ?? [
    {
      question: `What is the ${spec.model} capacity?`,
      answer: spec.capacity,
    },
  ];
  const related = getRelatedProductLinks(spec.model);
  const relatedLinks = related
    .map((r) => `<li><a href="${SITE_URL}${r.path}">${escapeHtml(r.id)} specs</a></li>`)
    .join("");

  return `<main id="static-prerender"><article>
<h1>${escapeHtml(spec.model)} — ${escapeHtml(spec.capacity)} Egg Incubator</h1>
${intro.map((text) => p(text)).join("")}
${renderSections(sections)}
<h2>Specifications — ${escapeHtml(spec.model)}</h2>
<table><tbody>
<tr><th>Model</th><td>${escapeHtml(spec.model)}</td></tr>
<tr><th>Capacity</th><td>${escapeHtml(spec.capacity)}</td></tr>
<tr><th>Body</th><td>${escapeHtml(spec.body)}</td></tr>
<tr><th>Power</th><td>${escapeHtml(spec.power)}</td></tr>
<tr><th>Temperature</th><td>${escapeHtml(spec.temperatureRange)}</td></tr>
<tr><th>Humidity</th><td>${escapeHtml(spec.humidityRange)}</td></tr>
<tr><th>Turning</th><td>${escapeHtml(spec.turning)}</td></tr>
<tr><th>Warranty</th><td>${escapeHtml(spec.warranty)}</td></tr>
${specRows}
</tbody></table>
${renderFaqs(faqs)}
<nav aria-label="Related models"><h2>Related Egg Incubator Models</h2><ul>${relatedLinks}<li><a href="${SITE_URL}/products">All products</a></li></ul></nav>
<p><a href="${SITE_URL}${path}">View full product page</a> · <a href="${SITE_URL}/order-egg-incubator">Order enquiry</a> · <a href="tel:+918767189437">+91 8767189437</a></p>
</article></main>`;
};

/** Blog body copy — no image imports (safe for Vite build hook) */
const BLOG_STATIC: Record<
  string,
  { h1: string; paragraphs: string[]; faqs: { question: string; answer: string }[] }
> = {
  "how-to-hatch-eggs-in-incubator": {
    h1: "How to Hatch Eggs in an Incubator — JB Step-by-Step Guide",
    paragraphs: [
      "Learning how to hatch eggs in an incubator starts with clean, fertile eggs stored point-down at 12–15°C for no more than seven days. JB farmers in Vidarbha and Nagpur pre-warm eggs to room temperature before placing them in a chicken egg incubator set to 37.5°C–37.8°C.",
      "Days 1–18 require 50–55% humidity and manual or automatic egg turning three to five times daily on semi-automatic models. JBST100 tracks humidity digitally; JBI80M turns eggs automatically so you can focus on farm work.",
      "Lockdown begins on day 19: stop turning, raise humidity to 65–70%, and avoid opening the lid. Chicks typically pip on day 20–21. JB provides free poultry incubation training and a downloadable hatching guide for every buyer in Maharashtra and India.",
    ],
    faqs: [
      {
        question: "What temperature for hatching eggs in an incubator?",
        answer: "Maintain 37.5°C–37.8°C throughout. JB egg incubators are factory-calibrated for Indian poultry farms.",
      },
      {
        question: "Can beginners hatch eggs in a JB incubator?",
        answer: "Yes. Start with JBW100 or JBST100 and follow our training — most first-time farmers achieve 80%+ hatch rates.",
      },
    ],
  },
  "21-day-hatching-process": {
    h1: "21 Day Hatching Process Explained — Chicken Egg Timeline",
    paragraphs: [
      "The 21 day hatching process for chicken eggs divides into three phases: days 1–7 embryo formation, days 8–18 growth and turning, and days 19–21 lockdown and hatch. JB egg incubator models maintain stable heat through Maharashtra summer when you follow our humidity chart.",
      "Week one is critical for vein development — keep humidity near 50–55% and turn eggs regularly. Week two adds weight to the chick; digital hygrometer models like JBST100 help Vidarbha farmers avoid dry-air losses.",
      "Lockdown week demands patience: higher humidity, no turning, and minimal lid opening. JB customers across Nagpur division share hatch videos on our YouTube channel showing successful 21 day cycles with JBW100, JBST100, and JBI80M units.",
    ],
    faqs: [
      {
        question: "When do chicks hatch in a 21 day cycle?",
        answer: "Most chicken eggs hatch between days 20 and 21 if temperature and humidity stayed consistent through incubation.",
      },
      {
        question: "What happens on day 18 of incubation?",
        answer: "Stop turning eggs, increase humidity toward 65%, and enter lockdown until chicks hatch.",
      },
    ],
  },
  "common-incubation-mistakes": {
    h1: "Common Incubation Mistakes — And How JB Farmers Avoid Them",
    paragraphs: [
      "The most common incubation mistakes include using eggs older than seven days, wrong humidity during lockdown, and opening the incubator too often. Nagpur and Vidarbha farmers reduce losses by following JB's temperature chart and training modules.",
      "Power cuts are common in rural Maharashtra — JBST100 and JBI80M include quality controllers; JBI80M adds fuse and battery backup features. Never place incubators in direct sunlight during Vidarbha summer.",
      "Skipping egg turning on manual models causes stuck embryos. Upgrade to a fully automatic egg incubator when you hatch every month. JB support team answers Marathi and English calls at +91 8767189437.",
    ],
    faqs: [
      {
        question: "Why did my hatch rate drop below 70%?",
        answer: "Usually old eggs, humidity swings, or infrequent turning. Review our common mistakes checklist and call JB for model-specific advice.",
      },
      {
        question: "Does JB help after purchase?",
        answer: "Yes — free setup guidance, training links, and warranty support from our Bhandara factory.",
      },
    ],
  },
  "egg-incubator-vidarbha-nagpur-bhandara": {
    h1: "Egg Incubator Vidarbha — Nagpur & Bhandara Delivery from JB Factory",
    paragraphs: [
      "JB Egg Incubator manufactures at Lakhandur, Bhandara — the heart of Vidarbha and roughly 60 km from Nagpur. Buying direct from our factory means no importer markup, faster spare parts, and support that understands local power and climate.",
      "We deliver automatic egg incubator and 100 egg incubator models across Nagpur division, Bhandara district, Wardha, Gondia, Chandrapur, and every Vidarbha taluka. Many customers collect units same-day from the factory after a live demo.",
      "Popular models for Vidarbha include JBW100 from ₹2,700, JBST100 with digital hygrometer, and JBI80M for commercial hatcheries. Search egg incubator Vidarbha or egg incubator Nagpur — JB is the regional manufacturer with 1,000+ farmers since 2022.",
    ],
    faqs: [
      {
        question: "How far is JB factory from Nagpur?",
        answer: "Approximately 60 km — about one hour drive to Lakhandur, Bhandara for pickup or factory visit.",
      },
      {
        question: "Do you deliver to rural Vidarbha villages?",
        answer: "Yes. Courier delivery with secure packaging and phone setup support to all Vidarbha districts.",
      },
    ],
  },
  "automatic-egg-incubator-maharashtra": {
    h1: "Automatic Egg Incubator Maharashtra — JB Models & Buyer Guide",
    paragraphs: [
      "Maharashtra poultry farmers upgrading from manual hatching choose JB automatic egg incubator models built in Bhandara. JBST100 offers semi-automatic control with digital humidity; JBI80M adds automatic egg turning and a durable metal body.",
      "Statewide delivery covers Pune, Mumbai, Nashik, Nagpur, and rural talukas. Automatic models reduce daily labour — critical for farms running monthly hatch cycles across the Maharashtra poultry industry.",
      "Compare automatic egg incubator price and features on our products page. JB remains factory-direct since 2022 with Marathi and English phone support for every Maharashtra buyer.",
    ],
    faqs: [
      {
        question: "Which automatic egg incubator is best for Maharashtra?",
        answer: "JBST100 for semi-automatic with digital hygrometer; JBI80M for fully automatic with auto turning.",
      },
      {
        question: "Is automatic incubator worth the extra cost?",
        answer: "Yes if you hatch monthly — saved labour and better humidity control often pay back within a few cycles.",
      },
    ],
  },
  "egg-hatching-machine-maharashtra-india": {
    h1: "Egg Hatching Machine Maharashtra & India — JB Price Guide (2026)",
    paragraphs: [
      "Egg hatching machine price in Maharashtra starts from ₹2,700 for JBW100 manual units. JBST100 semi-automatic models start from ₹4,999; JBI80M fully automatic from ₹10,499. Commercial combine incubators JB528C through JB816C are priced on enquiry.",
      "JB manufactures every egg hatching machine at Bhandara — serving Nagpur, Vidarbha, and pan-India buyers with the same warranty. Transparent pricing without hidden middleman fees is why 1,000+ farmers trust JB as their poultry incubator supplier.",
      "Request a quote with your district name for total landed price including courier. Factory pickup near Nagpur saves shipping for Vidarbha customers.",
    ],
    faqs: [
      {
        question: "What is the cheapest egg hatching machine from JB?",
        answer: "JBW100 100 egg incubator from ₹2,700 — ideal for beginners in Maharashtra and India.",
      },
      {
        question: "Do prices include delivery to Mumbai or Pune?",
        answer: "Courier charges depend on location. Call +91 8767189437 for total egg hatching machine price with shipping.",
      },
    ],
  },
  "egg-incubator-manufacturer-india": {
    h1: "JB: Leading Egg Incubator Manufacturer in India",
    paragraphs: [
      "JB Egg Incubator is an egg incubator manufacturer in India headquartered at Lakhandur, Bhandara, Maharashtra. Since 2022 we have built manual, semi-automatic, and fully automatic models for backyard farms and commercial hatcheries.",
      "Unlike imported brands, JB designs for Indian 220V power, summer heat, and rural voltage fluctuations. Our team of 12+ handles manufacturing, quality control, Nagpur-region sales, and nationwide logistics from one factory.",
      "Models span JBW100 through JB816C combine incubators. Farmers across Vidarbha, Maharashtra, Karnataka, Gujarat, and Uttar Pradesh order direct with 85%+ hatch rates when following JB training.",
    ],
    faqs: [
      {
        question: "Where is JB egg incubator factory?",
        answer: "Lakhandur, Bhandara, Maharashtra 441803 — Vidarbha region near Nagpur.",
      },
      {
        question: "Does JB export outside India?",
        answer: "Primary focus is India-wide delivery. Contact JB for bulk or special export enquiries.",
      },
    ],
  },
  "automatic-egg-incubator-machine-guide": {
    h1: "Automatic Egg Incubator Machine — Complete JB Buyer Guide",
    paragraphs: [
      "An automatic egg incubator machine reduces manual turning and stabilizes humidity — key for repeat hatch cycles. JB's JBI80M rotates eggs automatically while maintaining 37.5°C–37.8°C with digital monitoring and metal body durability.",
      "Semi-automatic JBST100 suits farmers who want digital hygrometer feedback without full automation cost. Both run on 120W at 220V — practical for village farms in Vidarbha and across India.",
      "Before buying, estimate monthly egg volume with our incubation capacity calculator. Commercial buyers should compare combine models JB528C–JB816C for setter-hatcher weekly batch systems.",
    ],
    faqs: [
      {
        question: "What does automatic egg turning mean?",
        answer: "The incubator rotates eggs on a schedule — you do not hand-turn three to five times daily.",
      },
      {
        question: "Which JB model has full automation?",
        answer: "JBI80M — automatic egg rotation, digital controls, metal body, fuse and battery backup.",
      },
    ],
  },
  "egg-hatching-machine-price-india": {
    h1: "Egg Hatching Machine Price in India — JB Models Compared (2026)",
    paragraphs: [
      "Egg hatching machine price in India varies by automation and body material. JB publishes transparent starting prices: JBW100 from ₹2,700, JBST100 from ₹4,999, JBI80M from ₹10,499. Commercial combine incubators require a custom quote based on capacity.",
      "Cheapest is not always best — mid-range JBST100 adds digital humidity that improves lockdown results for Nagpur and Maharashtra farmers. Premium JBI80M saves daily labour for commercial hatcheries.",
      "Call JB for today's stock and total price including delivery to your state. Factory-direct Bhandara pricing avoids dealer markup common with imported egg hatching machines.",
    ],
    faqs: [
      {
        question: "Why do egg hatching machine prices differ?",
        answer: "Automation level, body material, capacity, and controller quality drive price — JB lists starting prices for each tier.",
      },
      {
        question: "Is there EMI for egg incubators?",
        answer: "Contact JB at +91 8767189437 for current payment options and bulk discounts.",
      },
    ],
  },
  "commercial-poultry-incubator-supplier": {
    h1: "Commercial Egg Incubator & Poultry Incubator Supplier in India",
    paragraphs: [
      "JB supplies commercial egg incubators to hatcheries needing combine setter-hatcher systems. Models JB528C, JB240C, JB612C, and JB816C handle 160 to 816+ setting eggs with automatic 45° turning and BLDC cooling fans.",
      "As a poultry incubator supplier based in Bhandara, JB supports installation guidance, spare parts, and training for weekly batch operations. Maharashtra commercial farms benefit from nearby factory service and Nagpur-region sales support.",
      "Compare capacity and power requirements before scaling. JB team helps match incubator size to your farm's monthly chick output and budget.",
    ],
    faqs: [
      {
        question: "What is the largest JB commercial incubator?",
        answer: "JB816C — 816 setting + 272 hatching eggs with trolley tray system and 570W power.",
      },
      {
        question: "Does JB support commercial hatchery setup?",
        answer: "Yes — phone consultation, training modules, and after-sales parts from Bhandara factory.",
      },
    ],
  },
  "egg-incubator-maharashtra": {
    h1: "Egg Incubator Maharashtra — Manufacturer in Bhandara, Vidarbha",
    paragraphs: [
      "This blog complements our dedicated egg incubator Maharashtra landing page. JB manufactures in Bhandara and delivers statewide — Nagpur, Pune, Mumbai, Nashik, and rural talukas.",
      "Maharashtra poultry industry growth drives demand for reliable automatic egg incubator machines. JB models from ₹2,700 serve beginners through commercial combine systems.",
      "Read our regional pages for Nagpur and Vidarbha delivery details, or call +91 8767189437 for Marathi and English support from the factory team.",
    ],
    faqs: [
      {
        question: "Is JB only for Vidarbha?",
        answer: "Factory is in Vidarbha but JB delivers egg incubators across all Maharashtra and India.",
      },
      {
        question: "Where is the Maharashtra landing page?",
        answer: `Visit ${SITE_URL}/egg-incubator-maharashtra for full regional guide and FAQs.`,
      },
    ],
  },
  "best-egg-incubator-company-india": {
    h1: "Why JB Is Among the Best Egg Incubator Companies in India",
    paragraphs: [
      "Farmers rank egg incubator companies on hatch results, honest pricing, and after-sales support — not marketing alone. JB scores on all three with factory-direct sales from Bhandara since 2022 and 1,000+ customers.",
      "Affordable entry at ₹2,700, mid-tier digital models, and premium automatic units let farms grow without switching brands. Real Nagpur and Vidarbha customer videos document 80–90% hatch rates.",
      "JB answers phone calls, ships spare parts, and publishes free training — traits farmers expect from the best egg incubator company in India.",
    ],
    faqs: [
      {
        question: "How does JB compare to imported incubators?",
        answer: "JB is built for Indian power, priced without import duties, and supported locally from Maharashtra.",
      },
      {
        question: "What hatch rate do JB farmers report?",
        answer: "80–90% with proper process — higher on JBST100 and JBI80M when humidity is managed well.",
      },
    ],
  },
  "choose-right-egg-incubator": {
    h1: "How to Choose the Right Egg Incubator for Your Farm",
    paragraphs: [
      "Choosing the right egg incubator starts with monthly egg count. Under 100 eggs per cycle suits JBW100 or JBST100. Monthly commercial hatching favors JBI80M or combine models.",
      "Budget versus automation: manual saves money but needs daily turning. Semi-automatic adds humidity tracking. Fully automatic saves labour for busy Maharashtra farms.",
      "Use JB's incubation capacity calculator and call our team with your district — we recommend models for Nagpur heat, Vidarbha power conditions, and pan-India shipping.",
    ],
    faqs: [
      {
        question: "Should beginners buy automatic incubators?",
        answer: "Start with JBW100 or JBST100, learn the 21 day process, then upgrade to JBI80M when volume grows.",
      },
      {
        question: "Can one incubator hatch duck and quail eggs?",
        answer: "Yes — adjust humidity slightly; JB support guides species-specific settings.",
      },
    ],
  },
  "85-percent-hatch-rate-tips": {
    h1: "5 Tips for 85%+ Hatch Rate with JB Incubators",
    paragraphs: [
      "Tip 1: Use fresh fertile eggs within seven days. Tip 2: Maintain 37.5°C–37.8°C — verify with JB's calibrated controllers. Tip 3: Track humidity — 50–55% early, 65–70% lockdown.",
      "Tip 4: Turn consistently on manual models or choose JBI80M for automatic rotation. Tip 5: Follow lockdown rules — no opening lid during pip.",
      "Vidarbha and Nagpur farmers sharing 85%+ results on YouTube follow these steps plus JB poultry incubation training. Small process improvements beat expensive equipment alone.",
    ],
    faqs: [
      {
        question: "Is 85% hatch rate realistic?",
        answer: "Yes — common for JB farmers using fresh eggs and correct humidity through lockdown.",
      },
      {
        question: "Does model choice affect hatch rate?",
        answer: "Digital humidity and auto turning on JBST100 and JBI80M reduce common errors that lower hatch rates.",
      },
    ],
  },
  "manual-vs-automatic-incubator": {
    h1: "Manual vs Automatic Incubator — Which JB Model Suits You?",
    paragraphs: [
      "Manual JBW100 suits seasonal hobby hatching — lowest price, thermocol body, manual turning. You invest time daily but learn the full incubation process.",
      "Semi-automatic JBST100 adds digital hygrometer and fiber body — best value for repeat Maharashtra farmers. Fully automatic JBI80M eliminates turning labour with metal durability.",
      "Match choice to hatch frequency: once or twice a year → JBW100; monthly → JBST100 or JBI80M; commercial weekly batches → combine incubators.",
    ],
    faqs: [
      {
        question: "Is manual incubator harder to use?",
        answer: "It requires daily turning and humidity checks — JB training makes it manageable for beginners.",
      },
      {
        question: "When to upgrade to automatic?",
        answer: "When monthly hatching makes manual turning unsustainable or humidity swings hurt lockdown.",
      },
    ],
  },
  "why-farmers-trust-jb-incubators": {
    h1: "Why Farmers Across India Trust JB Egg Incubators",
    paragraphs: [
      "Trust comes from repeatable hatch results, not ads. JB farmers in Nagpur, Bhandara, and nationwide share video proof of healthy chicks from JBW100, JBST100, and JBI80M cycles.",
      "Factory-direct pricing since 2022 means no mystery middlemen. Warranty, spare parts, and Marathi-English phone support come from the same Bhandara team that built the unit.",
      "Free training, hatching guide PDF, and honest capacity advice before purchase — JB treats farmers as long-term partners, not one-time sales.",
    ],
    faqs: [
      {
        question: "How many farmers use JB incubators?",
        answer: "Over 1,000 customers nationwide since 2022 with growing Nagpur and Vidarbha base.",
      },
      {
        question: "Can I visit the JB factory?",
        answer: "Yes — welcome at Lakhandur, Bhandara; call ahead for demo and pickup.",
      },
    ],
  },
};

const MAIN_PAGE_CONTENT: Record<
  string,
  { h1: string; paragraphs: string[]; faqs: { question: string; answer: string }[] }
> = {
  "/egg-incubators": {
    h1: "Egg Incubator Vidarbha, Nagpur & Maharashtra — JB Manufacturer Bhandara",
    paragraphs: [
      "JB Egg Incubator is an egg incubator manufacturer in Lakhandur, Bhandara, Vidarbha — serving Nagpur, all Maharashtra, and pan-India since 2022. We build manual, semi-automatic, and fully automatic egg hatching machines from ₹2,700 with factory-direct pricing and phone support in Marathi and English.",
      "Farmers searching egg incubator Vidarbha, egg incubator Nagpur, or egg incubator Maharashtra find JB as the nearest major manufacturer — roughly 60 km from Nagpur with same-week delivery across the region. Models include JBW100 100 egg incubator, JBST100 with digital hygrometer, JBI80M fully automatic, and commercial combine units JB528C through JB816C.",
      "The Maharashtra poultry industry and Vidarbha farm economy drive strong demand for reliable incubators built for local 220V power and summer heat. JB calibrates every unit at the factory for 37.5°C–37.8°C and publishes free poultry incubation training, a hatching guide PDF, and an incubation capacity calculator.",
      "Over 1,000 farmers trust JB with 80–90% hatch rates when following our process. Order online, call +91 8767189437, WhatsApp, or visit our Bhandara factory for pickup and live demo. Explore regional pages for Nagpur delivery times, Vidarbha climate guidance, and statewide Maharashtra distribution.",
    ],
    faqs: [
      {
        question: "Where is JB egg incubator manufacturer located?",
        answer: "Lakhandur, Bhandara, Maharashtra 441803 — Vidarbha, near Nagpur.",
      },
      {
        question: "What is the starting price of JB egg incubator?",
        answer: "JBW100 100 egg incubator from ₹2,700. JBST100 from ₹4,999. JBI80M from ₹10,499.",
      },
      {
        question: "Does JB deliver to Nagpur and Vidarbha?",
        answer: "Yes — fastest delivery in Nagpur division and Vidarbha; pan-India courier for all states.",
      },
    ],
  },
  "/products": {
    h1: "Egg Incubator Models — JBW100 to JB816C Commercial Combine",
    paragraphs: [
      "Browse all JB egg incubator models from our Bhandara factory: entry JBW100 manual 100 egg incubator, popular JBST100 semi-automatic with digital hygrometer, premium JBI80M fully automatic with auto turning, and commercial combine incubators JB528C, JB160A, JB240C, JB612C, JB816C.",
      "Each model listing includes capacity, power, body material, warranty, and ideal farm size. Filter by manual, semi-automatic, or fully automatic on the live site. JB supplies Nagpur, Vidarbha, Maharashtra statewide, and all India.",
      "Call +91 8767189437 for today's price, stock, and delivery quote to your district.",
    ],
    faqs: [
      {
        question: "Which JB model is most popular?",
        answer: "JBST100 — semi-automatic with digital hygrometer for repeat hatch cycles.",
      },
      {
        question: "Does JB sell commercial combine incubators?",
        answer: "Yes — JB528C through JB816C for setter-hatcher weekly batch systems.",
      },
    ],
  },
  "/about": {
    h1: brandStory.headline,
    paragraphs: [
      ...brandStory.paragraphs,
      "Our team of 12+ covers manufacturing, quality control, Nagpur-region sales, customer support, training demos, and logistics from one Bhandara facility. JB remains committed to affordable egg hatching machine pricing and honest after-sales care.",
    ],
    faqs: [
      {
        question: "When was JB Egg Incubator founded?",
        answer: "2022 in Lakhandur, Bhandara, Vidarbha, Maharashtra.",
      },
      {
        question: "How many customers does JB serve?",
        answer: "Over 1,000 farmers across India with strong base in Nagpur and Vidarbha.",
      },
    ],
  },
  "/contact": {
    h1: "Contact JB Egg Incubator — Nagpur, Bhandara & Maharashtra",
    paragraphs: [
      "Contact JB Egg Incubator for orders, price quotes, factory visits, and after-sales support. Phone +91 8767189437, WhatsApp, or submit the order form online. Factory address: Lakhandur, Bhandara, Maharashtra 441803.",
      "Nagpur customers are ~60 km from our factory — pickup and same-day collection available when stock is ready. We deliver egg incubators across Vidarbha, Maharashtra, and all Indian states with secure packaging.",
      "Marathi and English support for poultry farmers, hatcheries, and egg incubator supplier enquiries.",
    ],
    faqs: [
      {
        question: "What are JB business hours?",
        answer: "Call +91 8767189437 for current hours and fastest response.",
      },
      {
        question: "Can I visit the Bhandara factory?",
        answer: "Yes — welcome for demo, pickup, and product selection. Call ahead to confirm stock.",
      },
    ],
  },
  "/order-egg-incubator": {
    h1: "Order Egg Incubator — Price Quote Maharashtra & India",
    paragraphs: [
      "Request an egg incubator price quote for JBW100, JBST100, JBI80M, or commercial combine models. Include your district for accurate delivery charges — Nagpur and Vidarbha often receive fastest dispatch from Bhandara.",
      "JB confirms stock, total price, and estimated delivery time by phone or WhatsApp after your enquiry. Factory-direct pricing without middleman markup since 2022.",
    ],
    faqs: [
      {
        question: "How fast will JB respond to an order enquiry?",
        answer: "Typically same business day by phone or WhatsApp at +91 8767189437.",
      },
      {
        question: "What information should I include in my quote request?",
        answer: "Model interest, egg volume per cycle, delivery district, and phone number.",
      },
    ],
  },
  "/blog": {
    h1: "Egg Incubator Blog — Guides for Maharashtra & India Farmers",
    paragraphs: [
      "JB blog covers how to hatch eggs in an incubator, the 21 day hatching process, common incubation mistakes, automatic egg incubator guides, egg hatching machine price comparisons, and regional topics for Vidarbha, Nagpur, and Maharashtra.",
      "Use category filters on the live site to find training, pricing, and regional articles. Every post supports JB egg incubator buyers with practical poultry farming advice from our Bhandara manufacturing team.",
    ],
    faqs: [
      {
        question: "Are JB blog guides free?",
        answer: "Yes — all articles are free. Download our hatching guide PDF from the guides section.",
      },
      {
        question: "Does JB offer hands-on training?",
        answer: "Yes — poultry incubation training page plus phone support for every customer.",
      },
    ],
  },
  "/guides/poultry-incubation-training": {
    h1: "Poultry Incubation Training — How to Hatch Eggs with JB",
    paragraphs: trainingModules.map((m) => `${m.title}: ${m.summary}`),
    faqs: [
      {
        question: "Is JB poultry incubation training free?",
        answer: "Yes — online modules plus phone guidance for JB incubator buyers.",
      },
      {
        question: "What temperature should I maintain?",
        answer: "37.5°C–37.8°C for chicken eggs throughout the 21 day cycle.",
      },
    ],
  },
  "/guides/free-hatching-guide": {
    h1: "Download Free Hatching Guide — JB Egg Incubator PDF",
    paragraphs: hatchingGuideSections.map((s) => `${s.title}: ${s.items.join(" ")}`),
    faqs: [
      {
        question: "What is in the JB hatching guide?",
        answer: "Temperature chart, humidity schedule, 21 day timeline, and lockdown checklist.",
      },
      {
        question: "Who should download the guide?",
        answer: "Every new JB egg incubator buyer in Maharashtra and India.",
      },
    ],
  },
  "/tools/incubation-capacity-calculator": {
    h1: "Incubation Capacity Calculator — Choose Your JB Model",
    paragraphs: [
      "Use the JB incubation capacity calculator to match monthly egg volume to the right model — JBW100 or JBST100 for up to 100–120 eggs, JBI80M for 80 automatic, or commercial combine systems for hatchery scale.",
      "Enter your target chicks per month and hatch frequency on the live calculator page. JB team confirms recommendations for Nagpur, Vidarbha, and nationwide farms at +91 8767189437.",
    ],
    faqs: [
      {
        question: "How many eggs can JBW100 hold?",
        answer: "Up to 100 eggs per cycle — manual thermocol body from ₹2,700.",
      },
      {
        question: "When do I need a combine incubator?",
        answer: "When weekly setter-hatcher batches exceed 160+ eggs — see JB528C and larger models.",
      },
    ],
  },
};

const renderBlogPage = (slug: string) => {
  const body = BLOG_STATIC[slug];
  if (!body) {
    const meta = getRouteMeta(`blog/${slug}`);
    return `<main id="static-prerender"><article><h1>${escapeHtml(meta.title)}</h1>${p(meta.description)}</article></main>`;
  }
  return `<main id="static-prerender"><article>
<h1>${escapeHtml(body.h1)}</h1>
${body.paragraphs.map((text) => p(text)).join("")}
${renderFaqs(body.faqs)}
<p><a href="${SITE_URL}/blog/${slug}">Read full article</a> · <a href="${SITE_URL}/blog">All blog posts</a></p>
</article></main>`;
};

const renderMainPage = (path: string) => {
  const content = MAIN_PAGE_CONTENT[path];
  if (!content) {
    const meta = getRouteMeta(path.replace(/^\//, ""));
    return `<main id="static-prerender"><article><h1>${escapeHtml(meta.title)}</h1>${p(meta.description)}</article></main>`;
  }
  const regionalNav =
    path === "/egg-incubators"
      ? `<nav aria-label="Regional pages"><ul>
<li><a href="${SITE_URL}/egg-incubator-nagpur">Egg Incubator Nagpur</a></li>
<li><a href="${SITE_URL}/egg-incubator-vidarbha">Egg Incubator Vidarbha</a></li>
<li><a href="${SITE_URL}/egg-incubator-maharashtra">Egg Incubator Maharashtra</a></li>
</ul></nav>`
      : "";
  return `<main id="static-prerender"><article>
<h1>${escapeHtml(content.h1)}</h1>
${content.paragraphs.map((text) => p(text)).join("")}
${regionalNav}
${renderFaqs(content.faqs)}
</article></main>`;
};

export const generateStaticPageHtml = (route: string): string => {
  const path = route.startsWith("/") ? route : route ? `/${route.replace(/^\/+/, "")}` : "/egg-incubators";
  const normalized =
    path === "/" || path === "/egg-incubators" || route === "egg-incubators" ? "/egg-incubators" : path;

  const landing = landingPagesByPath[normalized];
  if (landing) return renderLandingPage(landing);

  if (normalized.startsWith("/products/")) {
    const slug = normalized.slice("/products/".length);
    const spec = productSpecifications.find((s) => s.slug === slug);
    if (spec) return renderProductPage(spec);
  }

  if (normalized.startsWith("/blog/")) {
    return renderBlogPage(normalized.slice("/blog/".length));
  }

  return renderMainPage(normalized);
};

export const injectStaticPrerender = (html: string, route: string): string => {
  const withMeta = injectRouteMetaIntoHtml(html, route);
  const body = generateStaticPageHtml(route);
  return withMeta.replace(/<div id="root"><\/div>/, `<div id="root">${body}</div>`);
};
