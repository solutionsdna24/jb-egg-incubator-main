import { companyHighlights } from "@/lib/content";
import interiorIncubator from "@/assets/interior-incubator.webp";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

interface CompanyStorySectionProps {
  showImage?: boolean;
}

const CompanyStorySection = ({ showImage = true }: CompanyStorySectionProps) => (
  <section className="section-padding bg-white" aria-labelledby="company-story-heading">
    <div className="container mx-auto max-w-6xl px-4">
      <div className={`grid gap-10 lg:gap-14 items-center ${showImage ? "lg:grid-cols-2" : ""}`}>
        <div>
          <p className="section-eyebrow">Our Story</p>
          <h2 id="company-story-heading" className="section-title">
            Trusted Poultry Incubator Manufacturer
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            JB Egg Incubator is a Maharashtra-based manufacturer serving poultry farmers across
            India. We build incubators that balance affordability with dependable performance —
            because every hatch cycle matters to your livelihood.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            From backyard chicken keepers to commercial hatchery operators, our customers rely on
            JB for stable temperature control, practical daily operation, and responsive support
            before and after purchase.
          </p>

          <ul className="space-y-3 mb-8">
            {companyHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Link to="/products" className="btn-primary">
              View Products
            </Link>
            <Link to="/contact" className="btn-outline">
              Talk to Us
            </Link>
          </div>
        </div>

        {showImage && (
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-slate-100 rounded-3xl -z-10" aria-hidden="true" />
            <img
              src={interiorIncubator}
              alt="JB Egg Incubator interior setup with egg trays"
              className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]"
              loading="lazy"
              decoding="async"
              width={600}
              height={450}
            />
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 modern-card bg-white border border-slate-200 px-5 py-4 shadow-lg">
              <p className="text-2xl font-bold text-blue-700">85%+</p>
              <p className="text-sm text-slate-600">Reported Hatch Rate</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default CompanyStorySection;
