import jbw100 from "@/assets/jbw100.webp";
import jbst100 from "@/assets/jbst100.webp";
import jbi80m from "@/assets/jbi80m.webp";
import interiorIncubator from "@/assets/interior-incubator.webp";
import compactIncubator from "@/assets/compact-incubator-original.webp";
import woodIncubator from "@/assets/wood-incubator-original.webp";
import redIncubator from "@/assets/red-incubator-original.webp";
import jbin100a from "@/assets/jbin100a.webp";

export type ProductFilterTag =
  | "starter"
  | "semi-automatic"
  | "fully-automatic"
  | "combine"
  | "commercial";

export type ProductSortId = "recommended" | "capacity-desc" | "capacity-asc" | "price-asc" | "name";

export interface Product {
  id: string;
  name: string;
  price: string;
  tagline: string;
  badge?: string;
  featured?: boolean;
  image: string;
  /** Primary egg capacity (setting side for combine models) */
  capacityEggs: number;
  filterTags: ProductFilterTag[];
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
    featured: true,
    image: jbw100,
    capacityEggs: 100,
    filterTags: ["starter"],
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
    featured: true,
    image: jbst100,
    capacityEggs: 100,
    filterTags: ["starter", "semi-automatic"],
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
    featured: true,
    image: jbi80m,
    capacityEggs: 80,
    filterTags: ["fully-automatic"],
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
  {
    id: "JB528C",
    name: "JB528C",
    price: "Contact for Price",
    tagline: "528 setting + 104 hatching combine incubator",
    badge: "Combine Incubator",
    image: interiorIncubator,
    capacityEggs: 528,
    filterTags: ["combine", "fully-automatic"],
    features: {
      control: "Fully Automatic",
      monitoring: "Digital Temp & Humidity",
      capacity: "528 + 104 eggs",
      power: "400 Watt",
    },
    keyFeatures: [
      "528 eggs setting (6 trays × 88 eggs) + 104 eggs hatching",
      "Ideal weekly batch system — new setting every 6 days",
      "Fully automatic 45° egg turning system",
      "High-temperature auto exhaust system",
      "BLDC fan motor for superior air circulation",
      "40-density foam insulation for stable temperature",
      "Galvanized box tube frame with imported phenolic sheet body",
      "1-year digital controller · 2-year machine body warranty",
      "100% Made in India — plug & use design",
    ],
  },
  {
    id: "JB160A",
    name: "JB160A",
    price: "Contact for Price",
    tagline: "160 eggs fully automatic incubator",
    badge: "Small Farm",
    image: compactIncubator,
    capacityEggs: 160,
    filterTags: ["fully-automatic", "commercial"],
    features: {
      control: "Fully Automatic",
      monitoring: "Digital Temp & Humidity",
      capacity: "160 eggs",
      power: "200 Watt",
    },
    keyFeatures: [
      "160 eggs capacity — 80–85% hatch rate",
      "Durable ACP sheet body with plastic egg trays",
      "21-day cycle (18 days setter + 3 days hatcher)",
      "Weekly setting: 53 eggs · monthly up to 265 eggs",
      "Energy efficient — only 200W power consumption",
      "Expected machine life: 10–12 years",
      "Ideal for small farms, backyard farmers & hobbyists",
      "1-year warranty · 100% Made in India",
    ],
  },
  {
    id: "JB240C",
    name: "JB240C",
    price: "Contact for Price",
    tagline: "240 setting + 80 hatching combine incubator",
    badge: "Combine Incubator",
    image: woodIncubator,
    capacityEggs: 240,
    filterTags: ["combine", "fully-automatic"],
    features: {
      control: "Fully Automatic",
      monitoring: "Digital Temp & Humidity",
      capacity: "240 + 80 eggs",
      power: "300 Watt",
    },
    keyFeatures: [
      "240 eggs setting + 80 eggs hatching per batch",
      "3 plastic setting trays (80 eggs × 3)",
      "Weekly setting: 80 eggs every 6 days · monthly up to 400 eggs",
      "Fully automatic egg turning with high-temperature alarm",
      "Galvanized box tube frame · 3mm imported ACP sheets",
      "40-density foaming insulation · 1.25mm aluminum aging",
      "Energy efficient — 300W · 220–240V operation",
      "1-year digital controller warranty · Made in India",
    ],
  },
  {
    id: "JB612C",
    name: "JB612C",
    price: "Contact for Price",
    tagline: "612 setting + 204 hatching combine incubator",
    badge: "Commercial",
    image: redIncubator,
    capacityEggs: 612,
    filterTags: ["combine", "commercial", "fully-automatic"],
    features: {
      control: "Fully Automatic",
      monitoring: "Digital Temp & Humidity",
      capacity: "612 + 204 eggs",
      power: "500 Watt",
    },
    keyFeatures: [
      "612 eggs setting + 204 eggs hatching capacity",
      "6 egg setting trays (102 eggs per tray)",
      "Weekly setting: 204 eggs every 6 days · monthly up to 1,020 eggs",
      "Fully automatic 45° egg turning system",
      "BLDC fan motor · high-temperature auto exhaust",
      "Heavy-duty galvanized frame · 3mm imported phenolic sheets",
      "40-density foaming insulation · 2mm aluminum aging",
      "Emergency spare kit available · 1-year controller warranty",
    ],
  },
  {
    id: "JB816C",
    name: "JB816C",
    price: "Contact for Price",
    tagline: "816 setting + 272 hatching combine incubator",
    badge: "Commercial",
    image: jbin100a,
    capacityEggs: 816,
    filterTags: ["combine", "commercial", "fully-automatic"],
    features: {
      control: "Fully Automatic",
      monitoring: "Digital Temp & Humidity",
      capacity: "816 + 272 eggs",
      power: "570 Watt",
    },
    keyFeatures: [
      "816 eggs setting + 272 eggs hatching capacity",
      "Egg setting trolley system — 8 trays × 102 eggs per tray",
      "Weekly setting: 272 eggs every 6 days · monthly up to 1,360 eggs",
      "Fully automatic 45° egg turning system",
      "BLDC fan motor · high-temperature auto exhaust",
      "Heavy-duty galvanized frame · 3mm imported phenolic sheets",
      "Energy efficient — 570W · 220–240V operation",
      "Emergency spare kit available · Made in India",
    ],
  },
];

