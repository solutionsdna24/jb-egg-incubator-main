import chickBackground from "@/assets/chick-background.webp";
import chicksHatched from "@/assets/chicks-hatched.webp";
import { HERO_FALLBACK_VIDEO, HERO_LOCAL_VIDEO } from "@/lib/media";
import { useEffect, useRef, useState } from "react";

const HeroVideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enableVideo, setEnableVideo] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (prefersReduced || !isDesktop) return;

    const timer = window.setTimeout(() => setEnableVideo(true), 2000);
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
      {/* Main chicken / chick hatch photo */}
      <img
        src={chickBackground}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-center scale-105"
      />

      {/* Extra chick accents on wide screens */}
      <img
        src={chicksHatched}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute bottom-8 left-0 w-[min(38vw,280px)] opacity-55 object-contain drop-shadow-lg hidden md:block"
      />
      <img
        src={chicksHatched}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute top-12 right-0 w-[min(32vw,240px)] opacity-50 object-contain drop-shadow-md hidden lg:block scale-x-[-1]"
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
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-soft-light"
          onError={() => setUseFallback(true)}
        >
          {!useFallback && <source src={HERO_LOCAL_VIDEO} type="video/mp4" />}
          <source src={HERO_FALLBACK_VIDEO} type="video/mp4" />
        </video>
      )}

      {/* Light green tint — keeps chickens visible 
      <div className="absolute inset-0 bg-emerald-900/25" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/35 via-emerald-600/20 to-green-800/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(6,78,59,0.35)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-transparent" />*/}
    </div>
  );
};

export default HeroVideoBackground;
