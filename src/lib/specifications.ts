export interface ProductSpecification {
  model: string;
  slug: string;
  capacity: string;
  type: string;
  body: string;
  dimensions: string;
  weight: string;
  power: string;
  voltage: string;
  temperatureRange: string;
  humidityRange: string;
  turning: string;
  warranty: string;
  idealFor: string;
  specs: { label: string; value: string }[];
}

export const productSpecifications: ProductSpecification[] = [
  {
    model: "JBW100",
    slug: "jbw100-100-egg-incubator",
    capacity: "Up to 100 eggs",
    type: "Manual egg incubator",
    body: "Thermocol",
    dimensions: "Approx. 55 × 55 × 50 cm",
    weight: "Approx. 8 kg",
    power: "120 Watt",
    voltage: "220V AC, 50 Hz",
    temperatureRange: "37.5°C – 37.8°C (manual adjustment)",
    humidityRange: "50% – 65% (manual monitoring)",
    turning: "Manual — 3 to 5 times daily",
    warranty: "6 months controller & adapter · 1 year unit support",
    idealFor: "Beginners, backyard farms, seasonal hatching",
    specs: [
      { label: "Cooling", value: "Single fan system" },
      { label: "Heating", value: "2 bulb heating system" },
      { label: "Hatch Rate", value: "80%+ with proper setup" },
      { label: "Price", value: "From ₹2,700" },
    ],
  },
  {
    model: "JBST100",
    slug: "jbst100-automatic-egg-incubator",
    capacity: "Up to 100 eggs (120 tray layout)",
    type: "Semi-automatic egg incubator",
    body: "Fiber composite",
    dimensions: "Approx. 58 × 58 × 52 cm",
    weight: "Approx. 12 kg",
    power: "120 Watt",
    voltage: "220V AC, 50 Hz",
    temperatureRange: "37.5°C – 37.8°C with mercury thermometer",
    humidityRange: "50% – 70% with digital hygrometer",
    turning: "Manual turning with digital humidity tracking",
    warranty: "6 months controller & adapter · 1 year unit support",
    idealFor: "Small commercial farms, repeat hatch cycles, Nagpur & Maharashtra buyers",
    specs: [
      { label: "Cooling", value: "Double fan system" },
      { label: "Heating", value: "2 bulb heating system" },
      { label: "Hatch Rate", value: "85%+ with proper setup" },
      { label: "Price", value: "From ₹4,999" },
    ],
  },
  {
    model: "JBI80M",
    slug: "jbi80m-fully-automatic-egg-incubator",
    capacity: "Up to 80 eggs",
    type: "Fully automatic egg incubator",
    body: "Metal",
    dimensions: "Approx. 60 × 55 × 55 cm",
    weight: "Approx. 18 kg",
    power: "120 Watt",
    voltage: "220V AC, 50 Hz",
    temperatureRange: "37.5°C – 37.8°C digital control",
    humidityRange: "50% – 70% digital hygrometer",
    turning: "Automatic egg rotation",
    warranty: "6 months controller & adapter · 1 year unit support",
    idealFor: "Hatcheries, fully automatic egg incubator buyers, commercial poultry",
    specs: [
      { label: "Cooling", value: "Dual fan system" },
      { label: "Backup", value: "Fuse & battery backup" },
      { label: "Hatch Rate", value: "85%+ with proper setup" },
      { label: "Price", value: "From ₹10,499" },
    ],
  },
  {
    model: "JB528C",
    slug: "jb528-528-104-combine-incubator",
    capacity: "528 eggs setting + 104 eggs hatching",
    type: "Fully automatic combine incubator",
    body: "Galvanized box tube frame · imported phenolic sheet",
    dimensions: "Contact JB for exact dimensions",
    weight: "Heavy-duty commercial unit",
    power: "400 Watt",
    voltage: "220–240V AC",
    temperatureRange: "37.5°C – 37.8°C digital control",
    humidityRange: "50% – 70% digital humidity control",
    turning: "Fully automatic 45° egg turning",
    warranty: "1 year digital controller · 2 years machine body",
    idealFor: "Weekly batch hatcheries, farmers scaling beyond 100-egg cycles",
    specs: [
      { label: "Setting Trays", value: "6 trays × 88 eggs (528 total)" },
      { label: "Hatching Capacity", value: "104 eggs" },
      { label: "Batch Cycle", value: "New setting every 6 days" },
      { label: "Cooling", value: "BLDC fan motor · auto exhaust" },
      { label: "Insulation", value: "40-density foam insulation" },
      { label: "Price", value: "Contact for price" },
    ],
  },
  {
    model: "JB160A",
    slug: "jb160-160-egg-automatic-incubator",
    capacity: "160 eggs",
    type: "Fully automatic egg incubator",
    body: "Durable ACP sheet with plastic egg trays",
    dimensions: "Contact JB for exact dimensions",
    weight: "Compact automatic unit",
    power: "200 Watt",
    voltage: "220–240V AC",
    temperatureRange: "37.5°C – 37.8°C digital control",
    humidityRange: "50% – 70% digital humidity control",
    turning: "Fully automatic egg turning",
    warranty: "1 year warranty",
    idealFor: "Small poultry farms, backyard farmers & hobbyists",
    specs: [
      { label: "Hatch Rate", value: "80% – 85% with proper setup" },
      { label: "Weekly Setting", value: "53 eggs" },
      { label: "Monthly Setting", value: "Up to 265 eggs" },
      { label: "Incubation Cycle", value: "18 days setter + 3 days hatcher" },
      { label: "Machine Life", value: "Expected 10–12 years" },
      { label: "Price", value: "Contact for price" },
    ],
  },
  {
    model: "JB240C",
    slug: "jb240-240-80-combine-incubator",
    capacity: "240 eggs setting + 80 eggs hatching",
    type: "Fully automatic combine incubator",
    body: "Galvanized frame · 3mm imported ACP sheets",
    dimensions: "Contact JB for exact dimensions",
    weight: "Mid-size commercial unit",
    power: "300 Watt",
    voltage: "220–240V AC",
    temperatureRange: "37.5°C – 37.8°C digital control",
    humidityRange: "50% – 70% digital humidity control",
    turning: "Fully automatic egg turning",
    warranty: "1 year digital controller warranty",
    idealFor: "Poultry farmers needing consistent weekly hatch batches",
    specs: [
      { label: "Setting Trays", value: "3 plastic trays (80 eggs × 3)" },
      { label: "Weekly Setting", value: "80 eggs every 6 days" },
      { label: "Monthly Setting", value: "Up to 400 eggs" },
      { label: "Daily Egg Need", value: "16 eggs" },
      { label: "Safety", value: "High-temperature alarm" },
      { label: "Insulation", value: "40-density foaming · 1.25mm aluminum aging" },
    ],
  },
  {
    model: "JB612C",
    slug: "jb612-612-204-combine-incubator",
    capacity: "612 eggs setting + 204 eggs hatching",
    type: "Fully automatic combine incubator",
    body: "Heavy-duty galvanized frame · 3mm imported phenolic sheets",
    dimensions: "Contact JB for exact dimensions",
    weight: "Large commercial unit",
    power: "500 Watt",
    voltage: "220–240V AC",
    temperatureRange: "37.5°C – 37.8°C digital control",
    humidityRange: "50% – 70% digital humidity control",
    turning: "Fully automatic 45° egg turning",
    warranty: "1 year digital controller warranty",
    idealFor: "Commercial hatcheries and large-scale poultry farmers",
    specs: [
      { label: "Setting Trays", value: "6 trays × 102 eggs" },
      { label: "Weekly Setting", value: "204 eggs every 6 days" },
      { label: "Monthly Setting", value: "Up to 1,020 eggs" },
      { label: "Daily Egg Need", value: "34 eggs" },
      { label: "Cooling", value: "BLDC fan · auto exhaust system" },
      { label: "Spare Kit", value: "Emergency spare kit available (extra charge)" },
    ],
  },
  {
    model: "JB816C",
    slug: "jb816-816-272-combine-incubator",
    capacity: "816 eggs setting + 272 eggs hatching",
    type: "Fully automatic combine incubator",
    body: "Heavy-duty galvanized frame · 3mm imported phenolic sheets",
    dimensions: "Contact JB for exact dimensions",
    weight: "High-capacity commercial unit",
    power: "570 Watt",
    voltage: "220–240V AC",
    temperatureRange: "37.5°C – 37.8°C digital control",
    humidityRange: "50% – 70% digital humidity control",
    turning: "Fully automatic 45° egg turning",
    warranty: "1 year digital controller warranty",
    idealFor: "Commercial hatcheries seeking high-capacity profitable chick production",
    specs: [
      { label: "Trolley System", value: "8 trays × 102 eggs per tray" },
      { label: "Weekly Setting", value: "272 eggs every 6 days" },
      { label: "Monthly Setting", value: "Up to 1,360 eggs" },
      { label: "Daily Egg Need", value: "46 eggs" },
      { label: "Cooling", value: "BLDC fan · auto exhaust system" },
      { label: "Spare Kit", value: "Emergency spare kit available (extra charge)" },
    ],
  },
];

export const getSpecBySlug = (slug: string) =>
  productSpecifications.find((s) => s.slug === slug);

export const getSpecByModel = (model: string) =>
  productSpecifications.find((s) => s.model === model);
