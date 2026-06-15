import { whyChoose } from "@/lib/content";

const WhyChooseSection = () => (
  <section className="section-padding bg-emerald-50/60" aria-labelledby="why-choose-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center mb-10 sm:mb-14">
        <p className="section-eyebrow">Our Advantage</p>
        <h2 id="why-choose-heading" className="section-title">
          Why Farmers Choose JB
        </h2>
        <p className="section-subtitle mx-auto">
          From affordable entry models to premium automatic units — JB delivers value, performance,
          and real support at every stage of your poultry journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {whyChoose.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl bg-white border border-stone-200 p-6 hover:border-emerald-200 hover:shadow-sm transition-all duration-200"
          >
            <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <item.icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-medium text-stone-800 mb-2">{item.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
