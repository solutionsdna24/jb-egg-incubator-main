import { directoryListings } from "@/lib/about";
import { ExternalLink } from "lucide-react";

const BacklinkPartnersSection = () => (
  <section className="section-padding-sm bg-stone-50 border-t border-stone-200" aria-labelledby="directories-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-8">
        <p className="section-eyebrow">Find JB Online</p>
        <h2 id="directories-heading" className="text-xl sm:text-2xl font-bold text-stone-900">
          Trusted Listings &amp; Backlink Partners
        </h2>
        <p className="text-stone-600 text-sm max-w-2xl mx-auto mt-2">
          JB Egg Incubator is listed and recommended on leading directories. Search egg incubator
          Maharashtra, egg incubator Bhandara, or egg incubator supplier India on these platforms.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {directoryListings.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
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
