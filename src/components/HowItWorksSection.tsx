import { howItWorks } from "@/lib/content";
import { Link } from "react-router-dom";

const HowItWorksSection = () => (
  <section className="section-padding bg-white" aria-labelledby="how-it-works-heading">
    <div className="container mx-auto max-w-5xl px-4">
      <div className="text-center mb-10 sm:mb-14">
        <p className="section-eyebrow">Simple Process</p>
        <h2 id="how-it-works-heading" className="section-title">
          How to Order & Start Hatching
        </h2>
        <p className="section-subtitle mx-auto">
          Getting your JB Egg Incubator is easy. Follow these four steps from selection to your
          first successful hatch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {howItWorks.map((item, index) => (
          <article
            key={item.step}
            className="modern-card p-6 sm:p-7 border border-stone-200 bg-white relative overflow-hidden"
          >
            <span className="absolute top-4 right-4 text-5xl font-semibold text-stone-100 select-none" aria-hidden="true">
              {item.step}
            </span>
            <div className="relative">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-600 text-white text-sm font-medium mb-4">
                {index + 1}
              </span>
              <h3 className="text-lg sm:text-xl font-medium text-stone-800 mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/order-egg-incubator"
          className="btn-accent"
        >
          Start Your Order
        </Link>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
