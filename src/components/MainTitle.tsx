import { Phone, Truck, Shield, Star, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import BrandLogo from "@/components/BrandLogo";
import { FEATURED_VIDEO_ID, CHANNEL_VIDEOS } from "@/lib/youtube";

const YouTubeModal = lazy(() => import("@/components/YouTubeModal"));

const MARQUEE_TEXT = [
  "Limited Stock — Order Today!",
  "Selling Fast! Secure Your JB Incubator Now.",
  "90% Hatch Results — Watch on YouTube!",
  "Ready Stock · Pan-India Delivery.",
  "Call +91 8767189437 for Orders.",
];

const MainTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MARQUEE_TEXT.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative isolate w-full text-center overflow-hidden px-3 sm:px-4 py-8 sm:py-12 lg:py-16 min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-center"
        aria-labelledby="main-page-heading"
      >
        <HeroVideoBackground />

        <div className="relative z-10 w-full max-w-4xl mx-auto min-w-0">
          <div className="rounded-xl sm:rounded-2xl border border-white/60 bg-white/95 backdrop-blur-sm shadow-2xl px-4 py-6 sm:px-8 sm:py-10 lg:px-10 lg:py-12 w-full min-w-0">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <div className="rounded-lg sm:rounded-xl bg-white border-2 border-stone-100 p-3 sm:p-5 shadow-sm max-w-full">
                <BrandLogo size="hero" linked={false} showTagline align="left" />
              </div>
            </div>

            <div className="mb-4 sm:mb-5 px-1">
              <span className="inline-flex max-w-full items-center justify-center gap-1.5 sm:gap-2 bg-slate-800 text-white text-[11px] leading-snug sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm text-balance">
                <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-white shrink-0" aria-hidden="true" />
                {MARQUEE_TEXT[currentIndex]}
              </span>
            </div>

            <h1
              id="main-page-heading"
              className="text-[1.35rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-2 sm:mb-3 tracking-tight text-balance px-0.5"
            >
              Egg Incubator Manufacturer in India — Trusted by 1,000+ Farmers
            </h1>
            <p className="text-sm sm:text-lg md:text-xl font-semibold text-slate-700 mb-3 sm:mb-4 leading-snug text-balance px-0.5">
              Automatic egg incubator machines & commercial poultry incubators from ₹2,700
            </p>
            <p className="text-sm sm:text-base md:text-lg text-stone-700 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed text-pretty px-0.5">
              JB is among the best egg incubator companies in India — a poultry incubator supplier
              based in Maharashtra with manual & automatic egg hatching machines, 85–90% hatch rates,
              pan-India delivery, and expert phone support on every order.
            </p>

            <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch md:items-center gap-2.5 sm:gap-3 md:gap-4 mb-5 sm:mb-6 w-full max-w-xl md:max-w-none mx-auto">
              <Link
                to="/jb-egg-incubator-order"
                className="btn-accent w-full md:w-auto text-sm sm:text-base px-5 py-3 sm:px-8 sm:py-3.5 shadow-lg hover:scale-[1.02] transition-transform justify-center"
              >
                Order Now — From ₹2,700
              </Link>
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm sm:text-base px-5 py-3 sm:px-8 sm:py-3.5 rounded-xl shadow-sm transition-colors"
              >
                <Play className="h-4 w-4 fill-white shrink-0" aria-hidden="true" />
                Watch Farmer Video
              </button>
              <a
                href="tel:+918767189437"
                className="inline-flex w-full md:w-auto items-center justify-center text-slate-800 font-bold text-sm sm:text-base px-5 py-3 sm:px-8 sm:py-3.5 rounded-xl border-2 border-slate-300 bg-white hover:bg-stone-50 transition-colors"
              >
                Call Now
              </a>
            </div>

            <div className="flex flex-col min-[420px]:flex-row min-[420px]:flex-wrap items-stretch sm:items-center justify-center gap-2 sm:gap-3 text-stone-800 text-xs sm:text-sm font-medium">
              {[
                { icon: Phone, text: "8767189437" },
                { icon: Truck, text: "Pan-India Delivery" },
                { icon: Shield, text: "1 Year Warranty" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center justify-center gap-2 bg-stone-100 rounded-full px-3 py-2 sm:px-4 sm:py-2.5 border border-stone-200 min-[420px]:flex-1 sm:flex-none sm:min-w-0"
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-slate-600" aria-hidden="true" />
                  <span className="truncate">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {videoOpen && (
        <Suspense fallback={null}>
          <YouTubeModal
            open={videoOpen}
            onOpenChange={setVideoOpen}
            videoId={FEATURED_VIDEO_ID}
            title={CHANNEL_VIDEOS[0].title}
          />
        </Suspense>
      )}
    </>
  );
};

export default MainTitle;
