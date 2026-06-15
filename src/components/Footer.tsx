import { Phone, Mail, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import SocialLinks from "@/components/SocialLinks";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_URL } from "@/lib/reviews";
import { ROUTES, PRODUCT_SLUGS } from "@/lib/routes";

const quickLinks = [
  { label: "Home", to: ROUTES.home },
  { label: "About JB", to: ROUTES.about },
  { label: "Products", to: ROUTES.products },
  { label: "Poultry Training", to: ROUTES.training },
  { label: "Free Hatching Guide", to: ROUTES.hatchingGuide },
  { label: "Capacity Calculator", to: ROUTES.calculator },
  { label: "Videos", to: "/#videos" },
  { label: "Blog", to: ROUTES.blog },
  { label: "Order Enquiry", to: ROUTES.order },
  { label: "Contact", to: ROUTES.contact },
];

const productLinks = [
  { label: "JBW100 — 100 Egg Incubator", to: ROUTES.product(PRODUCT_SLUGS.JBW100) },
  { label: "JBST100 — Automatic Egg Incubator", to: ROUTES.product(PRODUCT_SLUGS.JBST100) },
  { label: "JBI80M — Fully Automatic", to: ROUTES.product(PRODUCT_SLUGS.JBI80M) },
];

const Footer = () => (
  <footer className="bg-stone-100 border-t border-stone-200">
    <div className="border-b border-stone-200 bg-white">
      <div className="container mx-auto px-4 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <BrandLogo size="footer" linked={false} align="left" />
          <div className="flex flex-col sm:items-end gap-3">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-stone-50 hover:bg-emerald-50 px-4 py-2.5 transition-colors"
            >
              <span className="inline-flex gap-0.5" role="img" aria-label={`${GOOGLE_RATING} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </span>
              <span className="text-sm font-semibold text-stone-800">
                {GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Google Reviews
              </span>
            </a>
            <SocialLinks size="sm" />
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-10 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-600 mb-4">About JB</h3>
          <p className="text-stone-700 text-base leading-relaxed mb-4">
            Egg incubator manufacturer in Maharashtra since 2022. Automatic egg incubator, 100 egg
            incubator &amp; egg hatching machine supplier — Bhandara, Vidarbha.
          </p>
          <Link to={ROUTES.about} className="text-emerald-800 font-semibold hover:underline text-sm">
            Our story since 2022 →
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-600 mb-4">Products</h3>
          <ul className="space-y-2.5 text-base">
            {productLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-stone-700 hover:text-emerald-700 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-600 mb-4">Contact</h3>
          <div className="space-y-3 text-base">
            <a href="tel:+918767189437" className="flex items-center gap-3 text-stone-700 hover:text-emerald-700 transition-colors">
              <Phone className="h-5 w-5 text-emerald-600 shrink-0" aria-hidden="true" />
              +91 8767189437
            </a>
            <a href="mailto:jbincubator5@gmail.com" className="flex items-center gap-3 text-stone-700 hover:text-emerald-700 transition-colors">
              <Mail className="h-5 w-5 text-emerald-600 shrink-0" aria-hidden="true" />
              jbincubator5@gmail.com
            </a>
            <div className="flex items-start gap-3 text-stone-700">
              <MapPin className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              Lakhandur, Bhandara, Maharashtra 441803
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-600 mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-base">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-stone-700 hover:text-emerald-700 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-stone-600">
        <p>© {new Date().getFullYear()} JB Egg Incubator. All rights reserved.</p>
        <p>Made in Bhandara, Vidarbha · Pan-India Delivery · Since 2022</p>
      </div>
    </div>
  </footer>
);

export default Footer;
