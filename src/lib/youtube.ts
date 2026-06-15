export interface ChannelVideo {
  id: string;
  title: string;
}

/** Videos from https://www.youtube.com/@jbeggincubator */
export const CHANNEL_VIDEOS: ChannelVideo[] = [
  {
    id: "-sBEKnBsejs",
    title: "Best Incubator for Chicken — Customers Happy With 90% Results",
  },
  {
    id: "A292cgVCOwI",
    title: "50 Eggs Capacity Incubator — JB Egg Incubator Demo",
  },
  {
    id: "Z7sYynqchVk",
    title: "100 Eggs Capacity Incubator & Hatching Machine",
  },
  {
    id: "CBB4gsWhugA",
    title: "100 Eggs Incubator Hatching Machine — Full Demo",
  },
];

export const FEATURED_VIDEO_ID = CHANNEL_VIDEOS[0].id;

export const youtubeThumbnail = (videoId: string, quality: "hq" | "max" = "hq") =>
  quality === "max"
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

export const youtubeWatchUrl = (videoId: string) =>
  `https://www.youtube.com/watch?v=${videoId}`;

export const youtubeEmbedSrc = (videoId: string, autoplay = false) => {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    ...(autoplay ? { autoplay: "1" } : {}),
  });
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};
