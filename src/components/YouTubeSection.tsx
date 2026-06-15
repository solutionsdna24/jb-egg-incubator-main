import { useState } from "react";
import { Play, Youtube, ExternalLink } from "lucide-react";
import YouTubeModal from "@/components/YouTubeModal";
import { SOCIAL_LINKS } from "@/lib/social";
import { CHANNEL_VIDEOS, FEATURED_VIDEO_ID, youtubeThumbnail, youtubeWatchUrl } from "@/lib/youtube";

const YouTubeSection = () => {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(FEATURED_VIDEO_ID);
  const [activeTitle, setActiveTitle] = useState(CHANNEL_VIDEOS[0].title);

  const openVideo = (id: string, title: string) => {
    setActiveVideo(id);
    setActiveTitle(title);
    setOpen(true);
  };

  const featured = CHANNEL_VIDEOS[0];
  const moreVideos = CHANNEL_VIDEOS.slice(1);

  return (
    <section
      id="videos"
      className="section-padding px-4 bg-white border-y border-stone-200"
      aria-labelledby="youtube-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-10">
          <p className="section-eyebrow">@jbeggincubator on YouTube</p>
          <h2 id="youtube-heading" className="section-title max-w-2xl">
            Watch Real Farmers Hatch with JB
          </h2>
          <p className="section-subtitle mx-auto mt-3 text-base sm:text-lg leading-relaxed">
            See our incubators working on real poultry farms — 50 to 100 egg capacity, happy
            customers, and up to 90% hatch results. No guesswork. Watch before you buy.
          </p>
        </div>

        {/* Featured video */}
        <div className="max-w-4xl mx-auto mb-8">
          <button
            type="button"
            onClick={() => openVideo(featured.id, featured.title)}
            className="group relative w-full overflow-hidden rounded-2xl border-2 border-stone-200 bg-stone-900 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label={`Play: ${featured.title}`}
          >
            <img
              src={youtubeThumbnail(featured.id, "max")}
              alt={`YouTube thumbnail: ${featured.title}`}
              className="aspect-video w-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                (e.target as HTMLImageElement).src = youtubeThumbnail(featured.id, "hq");
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-xl group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 fill-white ml-1" aria-hidden="true" />
              </span>
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-left">
              <span className="inline-block rounded-full bg-red-600 text-white text-xs font-bold px-3 py-1 mb-2">
                Featured · 90% Hatch Results
              </span>
              <p className="text-white font-bold text-base sm:text-lg leading-snug">{featured.title}</p>
            </div>
          </button>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {moreVideos.map((video) => (
            <article
              key={video.id}
              className="group text-left rounded-xl border-2 border-stone-200 bg-white overflow-hidden hover:border-emerald-400 hover:shadow-lg transition-all"
            >
              <button
                type="button"
                onClick={() => openVideo(video.id, video.title)}
                className="relative block w-full aspect-video overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label={`Play: ${video.title}`}
              >
                <img
                  src={youtubeThumbnail(video.id)}
                  alt={`YouTube thumbnail: ${video.title}`}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-stone-900/25 group-hover:bg-stone-900/15 transition-colors">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-md">
                    <Play className="h-5 w-5 fill-white ml-0.5" aria-hidden="true" />
                  </span>
                </span>
              </button>
              <div className="p-4">
                <p className="text-sm font-semibold text-stone-800 leading-snug line-clamp-2 group-hover:text-emerald-700 transition-colors mb-2">
                  {video.title}
                </p>
                <a
                  href={youtubeWatchUrl(video.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-red-600 hover:underline"
                >
                  Open on YouTube ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => openVideo(featured.id, featured.title)}
            className="btn-accent gap-2 px-8"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Watch All JB Videos
          </button>
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold text-stone-700 hover:text-red-600 transition-colors"
          >
            <Youtube className="h-5 w-5 text-red-600" aria-hidden="true" />
            Subscribe @jbeggincubator
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <YouTubeModal
        open={open}
        onOpenChange={setOpen}
        videoId={activeVideo}
        title={activeTitle}
      />
    </section>
  );
};

export default YouTubeSection;
