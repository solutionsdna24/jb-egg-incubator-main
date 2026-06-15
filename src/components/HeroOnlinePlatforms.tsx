import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { onlinePlatforms } from "@/lib/onlinePlatforms";

interface HeroOnlinePlatformsProps {
  variant?: "hero" | "section";
}

const HeroOnlinePlatforms = ({ variant = "hero" }: HeroOnlinePlatformsProps) => {
  const isHero = variant === "hero";

  return (
    <div
      className={
        isHero
          ? "mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/30 w-full max-w-5xl mx-auto px-1"
          : "w-full"
      }
      aria-labelledby="find-jb-online-heading"
    >
      <div className={`text-center ${isHero ? "mb-6 sm:mb-8" : "mb-6"}`}>
        <p
          className={`inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest ${
            isHero ? "text-white text-xs sm:text-sm md:text-base" : "section-eyebrow"
          }`}
        >
          <Globe className={`shrink-0 ${isHero ? "h-5 w-5 sm:h-6 sm:w-6" : "h-4 w-4"}`} aria-hidden="true" />
          Find JB Online
        </p>
        <h2
          id="find-jb-online-heading"
          className={
            isHero
              ? "text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2 sm:mt-3 tracking-tight"
              : "text-xl sm:text-2xl font-bold text-stone-900 mt-2"
          }
        >
          Trusted Listings &amp; Online Platforms
        </h2>
        {isHero && (
          <p className="text-white/80 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed px-2 max-w-xl mx-auto">
            Search JB on Justdial, IndiaMART, Flipkart &amp; more
          </p>
        )}
      </div>

      <ul
        className={`flex flex-wrap justify-center ${
          isHero ? "gap-4 sm:gap-6 md:gap-8" : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        }`}
        role="list"
      >
        {onlinePlatforms.map(({ name, shortLabel, url, external, icon: Icon, brandColor }) => {
          const inner = (
            <>
              <span
                className={`flex items-center justify-center rounded-full border transition-all duration-200 ${
                  isHero
                    ? `h-14 w-14 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem] bg-white/20 backdrop-blur-sm border-white/40 text-white shadow-lg ${brandColor ?? "hover:bg-white/30 hover:scale-105"}`
                    : `h-11 w-11 sm:h-12 sm:w-12 bg-stone-50 border-stone-200 text-emerald-700 ${brandColor ?? "hover:border-emerald-300"}`
                }`}
              >
                <Icon
                  className={
                    isHero
                      ? "h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9"
                      : "h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]"
                  }
                  aria-hidden="true"
                />
              </span>
              <span
                className={`font-semibold leading-tight text-center ${
                  isHero
                    ? "text-white text-xs sm:text-sm md:text-base mt-0.5 min-w-[5rem] sm:min-w-[5.5rem]"
                    : "text-[10px] sm:text-xs text-stone-800 max-w-[4.5rem] sm:max-w-none"
                }`}
              >
                {shortLabel}
              </span>
            </>
          );

          return (
            <li key={name}>
              {external ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 min-w-[5rem] sm:min-w-[5.5rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-lg"
                  aria-label={`Find JB on ${name}`}
                >
                  {inner}
                </a>
              ) : (
                <Link
                  to={url}
                  className={`group flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 min-w-[5rem] sm:min-w-[5.5rem] rounded-lg ${
                    isHero
                      ? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      : "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                  }`}
                  aria-label={`JB ${name}`}
                >
                  {inner}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeroOnlinePlatforms;
