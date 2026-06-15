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
];

export const getSpecBySlug = (slug: string) =>
  productSpecifications.find((s) => s.slug === slug);

export const getSpecByModel = (model: string) =>
  productSpecifications.find((s) => s.model === model);
