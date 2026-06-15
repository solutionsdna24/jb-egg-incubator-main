import { FEATURED_VIDEO_ID, youtubeEmbedSrc } from "@/lib/youtube";

export const YOUTUBE_CHANNEL_URL = "https://youtube.com/@jbeggincubator";

export const SOCIAL_LINKS = {
  youtube: YOUTUBE_CHANNEL_URL,
  instagram: "https://www.instagram.com/jb_eggs_incubators?igsh=MWlrbWhleXRjb3BrMg==",
  facebook: "https://www.facebook.com/jbeggincubator",
} as const;

export const WHATSAPP_NUMBER = "918767189437";
export const WHATSAPP_MESSAGE =
  "Hi JB Egg Incubator Team, I want to order an egg incubator machine. Please share details.";

export const whatsAppUrl = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const youtubeEmbedUrl = (autoplay = false, videoId = FEATURED_VIDEO_ID) =>
  youtubeEmbedSrc(videoId, autoplay);

export const youtubeThumbnailUrl = (videoId = FEATURED_VIDEO_ID) =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
