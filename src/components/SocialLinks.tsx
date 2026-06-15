import { Facebook, Instagram, Youtube } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/social";

const items = [
  { label: "YouTube", href: SOCIAL_LINKS.youtube, icon: Youtube, hover: "hover:bg-red-50 hover:text-red-600 hover:border-red-200" },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram, hover: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200" },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, icon: Facebook, hover: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" },
] as const;

interface SocialLinksProps {
  size?: "sm" | "md";
  variant?: "light" | "dark";
  className?: string;
}

const SocialLinks = ({ size = "md", variant = "light", className = "" }: SocialLinksProps) => {
  const dim = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const iconDim = size === "sm" ? "h-4 w-4" : "h-4 w-4";
  const base =
    variant === "dark"
      ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
      : "border-stone-200 bg-white text-stone-500";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow JB on ${label}`}
          className={`inline-flex items-center justify-center rounded-full border transition-all duration-200 ${dim} ${base}`}
        >
          <Icon className={iconDim} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
