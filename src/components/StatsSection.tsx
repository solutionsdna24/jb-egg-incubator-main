import { stats } from "@/lib/content";

const StatsSection = () => (
  <section className="relative z-20 px-4 -mt-6 sm:-mt-10 pb-2" aria-label="Key statistics">
    <div className="container mx-auto max-w-5xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl text-center py-5 sm:py-6 px-3 sm:px-4 bg-white border-2 border-stone-200 shadow-lg"
          >
            <p className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-1">{stat.value}</p>
            <p className="text-xs sm:text-sm text-stone-700 font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
