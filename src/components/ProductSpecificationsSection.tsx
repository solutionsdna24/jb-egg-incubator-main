import { Link } from "react-router-dom";
import { productSpecifications } from "@/lib/specifications";
import { ROUTES } from "@/lib/routes";

const ProductSpecificationsSection = () => (
  <section className="section-padding bg-white" aria-labelledby="specs-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-10">
        <p className="section-eyebrow">Technical Specs</p>
        <h2 id="specs-heading" className="section-title">
          Detailed Egg Incubator Specifications
        </h2>
        <p className="section-subtitle mx-auto">
          Compare capacity, automation, power, humidity, warranty, and batch output for every JB model —
          from 100-egg starters to 816+272 commercial combine incubators.
        </p>
      </div>
      <div className="space-y-8">
        {productSpecifications.map((spec) => (
          <article
            key={spec.model}
            className="rounded-2xl border-2 border-stone-200 overflow-hidden"
          >
            <div className="bg-emerald-700 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold">{spec.model} — {spec.type}</h3>
                <p className="text-emerald-100 text-sm">{spec.capacity} · {spec.idealFor}</p>
              </div>
              <Link
                to={ROUTES.product(spec.slug)}
                className="text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-center"
              >
                View {spec.model} →
              </Link>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Body Material", value: spec.body },
                { label: "Dimensions", value: spec.dimensions },
                { label: "Weight", value: spec.weight },
                { label: "Power", value: spec.power },
                { label: "Voltage", value: spec.voltage },
                { label: "Temperature", value: spec.temperatureRange },
                { label: "Humidity", value: spec.humidityRange },
                { label: "Egg Turning", value: spec.turning },
                { label: "Warranty", value: spec.warranty },
              ].map(({ label, value }) => (
                <div key={label} className="border-b border-stone-100 pb-2">
                  <dt className="text-stone-500 font-medium">{label}</dt>
                  <dd className="text-stone-900 font-semibold mt-0.5">{value}</dd>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProductSpecificationsSection;
