import chickBackground from "@/assets/chick-background.webp";
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
      <img
        src={chickBackground}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center scale-105"
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
          className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-soft-light"
          onError={() => setUseFallback(true)}
        >
         {/**  {!useFallback && <source src={HERO_LOCAL_VIDEO} type="video/mp4" />}
          <source src={HERO_FALLBACK_VIDEO} type="video/mp4" />*/}
        </video>
      )}

{/*  <div className="absolute inset-0 bg-emerald-950/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-emerald-800/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(6,78,59,0.45)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />*/}
    </div>
  );
};

export default HeroVideoBackground;
