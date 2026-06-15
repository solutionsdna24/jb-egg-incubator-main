import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import CtaSection from "@/components/CtaSection";
import { ROUTES, PRODUCT_SLUGS } from "@/lib/routes";
import { Calculator } from "lucide-react";

type Recommendation = {
  model: string;
  slug: string;
  reason: string;
};

const recommend = (eggsPerBatch: number, hatchesPerMonth: number): Recommendation => {
  if (eggsPerBatch <= 80 && hatchesPerMonth <= 2) {
    return {
      model: "JBW100",
      slug: PRODUCT_SLUGS.JBW100,
      reason: "Best budget 100 egg incubator for beginners and seasonal hatching.",
    };
  }
  if (eggsPerBatch <= 100 && hatchesPerMonth <= 4) {
    return {
      model: "JBST100",
      slug: PRODUCT_SLUGS.JBST100,
      reason: "Semi-automatic egg incubator with digital humidity — ideal for repeat monthly hatches.",
    };
  }
  return {
    model: "JBI80M",
    slug: PRODUCT_SLUGS.JBI80M,
    reason: "Fully automatic egg incubator with auto turning for frequent commercial hatch cycles.",
  };
};

const IncubationCalculator = () => {
  const [eggs, setEggs] = useState(100);
  const [cycles, setCycles] = useState(2);
  const result = recommend(eggs, cycles);

  return (
    <div className="page-shell">
      <SeoHead page="calculator" />
      <Header />
      <main>
        <section className="page-hero bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <Calculator className="h-10 w-10 mx-auto mb-4 text-emerald-300" aria-hidden="true" />
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Incubation Capacity Calculator</h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Find the right 100 egg incubator, 120 egg layout, or fully automatic egg incubator for
              your poultry farm in Maharashtra or anywhere in India.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-lg px-4">
            <form className="rounded-2xl border-2 border-stone-200 p-6 sm:p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="eggs-per-batch" className="block text-sm font-semibold text-stone-800 mb-2">
                  Eggs per hatch batch
                </label>
                <input
                  id="eggs-per-batch"
                  type="range"
                  min={30}
                  max={120}
                  step={10}
                  value={eggs}
                  onChange={(e) => setEggs(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <p className="text-center text-2xl font-bold text-emerald-700 mt-2">{eggs} eggs</p>
              </div>
              <div>
                <label htmlFor="cycles-per-month" className="block text-sm font-semibold text-stone-800 mb-2">
                  Hatch cycles per month
                </label>
                <input
                  id="cycles-per-month"
                  type="range"
                  min={1}
                  max={8}
                  step={1}
                  value={cycles}
                  onChange={(e) => setCycles(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <p className="text-center text-2xl font-bold text-emerald-700 mt-2">{cycles} cycles/month</p>
              </div>
            </form>

            <div className="mt-8 rounded-2xl bg-emerald-50 border-2 border-emerald-200 p-6 text-center">
              <p className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">Recommended Model</p>
              <p className="text-3xl font-bold text-stone-900 mt-2">{result.model}</p>
              <p className="text-stone-600 mt-3 leading-relaxed">{result.reason}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <Link to={ROUTES.product(result.slug)} className="btn-accent">
                  View {result.model} Specs
                </Link>
                <Link to={ROUTES.order} className="btn-outline">
                  Get Price Quote
                </Link>
              </div>
            </div>

            <p className="text-center text-sm text-stone-500 mt-6">
              Not sure? <a href="https://wa.me/918767189437" className="text-emerald-700 font-semibold hover:underline">WhatsApp consultation</a> is free.
            </p>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default IncubationCalculator;