export const PRODUCT_FILTER_OPTIONS: {
  id: ProductFilterTag | "all";
  label: string;
  description: string;
}[] = [
  { id: "all", label: "All Models", description: "Full JB catalogue" },
  { id: "starter", label: "Starter & Budget", description: "Manual & entry-level" },
  { id: "semi-automatic", label: "Semi-Automatic", description: "Digital monitoring" },
  { id: "fully-automatic", label: "Fully Automatic", description: "Auto turning & controls" },
  { id: "combine", label: "Combine", description: "Setter + hatcher in one" },
  { id: "commercial", label: "Commercial", description: "High-volume hatcheries" },
];

export const PRODUCT_SORT_OPTIONS: { id: ProductSortId; label: string }[] = [
  { id: "recommended", label: "Recommended order" },
  { id: "capacity-asc", label: "Capacity: Low to High" },
  { id: "capacity-desc", label: "Capacity: High to Low" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "name", label: "Name: A to Z" },
];

const parsePrice = (price: string) => {
  const digits = price.replace(/[^\d]/g, "");
  return digits ? Number(digits) : Number.POSITIVE_INFINITY;
};

export const filterAndSortProducts = (
  list: Product[],
  filter: ProductFilterTag | "all",
  search: string,
  sort: ProductSortId,
): Product[] => {
  const query = search.trim().toLowerCase();
  let result = list.filter((product) => {
    const matchesFilter =
      filter === "all" || product.filterTags.includes(filter);
    const matchesSearch =
      !query ||
      product.id.toLowerCase().includes(query) ||
      product.name.toLowerCase().includes(query) ||
      product.tagline.toLowerCase().includes(query) ||
      product.features.capacity.toLowerCase().includes(query) ||
      product.badge?.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  const recommendedOrder = new Map(list.map((p, i) => [p.id, i]));

  result = [...result].sort((a, b) => {
    switch (sort) {
      case "capacity-asc":
        return a.capacityEggs - b.capacityEggs;
      case "capacity-desc":
        return b.capacityEggs - a.capacityEggs;
      case "price-asc":
        return parsePrice(a.price) - parsePrice(b.price);
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return (recommendedOrder.get(a.id) ?? 0) - (recommendedOrder.get(b.id) ?? 0);
    }
  });

  return result;
};

export const countProductsByFilter = (filter: ProductFilterTag | "all") =>
  filter === "all"
    ? products.length
    : products.filter((p) => p.filterTags.includes(filter)).length;
