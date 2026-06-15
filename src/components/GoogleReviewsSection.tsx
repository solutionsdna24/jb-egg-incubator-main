import { Star, ExternalLink } from "lucide-react";
import { googleReviews, GOOGLE_REVIEWS_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/reviews";

const StarRow = ({ rating }: { rating: number }) => (
  <span className="inline-flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i <= rating ? "fill-amber-400 text-amber-400" : "fill-stone-200 text-stone-200"}`}
        aria-hidden="true"
      />
    ))}
  </span>
);

const GoogleReviewsSection = () => (
  <section
    id="reviews"
    className="section-padding-sm px-4 bg-white border-y border-stone-200"
    aria-labelledby="reviews-heading"
  >
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-stone-200 text-lg font-bold text-blue-600 shadow-sm" aria-hidden="true">
              G
            </span>
            <p className="section-eyebrow mb-0">Google Reviews</p>
          </div>
          <h2 id="reviews-heading" className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Rated {GOOGLE_RATING} by Happy Farmers
          </h2>
          <p className="text-base text-stone-600 mt-2 max-w-xl leading-relaxed">
            Real feedback from poultry farmers across India who bought JB Egg Incubators.
          </p>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border-2 border-stone-200 bg-stone-50 px-6 py-4 shrink-0">
          <p className="text-4xl font-bold text-stone-900">{GOOGLE_RATING}</p>
          <div>
            <StarRow rating={5} />
            <p className="text-sm font-medium text-stone-600 mt-1">{GOOGLE_REVIEW_COUNT} Google reviews</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {googleReviews.map((review) => (
          <article
            key={review.name}
            className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                {review.name.charAt(0)}
              </div>
              <StarRow rating={review.rating} />
            </div>
            <p className="font-semibold text-stone-900 text-sm">{review.name}</p>
            <p className="text-xs text-stone-500 mb-3">{review.date}</p>
            <p className="text-sm text-stone-700 leading-relaxed line-clamp-4">{review.text}</p>
          </article>
        ))}
      </div>

      <div className="text-center">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 transition-colors shadow-sm"
        >
          Read All Google Reviews
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default GoogleReviewsSection;
