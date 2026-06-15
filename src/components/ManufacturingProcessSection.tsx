import { manufacturingSteps } from "@/lib/about";
import { Factory } from "lucide-react";

const ManufacturingProcessSection = () => (
  <section id="manufacturing-process" className="section-padding bg-emerald-50/50" aria-labelledby="manufacturing-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-10">
        <p className="section-eyebrow">How We Build</p>
        <h2 id="manufacturing-heading" className="section-title">
          Manufacturing Process — Bhandara Factory
        </h2>
        <p className="section-subtitle mx-auto">
          Every automatic egg incubator and egg hatching machine is built and tested at our Lakhandur,
          Bhandara facility before dispatch across Maharashtra and India.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {manufacturingSteps.map((step) => (
          <article key={step.step} className="rounded-2xl border border-stone-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                <Factory className="h-5 w-5 text-emerald-700" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold text-emerald-700">{step.step}</span>
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">{step.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{step.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ManufacturingProcessSection;
