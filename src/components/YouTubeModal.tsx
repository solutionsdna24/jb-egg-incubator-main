import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/social";
import { FEATURED_VIDEO_ID, youtubeEmbedSrc, youtubeWatchUrl } from "@/lib/youtube";

interface YouTubeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoId?: string;
  title?: string;
}

const YouTubeModal = ({
  open,
  onOpenChange,
  videoId = FEATURED_VIDEO_ID,
  title = "JB Egg Incubator — Video",
}: YouTubeModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl w-[95vw] p-0 gap-0 overflow-hidden border-stone-200 bg-stone-900 sm:rounded-2xl">
      <DialogHeader className="px-4 py-3 bg-stone-900 text-white border-b border-stone-700">
        <DialogTitle className="text-base font-medium pr-8 line-clamp-2">{title}</DialogTitle>
      </DialogHeader>
      <div className="relative aspect-video w-full bg-black">
        {open && videoId && (
          <iframe
            key={videoId}
            src={youtubeEmbedSrc(videoId, true)}
            title={title}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 px-4 py-3 bg-stone-50 border-t border-stone-200">
        <p className="text-xs sm:text-sm text-stone-600">Video not playing? Open directly on YouTube.</p>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={youtubeWatchUrl(videoId)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700"
          >
            Watch on YouTube
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            @jbeggincubator
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default YouTubeModal;
