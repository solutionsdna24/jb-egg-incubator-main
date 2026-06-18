import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { LOCAL_SERVICE_AREAS } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

const LocalAreasSection = () => (
  <section
    id="egg-incubator-vidarbha-nagpur"
    className="section-padding bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white"
    aria-labelledby="local-areas-heading"
  >
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-emerald-200 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
          Local Manufacturer · Vidarbha
        </p>
        <h2 id="local-areas-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Egg Incubator Vidarbha, Nagpur &amp; Maharashtra
        </h2>
        <p className="text-emerald-100 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          JB is an <strong className="text-white">egg incubator manufacturer in Vidarbha</strong> with factory at
          Lakhandur, Bhandara — serving <strong className="text-white">Nagpur</strong>, all Vidarbha districts, and
          statewide <strong className="text-white">Maharashtra</strong>. Factory-direct prices, Marathi support, pan-India
          delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
        {LOCAL_SERVICE_AREAS.map((area) => (
          <article
            key={area.path}
            className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 hover:bg-white/15 transition-colors flex flex-col"
          >
            <div className="flex items-center gap-2 text-emerald-200 mb-3">
              <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wide">{area.name}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{area.headline}</h3>
            <p className="text-emerald-100 text-sm leading-relaxed mb-5 flex-1">{area.blurb}</p>
            <Link
              to={area.path}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/20 hover:bg-white/30 rounded-xl px-4 py-2.5 transition-colors w-fit"
            >
              Explore {area.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>

      <div className="rounded-2xl bg-white text-stone-900 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="max-w-2xl">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            Searching &ldquo;egg incubator Vidarbha&rdquo;, &ldquo;Nagpur&rdquo;, or &ldquo;Maharashtra&rdquo;?
          </h3>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            You found the manufacturer — not a reseller. JB builds every incubator in Bhandara, Vidarbha since 2022.
            Models from ₹2,700 to commercial 816+272 combine incubators.{" "}
            <strong className="text-stone-800">1,000+ farmers</strong> ·{" "}
            <strong className="text-stone-800">85%+ hatch rates</strong> · warranty included.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href="tel:+918767189437"
            className="btn-accent text-center text-sm gap-2"
          >
            <Phone className="h-4 w-4" />
            Call +91 8767189437
          </a>
          <Link to={ROUTES.order} className="btn-primary text-center text-sm py-3">
            Get Price Quote
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default LocalAreasSection;
