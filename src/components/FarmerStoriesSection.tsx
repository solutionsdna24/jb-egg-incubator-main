import { Quote, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { farmerStories } from "@/lib/content";
import chicksHatched from "@/assets/chicks-hatched.webp";

const FarmerStoriesSection = () => (
  <section
    id="farmers"
    className="section-padding px-4 bg-emerald-50/70"
    aria-labelledby="farmers-heading"
  >
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-12">
        <div>
          <p className="section-eyebrow text-left">Customer Stories</p>
          <h2 id="farmers-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Real Farmers. Real Hatch Results.
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-4">
            Over <strong className="text-emerald-700">1,000+ poultry farmers</strong> across India
            trust JB Egg Incubator for daily hatching — from village backyard farms to growing
            hatcheries in Maharashtra and beyond.
          </p>
          <p className="text-base text-stone-600 leading-relaxed">
            Our customers report <strong>85–90% hatch rates</strong> when they follow our simple
            setup guide. Watch their stories on YouTube, then order with confidence.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-200 shadow-lg">
          <img
            src={chicksHatched}
            alt="Healthy chicks hatched with JB Egg Incubator"
            className="w-full h-64 sm:h-80 object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent" />
          <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg">
            Healthy chicks. Happy farmers. JB quality.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {farmerStories.map((story) => (
          <article
            key={story.name}
            className="flex flex-col rounded-2xl bg-white border-2 border-stone-200 p-6 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all"
          >
            <Quote className="h-8 w-8 text-emerald-200 mb-3" aria-hidden="true" />
            <p className="text-stone-700 text-base leading-relaxed flex-1 mb-5">
              &ldquo;{story.quote}&rdquo;
            </p>
            <div className="border-t border-stone-100 pt-4">
              <p className="font-bold text-stone-900">{story.name}</p>
              <p className="flex items-center gap-1 text-sm text-stone-500 mt-1">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {story.location}
              </p>
              <div className="flex items-center justify-between mt-3 gap-2">
                <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700">
                  <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" aria-hidden="true" />
                  {story.result}
                </span>
                <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 px-2 py-1 rounded-full">
                  {story.model}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center mt-10">
        <Link to="/jb-egg-incubator-order" className="btn-accent text-base px-8 py-3.5">
          Join Happy JB Farmers — Order Today
        </Link>
      </p>
    </div>
  </section>
);

export default FarmerStoriesSection;
