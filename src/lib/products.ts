import jbw100 from "@/assets/jbw100.webp";
import jbst100 from "@/assets/jbst100.webp";
import jbi80m from "@/assets/jbi80m.webp";

export interface Product {
  id: string;
  name: string;
  price: string;
  tagline: string;
  badge?: string;
  image: string;
  features: {
    control: string;
    monitoring: string;
    capacity: string;
    power: string;
  };
  keyFeatures: string[];
}

export const products: Product[] = [
  {
    id: "JBW100",
    name: "JBW100",
    price: "₹ 2,700",
    tagline: "Best starter incubator for small farms",
    badge: "Budget Pick",
    image: jbw100,
    features: {
      control: "Manual Control",
      monitoring: "Manual Monitoring",
      capacity: "100 eggs",
      power: "120 Watt",
    },
    keyFeatures: [
      "Thermocol body material",
      "High quality controller",
      "Single fan cooling system",
      "2 bulbs heating system",
      "2 holders included",
      "6-month warranty on controller & adapter",
      "80%+ hatch rate performance",
      "Branded & long lasting parts",
    ],
  },
  {
    id: "JBST100",
    name: "JBST100",
    price: "₹ 4,999",
    tagline: "Semi-auto with digital monitoring",
    badge: "Most Popular",
    image: jbst100,
    features: {
      control: "Mercury Thermometer",
      monitoring: "Digital Hygrometer",
      capacity: "100 eggs",
      power: "120 Watt",
    },
    keyFeatures: [
      "Fiber body material",
      "High quality controller",
      "Double fan cooling system",
      "2 bulbs heating system",
      "Digital hygrometer included",
      "Mercury thermometer included",
      "6-month warranty on controller & adapter",
      "85%+ hatch rate performance",
    ],
  },
  {
    id: "JBI80M",
    name: "JBI80M",
    price: "₹ 10,499",
    tagline: "Fully automatic premium model",
    badge: "Premium",
    image: jbi80m,
    features: {
      control: "Auto Control",
      monitoring: "Digital Monitor",
      capacity: "80 eggs",
      power: "120 Watt",
    },
    keyFeatures: [
      "Metal body material",
      "Automatic egg rotation",
      "Dual fan cooling system",
      "Made in India adapter",
      "Fuse & battery backup",
      "Digital hygrometer & thermometer",
      "85%+ hatch rate performance",
      "Fully automatic operation",
    ],
  },
];
