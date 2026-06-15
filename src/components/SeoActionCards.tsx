import { Link } from "react-router-dom";
import { Download, Play, Calculator, MessageCircle } from "lucide-react";
import { ROUTES } from "@/lib/routes";

const actions = [
  {
    icon: Download,
    title: "Download Free Hatching Guide",
    text: "21-day process, temperature chart & humidity tips for chicken eggs.",
    to: ROUTES.hatchingGuide,
    cta: "Get Free Guide",
    color: "bg-emerald-600 hover:bg-emerald-700 text-white",
  },
  {
    icon: Play,
    title: "Watch Customer Testimonials",
    text: "Real farmers share 85–90% hatch results on YouTube.",
    to: "/#videos",
    cta: "Watch Videos",
    color: "bg-red-600 hover:bg-red-700 text-white",
  },
  {
    icon: Calculator,
    title: "Calculate Incubation Capacity",
    text: "Find the right 100 egg or fully automatic model for your farm.",
    to: ROUTES.calculator,
    cta: "Use Calculator",
    color: "bg-slate-800 hover:bg-slate-900 text-white",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Consultation",
    text: "Free model advice from our Bhandara team — Marathi & English.",
    to: "https://wa.me/918767189437",
    external: true,
    cta: "Chat on WhatsApp",
    color: "bg-green-600 hover:bg-green-700 text-white",
  },
];

const SeoActionCards = () => (
  <section className="section-padding bg-stone-50 border-y border-stone-200" aria-labelledby="seo-actions-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-10">
        <p className="section-eyebrow">Free Resources</p>
        <h2 id="seo-actions-heading" className="section-title">
          Guides, Tools &amp; Support for Poultry Farmers
        </h2>
        <p className="section-subtitle mx-auto">
          Download training content, watch egg incubator testimonials, and get expert help choosing
          your automatic egg incubator or egg hatching machine.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map(({ icon: Icon, title, text, to, cta, color, external }) =>
          external ? (
            <a
              key={title}
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border-2 border-stone-200 bg-white p-6 flex flex-col hover:border-emerald-300 transition-colors"
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl mb-4 ${color}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">{title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4 flex-1">{text}</p>
              <span className={`inline-flex justify-center items-center rounded-lg px-4 py-2.5 text-sm font-semibold ${color}`}>
                {cta}
              </span>
            </a>
          ) : (
            <Link
              key={title}
              to={to}
              className="rounded-2xl border-2 border-stone-200 bg-white p-6 flex flex-col hover:border-emerald-300 transition-colors"
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl mb-4 ${color}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">{title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4 flex-1">{text}</p>
              <span className={`inline-flex justify-center items-center rounded-lg px-4 py-2.5 text-sm font-semibold ${color}`}>
                {cta}
              </span>
            </Link>
          ),
        )}
      </div>
    </div>
  </section>
);

export default SeoActionCards;
