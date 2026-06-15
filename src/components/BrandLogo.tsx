import jbLogoPreview from "@/assets/JB_LOGO-removebg-preview.webp";
import { Link } from "react-router-dom";

const sizes = {
  sm: "h-12 w-auto max-w-[120px]",
  md: "h-16 w-auto max-w-[160px]",
  lg: "h-24 w-auto max-w-[220px]",
  xl: "h-28 w-auto max-w-[260px]",
  header: "h-14 sm:h-[4.5rem] w-auto max-w-[200px] sm:max-w-[260px]",
  footer: "h-20 sm:h-24 w-auto max-w-[240px] sm:max-w-[280px]",
  hero: "h-[4.5rem] w-auto max-w-[200px] sm:h-28 md:h-32 sm:max-w-[260px] md:max-w-[320px]",
} as const;

interface BrandLogoProps {
  size?: keyof typeof sizes;
  showTagline?: boolean;
  linked?: boolean;
  className?: string;
  align?: "left" | "center";
}

const BrandLogo = ({
  size = "md",
  showTagline = false,
  linked = true,
  className = "",
  align = "center",
}: BrandLogoProps) => {
  const alignClass = align === "left" ? "items-start" : "items-center";

  const img = (
    <div className={`inline-flex flex-col ${alignClass} ${className}`}>
      <img
        src={jbLogoPreview}
        alt="JB Egg Incubator"
        className={`${sizes[size]} object-contain object-left`}
        width={260}
        height={80}
        decoding="async"
      />
      {showTagline && (
        <p className="mt-2 text-xs sm:text-sm font-semibold text-emerald-700 tracking-wide">
          Trusted Poultry Incubator · Made in India
        </p>
      )}
    </div>
  );

  if (linked) {
    return (
      <Link to="/" aria-label="JB Egg Incubator Home" className="inline-flex hover:opacity-90 transition-opacity">
        {img}
      </Link>
    );
  }

  return img;
};

export default BrandLogo;
