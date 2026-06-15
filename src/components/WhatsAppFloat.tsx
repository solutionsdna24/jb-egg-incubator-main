import { whatsAppUrl } from "@/lib/social";

const WhatsAppFloat = () => (
  <a
    href={whatsAppUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float group fixed bottom-5 right-5 z-[9999] flex items-center gap-0 sm:gap-2"
    aria-label="Chat with JB Egg Incubator on WhatsApp"
  >
    <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white border border-stone-200 px-3 py-2 text-sm font-medium text-stone-800 shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
      Chat on WhatsApp
    </span>

    <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] shadow-lg ring-2 ring-white group-hover:scale-110 transition-transform duration-300">
      <span className="absolute inset-0 rounded-full bg-[#25D366]/50 animate-ping-slow" aria-hidden="true" />
      <img
        src="/whatsapp.png"
        alt=""
        width={36}
        height={36}
        className="relative h-9 w-9 object-contain"
        loading="lazy"
        decoding="async"
      />
    </span>
  </a>
);

export default WhatsAppFloat;
