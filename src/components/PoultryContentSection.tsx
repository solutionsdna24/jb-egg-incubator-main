import { Egg, Sprout, Tractor } from "lucide-react";
import { Link } from "react-router-dom";
import { poultryFarmBlocks, eggFacts } from "@/lib/content";
import eggsTray from "@/assets/eggs-tray.webp";

const icons = [Egg, Sprout, Tractor];

const PoultryContentSection = () => (
  <section
    id="poultry-farm"
    className="section-padding px-4 bg-stone-100 border-y border-stone-200"
    aria-labelledby="poultry-heading"
  >
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <p className="section-eyebrow">Poultry & Eggs</p>
        <h2 id="poultry-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
          Poultry Incubator Supplier — Farm & Hatchery Guides
        </h2>
        <p className="text-base sm:text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">
          As an egg incubator manufacturer in India, JB helps farmers turn eggs into income with
          affordable automatic egg incubator machines, clear egg hatching machine price, and support
          in Marathi & English.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-5">
          {poultryFarmBlocks.map((block, i) => {
            const Icon = icons[i];
            return (
              <article
                key={block.title}
                className="flex gap-4 rounded-2xl bg-white border-2 border-stone-200 p-5 sm:p-6 hover:border-emerald-200 transition-colors"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                  <Icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{block.title}</h3>
                  <p className="text-stone-700 text-base leading-relaxed">{block.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="rounded-2xl overflow-hidden border-2 border-stone-200 bg-white shadow-md">
          <img
            src={eggsTray}
            alt="Fresh eggs ready for incubation in JB incubator"
            className="w-full h-48 sm:h-56 object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="p-6 sm:p-8">
            <h3 className="text-xl font-bold text-stone-900 mb-4">Quick Egg & Hatch Facts</h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {eggFacts.map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-800 mb-1">
                    {label}
                  </dt>
                  <dd className="text-lg font-bold text-stone-900">{value}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/products"
              className="mt-6 inline-flex w-full items-center justify-center btn-primary py-3"
            >
              Compare JB Models & Prices
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PoultryContentSection;
