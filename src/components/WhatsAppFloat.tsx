import { MessageCircle } from "lucide-react";
import { whatsAppUrl } from "@/lib/social";

const WhatsAppFloat = () => (
  <a
    href={whatsAppUrl()}
    title="Chat on WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float group fixed bottom-5 right-5 z-[9999] flex items-center gap-0 sm:gap-2"
    aria-label="Chat on WhatsApp"
  >
    <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white border border-stone-200 px-3 py-2 text-sm font-medium text-stone-700 shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
      <MessageCircle className="h-4 w-4 text-emerald-600" aria-hidden="true" />
      Chat with us
    </span>

    <span className="relative flex h-14 w-14 items-center justify-center">
      <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping-slow" aria-hidden="true" />
      <span className="absolute inset-0 rounded-full bg-emerald-400/25 animate-pulse-ring" aria-hidden="true" />
      <img
        src="/whatsapp.png"
        alt="Chat with JB Egg Incubator on WhatsApp"
        className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg ring-2 ring-white group-hover:scale-110 transition-transform duration-300"
        width={56}
        height={56}
        loading="lazy"
        decoding="async"
      />
    </span>
  </a>
);

export default WhatsAppFloat;
