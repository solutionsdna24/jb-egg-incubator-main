import { journeyMilestones, BRAND_FOUNDED_YEAR } from "@/lib/about";

const JourneyTimeline = () => (
  <section id="our-journey-since-2022" className="section-padding bg-white" aria-labelledby="journey-heading">
    <div className="container mx-auto max-w-4xl px-4">
      <div className="text-center mb-10">
        <p className="section-eyebrow">Our Journey</p>
        <h2 id="journey-heading" className="section-title">
          Our Journey Since {BRAND_FOUNDED_YEAR}
        </h2>
        <p className="section-subtitle mx-auto">
          From a Vidarbha workshop to a trusted egg incubator supplier India wide — the JB story year by year.
        </p>
      </div>
      <ol className="relative border-l-2 border-emerald-200 ml-4 space-y-8">
        {journeyMilestones.map((item) => (
          <li key={item.year} className="relative pl-8">
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-emerald-600 ring-4 ring-emerald-100" aria-hidden="true" />
            <time className="text-sm font-bold text-emerald-700">{item.year}</time>
            <h3 className="text-lg font-bold text-stone-900 mt-1">{item.title}</h3>
            <p className="text-stone-600 leading-relaxed mt-1">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default JourneyTimeline;
