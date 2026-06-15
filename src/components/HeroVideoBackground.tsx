import { useEffect, useRef, useState } from "react";
import chickBackground from "@/assets/chick-background.webp";
import chicksHatched from "@/assets/chicks-hatched.webp";
import eggsTray from "@/assets/eggs-tray.webp";
import { HERO_FALLBACK_VIDEO, HERO_LOCAL_VIDEO } from "@/lib/media";

const HeroVideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enableVideo, setEnableVideo] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (prefersReduced || !isDesktop) return;

    const timer = window.setTimeout(() => setEnableVideo(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!enableVideo) return;
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.play().catch(() => {});
    };

    play();
    video.addEventListener("canplay", play);
    return () => video.removeEventListener("canplay", play);
  }, [enableVideo, useFallback]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <img
        src={chickBackground}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[center_32%] sm:object-center sm:scale-105"
      />

      <img
        src={eggsTray}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute bottom-2 left-1/2 w-[min(34vw,160px)] -translate-x-[58%] opacity-25 object-contain sm:bottom-0 sm:left-0 sm:w-[min(42vw,320px)] sm:translate-x-0 sm:-translate-x-2 sm:translate-y-6 sm:opacity-40 md:opacity-45"
      />

      <img
        src={chicksHatched}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute top-6 right-0 w-[min(32vw,200px)] opacity-25 object-contain hidden sm:block md:top-8 md:w-[min(38vw,280px)] md:opacity-40"
      />

      {enableVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={chickBackground}
          className="absolute inset-0 h-full w-full object-cover object-[center_32%] sm:object-center opacity-[0.22] mix-blend-soft-light sm:scale-105"
          onError={() => setUseFallback(true)}
        >
          {!useFallback && <source src={HERO_LOCAL_VIDEO} type="video/mp4" />}
          <source src={HERO_FALLBACK_VIDEO} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-stone-800/35 to-emerald-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/80 to-transparent sm:via-stone-50/75" />
    </div>
  );
};

export default HeroVideoBackground;
