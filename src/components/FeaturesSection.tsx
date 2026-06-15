import { features } from "@/lib/content";

const FeaturesSection = () => (
  <section className="section-padding bg-white" aria-labelledby="features-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-10 sm:mb-14">
        <p className="section-eyebrow">Why JB Incubators</p>
        <h2 id="features-heading" className="section-title">
          Built for Reliable Hatching
        </h2>
        <p className="section-subtitle mx-auto">
          Every JB incubator is engineered for stable temperature, proper airflow, and practical
          operation — whether you run a backyard farm or a growing hatchery.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group modern-card p-6 sm:p-7 border border-stone-200 hover:border-emerald-200 hover:shadow-md transition-all duration-200"
          >
            <div className="icon-circle mb-5">
              <feature.icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-medium text-stone-800 mb-2">{feature.title}</h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
