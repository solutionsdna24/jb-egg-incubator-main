import {
  Phone,
  Store,
  Wrench,
  ShoppingBag,
  Youtube,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { ROUTES } from "./routes";

export interface OnlinePlatform {
  name: string;
  shortLabel: string;
  url: string;
  external: boolean;
  icon: LucideIcon;
  brandColor?: string;
}

export const onlinePlatforms: OnlinePlatform[] = [
  {
    name: "Justdial",
    shortLabel: "Justdial",
    url: "https://jsdl.in/DT-99QLBNPLSPD",
    external: true,
    icon: Phone,
    brandColor: "hover:bg-[#0f8fef]/20 hover:border-[#0f8fef]/40",
  },
  {
    name: "IndiaMART",
    shortLabel: "IndiaMART",
    url: "https://www.indiamart.com",
    external: true,
    icon: Store,
    brandColor: "hover:bg-[#2e3192]/20 hover:border-[#2e3192]/40",
  },
  {
    name: "TOOLSVILA",
    shortLabel: "ToolsVila",
    url: "https://www.toolsvila.com",
    external: true,
    icon: Wrench,
    brandColor: "hover:bg-orange-500/20 hover:border-orange-400/40",
  },
  {
    name: "Flipkart",
    shortLabel: "Flipkart",
    url: "https://www.flipkart.com",
    external: true,
    icon: ShoppingBag,
    brandColor: "hover:bg-[#f9d23c]/20 hover:border-[#f9d23c]/50",
  },
  {
    name: "YouTube",
    shortLabel: "YouTube",
    url: "https://youtube.com/@jbeggincubator",
    external: true,
    icon: Youtube,
    brandColor: "hover:bg-red-500/25 hover:border-red-400/40",
  },
  {
    name: "Agriculture Blogs",
    shortLabel: "JB Blog",
    url: ROUTES.blog,
    external: false,
    icon: BookOpen,
    brandColor: "hover:bg-emerald-400/20 hover:border-emerald-300/40",
  },
];

/** Longer copy for About page backlink section */
export const directoryListings = onlinePlatforms.map((p) => ({
  name: p.name,
  url: p.url,
  description:
    p.name === "Justdial"
      ? "Find JB Egg Incubator on Justdial — egg incubator Bhandara & Nagpur."
      : p.name === "IndiaMART"
        ? "IndiaMART supplier profile — egg incubator manufacturer Maharashtra."
        : p.name === "TOOLSVILA"
          ? "Agricultural tools directory — egg hatching machine listings."
          : p.name === "Flipkart"
            ? "Marketplace for egg incubator India buyers online."
            : p.name === "YouTube"
              ? "Customer testimonial videos & hatch demos."
              : "Poultry farming guides & incubation tips.",
}));
