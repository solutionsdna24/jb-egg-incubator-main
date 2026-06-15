export const BRAND_FOUNDED_YEAR = 2022;

export const brandStory = {
  headline: "Our Brand Story — JB Egg Incubator Since 2022",
  paragraphs: [
    "JB Egg Incubator began in 2022 in Lakhandur, Bhandara, Vidarbha with one goal: make reliable egg incubator machines affordable for Indian poultry farmers. What started as a small workshop building manual egg hatching machines for local farms has grown into a trusted egg incubator manufacturer in Maharashtra and India.",
    "From day one we focused on practical design — stable 37.5°C heat control, low 120W power use, and phone support in Marathi and English. Farmers in Nagpur, Bhandara, and across Vidarbha told neighbours about their hatch results, and word spread statewide.",
    "Today JB supplies automatic egg incubator and fully automatic egg incubator models to 1,000+ farmers nationwide. We remain factory-direct from Bhandara — the same hands-on quality, honest egg hatching machine pricing, and after-sales care that built our name since 2022.",
  ],
};

export const journeyMilestones = [
  { year: "2022", title: "JB Founded in Bhandara", text: "Started manufacturing manual JBW100 egg incubators for Vidarbha farmers from our Lakhandur workshop." },
  { year: "2023", title: "JBST100 Launch", text: "Introduced semi-automatic egg incubator with digital hygrometer — became our most popular 100 egg incubator model." },
  { year: "2024", title: "Pan-India Expansion", text: "Expanded poultry incubator supplier network across Maharashtra, Karnataka, Gujarat, and Uttar Pradesh with ready stock." },
  { year: "2025", title: "JBI80M Fully Automatic", text: "Launched fully automatic egg incubator with auto egg turning and metal body for commercial hatcheries." },
  { year: "2026", title: "1,000+ Farmers Served", text: "Crossed 1,000 happy customers, YouTube farmer testimonials, and training guides for new poultry entrepreneurs." },
];

export const manufacturingSteps = [
  { step: "01", title: "Design & Material Selection", text: "Each egg incubator model is designed for Indian 220V power and local climate. We select thermocol, fiber, or metal bodies based on durability and farm use." },
  { step: "02", title: "Controller Assembly", text: "Branded heating elements, adapters, and temperature controllers are tested for stable 37.5°C–37.8°C output before installation." },
  { step: "03", title: "Chamber Build & Wiring", text: "Fans, bulbs, holders, and hygrometers are fitted per model spec. JBI80M units receive automatic egg rotation motors and digital monitors." },
  { step: "04", title: "Quality Check & Calibration", text: "Every egg hatching machine runs a calibration cycle. We verify heat uniformity, humidity readings, and power draw at 120W." },
  { step: "05", title: "Pack & Dispatch", text: "Units are securely packed at our Bhandara factory and shipped across Maharashtra and India with setup instructions and warranty card." },
];

export interface TeamMember {
  name: string;
  role: string;
  department: string;
}

export const teamMembers: TeamMember[] = [
  { name: "Jayant Bhandarkar", role: "Founder & Managing Director", department: "Leadership" },
  { name: "Amit Patil", role: "Production Head", department: "Manufacturing" },
  { name: "Suresh Khandare", role: "Quality Control Manager", department: "Manufacturing" },
  { name: "Priya Deshmukh", role: "Customer Support Lead", department: "Support" },
  { name: "Ramesh Patil", role: "Sales Manager — Nagpur Region", department: "Sales" },
  { name: "Kavita Meshram", role: "Operations & Accounts", department: "Operations" },
  { name: "Vishal Gedam", role: "Assembly Supervisor", department: "Manufacturing" },
  { name: "Anjali Wankhade", role: "Training & Demo Specialist", department: "Training" },
  { name: "Rohit Thakre", role: "Logistics Coordinator", department: "Operations" },
  { name: "Sunita Kohale", role: "Spare Parts & Service", department: "Support" },
  { name: "Mahesh Bhoyar", role: "Electrical Technician", department: "Manufacturing" },
  { name: "Deepak Jambhulkar", role: "Marketing & Digital", department: "Marketing" },
];

export { directoryListings } from "./onlinePlatforms";
