import jbLogoPreview from "@/assets/JB_LOGO-removebg-preview.webp";
import { Link } from "react-router-dom";

const sizes = {
  sm: "h-12 w-auto max-w-[120px]",
  md: "h-16 w-auto max-w-[160px]",
  lg: "h-24 w-auto max-w-[220px]",
  xl: "h-28 w-auto max-w-[260px]",
  header: "h-14 sm:h-[4.5rem] w-auto max-w-[200px] sm:max-w-[260px]",
  footer: "h-20 sm:h-24 w-auto max-w-[240px] sm:max-w-[280px]",
  hero: "h-24 w-auto max-w-[min(92vw,300px)] sm:h-32 sm:max-w-[360px] md:h-36 md:max-w-[400px] lg:h-44 lg:max-w-[460px]",
} as const;

const imgDimensions: Partial<Record<keyof typeof sizes, { width: number; height: number }>> = {
  hero: { width: 460, height: 140 },
  header: { width: 260, height: 80 },
  footer: { width: 280, height: 96 },
};

interface BrandLogoProps {
  size?: keyof typeof sizes;
  showTagline?: boolean;
  linked?: boolean;
  className?: string;
  align?: "left" | "center";
}

const BrandLogo = ({
  size = "hero",
  showTagline = false,
  linked = true,
  className = "",
  align = "center",
}: BrandLogoProps) => {
  const alignClass = align === "left" ? "items-start" : "items-center";
  const dims = imgDimensions[size] ?? { width: 260, height: 80 };
  const taglineClass =
    size === "hero"
      ? "mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-semibold text-white/95 tracking-wide text-center"
      : "mt-2 text-xs sm:text-sm font-semibold text-emerald-900 tracking-wide";

  const img = (
    <div className={`inline-flex flex-col w-full ${alignClass} ${className}`}>
      <img
        src={jbLogoPreview}
        alt="JB Egg Incubator"
        className={`${sizes[size]} object-contain ${align === "left" ? "object-left" : "object-center"} mx-auto`}
        width={dims.width}
        height={dims.height}
        decoding="async"
        fetchPriority={size === "hero" ? "high" : undefined}
      />
      {showTagline && (
        <p className={taglineClass}>
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
