import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { getProductPageContent, BLOG_SLUG_TITLES, getRelatedProductLinks } from "@/lib/productPageContent";
import { googleReviews, GOOGLE_REVIEWS_URL, GOOGLE_RATING } from "@/lib/reviews";
import { ROUTES } from "@/lib/routes";
import { landingPagesByPath } from "@/lib/landingPages";
import ProductImage from "@/components/ProductImage";
import interiorIncubator from "@/assets/interior-incubator.webp";
import type { ProductSpecification } from "@/lib/specifications";

interface ProductDetailRichContentProps {
  spec: ProductSpecification;
  secondaryImage?: string;
}

const ProductDetailRichContent = ({ spec, secondaryImage = interiorIncubator }: ProductDetailRichContentProps) => {
  const content = getProductPageContent(spec.model);
  if (!content) return null;

  const relatedProducts = getRelatedProductLinks(spec.model);

  return (
    <>
      <section className="section-padding bg-white border-t border-stone-100">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
            About {spec.model} — {spec.type}
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed text-base sm:text-lg">
            {content.intro.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ProductImage
              src={secondaryImage}
              alt={`${spec.model} poultry egg incubator interior — egg trays and humidity channels`}
              heightClass="h-64 sm:h-80"
              className="rounded-2xl border border-stone-200 shadow-sm"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Inside the {spec.model} Egg Incubator Machine
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Every {spec.model} is calibrated at our Bhandara factory for stable heat distribution across the
                chamber — essential for chicken egg incubator and poultry egg incubator success in Maharashtra summer.
              </p>
              <p className="text-stone-700 leading-relaxed">
                {spec.idealFor}. Contact JB for a live demo at our Lakhandur factory near Nagpur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {content.sections.map((section) => (
        <section key={section.heading} className="section-padding bg-white even:bg-stone-50/50">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">{section.heading}</h2>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              {section.body.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-emerald-50/40 border-y border-emerald-100">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="section-title mb-6">Customer Reviews — {spec.model}</h2>
          <p className="text-stone-600 mb-6">
            JB Egg Incubator holds a{" "}
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold hover:underline">
              {GOOGLE_RATING}★ Google rating
            </a>{" "}
            from poultry farmers across Maharashtra and India.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {googleReviews.slice(0, 4).map((review) => (
              <blockquote
                key={review.name}
                className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <div className="flex gap-0.5 mb-2" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-2">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-sm font-semibold text-stone-900">
                  {review.name}
                  <span className="font-normal text-stone-500"> · {review.date}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="section-title mb-6">Related Egg Incubator Models</h2>
          <p className="text-stone-600 mb-4">
            Compare other JB incubator sizes — from 100 eggs incubator starters to commercial hatchery incubator systems.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {relatedProducts.map((rel) => (
              <li key={rel.id}>
                <Link
                  to={rel.path}
                  className="group flex items-center gap-2 rounded-xl border border-stone-200 px-4 py-3 hover:border-emerald-400 hover:bg-emerald-50/50 transition-colors"
                >
                  <ArrowRight className="h-4 w-4 text-emerald-600 shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  <span className="font-semibold text-stone-900">{rel.id} — View specs &amp; price</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={ROUTES.products}
                className="group flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/50 px-4 py-3 hover:bg-emerald-50 transition-colors"
              >
                <ArrowRight className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <span className="font-semibold text-emerald-900">All 8 models — compare catalogue</span>
              </Link>
            </li>
          </ul>

          <h3 className="text-lg font-bold text-stone-900 mb-3">Regional &amp; Buying Guides</h3>
          <ul className="grid sm:grid-cols-2 gap-2 mb-8">
            {content.relatedLandingPaths.map((path) => {
              const page = landingPagesByPath[path];
              if (!page) return null;
              return (
                <li key={path}>
                  <Link to={path} className="text-emerald-800 font-semibold hover:underline text-sm">
                    {page.h1.split("—")[0].trim()} →
                  </Link>
                </li>
              );
            })}
          </ul>

          <h3 className="text-lg font-bold text-stone-900 mb-3">Helpful Blog Articles</h3>
          <ul className="space-y-2">
            {content.relatedBlogSlugs.map((slug) => (
              <li key={slug}>
                <Link
                  to={ROUTES.blogPost(slug)}
                  className="text-emerald-800 font-semibold hover:underline text-sm"
                >
                  {BLOG_SLUG_TITLES[slug] ?? slug} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="section-title text-center mb-8">
            {spec.model} — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-stone-200 bg-white p-5 group">
                <summary className="font-semibold text-stone-900 cursor-pointer list-none flex justify-between gap-4">
                  {faq.question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="text-stone-600 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailRichContent;

export const getProductFaqs = (model: string) => getProductPageContent(model)?.faqs ?? [];
