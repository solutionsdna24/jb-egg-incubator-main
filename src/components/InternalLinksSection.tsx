import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { internalLinkGroups } from "@/lib/internalLinks";

const InternalLinksSection = () => (
  <section className="section-padding bg-white border-t border-stone-200" aria-labelledby="internal-links-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-10">
        <p className="section-eyebrow">Explore JB</p>
        <h2 id="internal-links-heading" className="section-title">
          Egg Incubator Resources &amp; Guides
        </h2>
        <p className="section-subtitle mx-auto">
          Internal links to products, training, about JB, and regional egg incubator pages across
          Maharashtra and India.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {internalLinkGroups.map((group) => (
          <nav key={group.title} aria-label={group.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 mb-4">{group.title}</h3>
            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-start gap-2 text-stone-800 hover:text-emerald-700 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    <span>
                      <span className="font-semibold text-sm block">{link.label}</span>
                      {link.description && (
                        <span className="text-xs text-stone-600">{link.description}</span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </div>
  </section>
);

export default InternalLinksSection;
