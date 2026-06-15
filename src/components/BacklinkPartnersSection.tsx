import { directoryListings } from "@/lib/onlinePlatforms";
import { ExternalLink } from "lucide-react";
import HeroOnlinePlatforms from "@/components/HeroOnlinePlatforms";

const BacklinkPartnersSection = () => (
  <section className="section-padding-sm bg-stone-50 border-t border-stone-200" aria-labelledby="directories-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <HeroOnlinePlatforms variant="section" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {directoryListings.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target={item.url.startsWith("http") ? "_blank" : undefined}
            rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-4 hover:border-emerald-300 transition-colors"
          >
            <ExternalLink className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-bold text-stone-900">{item.name}</h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BacklinkPartnersSection;
