export const temperatureChart = [
  { day: "1–18", temperature: "37.5°C – 37.8°C", humidity: "50% – 55%", action: "Turn eggs 3–5× daily (or use auto turner)" },
  { day: "19–21", temperature: "37.5°C – 37.8°C", humidity: "65% – 70%", action: "Lockdown — stop turning, increase humidity" },
  { day: "21", temperature: "37.2°C – 37.5°C", humidity: "70%", action: "Hatch day — do not open lid unnecessarily" },
];

export const hatchingProcess21Days = [
  { day: "Day 1–7", title: "Early Development", text: "Embryo forms. Maintain steady 37.5°C–37.8°C and 50–55% humidity. Turn eggs regularly for even heat distribution." },
  { day: "Day 8–14", title: "Growth Phase", text: "Organs develop. Monitor humidity with hygrometer. JBST100 and JBI80M make tracking easier with digital sensors." },
  { day: "Day 15–18", title: "Pre-Lockdown", text: "Chick positions for hatch. Reduce lid opening. Confirm temperature stability before lockdown." },
  { day: "Day 19–21", title: "Lockdown & Hatch", text: "Stop turning. Raise humidity to 65–70%. Chicks pip and hatch. Wait for chicks to dry before moving." },
];

export const commonMistakes = [
  { mistake: "Opening the lid too often", fix: "Each opening drops temperature and humidity. Plan checks once or twice daily except lockdown." },
  { mistake: "Wrong humidity during lockdown", fix: "Low humidity causes chicks to stick to shell. Target 65–70% on days 19–21." },
  { mistake: "Using old or dirty eggs", fix: "Set eggs within 7 days of laying. Clean lightly — do not wash with water." },
  { mistake: "Uneven temperature", fix: "Calibrate your egg incubator. JB units are factory-tested; call us for first-time setup help." },
  { mistake: "Skipping egg turning", fix: "Manual models need 3–5 turns daily. Choose JBI80M fully automatic egg incubator for auto rotation." },
];

export const trainingModules = [
  {
    title: "How to Hatch Eggs in an Incubator",
    summary: "Step-by-step guide for first-time poultry farmers using JB egg incubators in Maharashtra and India.",
    topics: ["Egg selection & storage", "Setting temperature & humidity", "Daily turning routine", "Lockdown procedure", "Post-hatch care"],
  },
  {
    title: "Egg Incubation Temperature Chart",
    summary: "Reference chart for chicken eggs — ideal heat and humidity for each incubation phase.",
    topics: ["37.5°C–37.8°C incubation range", "Humidity for egg hatching by day", "Duck & quail adjustments", "Power backup tips"],
  },
  {
    title: "21 Day Hatching Process Explained",
    summary: "What happens inside the egg each week and what you should do on your JB incubator.",
    topics: ["Week 1 embryo development", "Week 2 growth", "Week 3 lockdown & hatch", "When to help a chick (rarely)"],
  },
  {
    title: "Common Incubation Mistakes to Avoid",
    summary: "Learn from frequent errors Indian farmers make — and how to get 85%+ hatch rates.",
    topics: ["Temperature swings", "Humidity errors", "Poor ventilation", "Wrong egg age", "Power outage handling"],
  },
];

export const hatchingGuideSections = [
  {
    title: "Before You Start",
    items: [
      "Choose the right model: JBW100 (100 egg incubator), JBST100 (120 egg layout), or JBI80M (fully automatic).",
      "Place incubator in a stable room away from direct sun and drafts.",
      "Run empty for 2–4 hours to stabilise temperature before setting eggs.",
    ],
  },
  {
    title: "Setting Eggs",
    items: [
      "Use clean, fertile eggs not older than 7 days.",
      "Store point-down at 12–15°C until setting.",
      "Mark eggs with X/O for turning reference on manual models.",
    ],
  },
  {
    title: "Daily Routine (Days 1–18)",
    items: [
      "Maintain 37.5°C–37.8°C and 50–55% humidity.",
      "Turn eggs 3–5 times daily unless using JBI80M auto turner.",
      "Check water channels for humidity as needed.",
    ],
  },
  {
    title: "Lockdown (Days 19–21)",
    items: [
      "Stop turning. Increase humidity to 65–70%.",
      "Do not open lid unless necessary.",
      "Allow chicks to dry fully before transferring to brooder.",
    ],
  },
];
