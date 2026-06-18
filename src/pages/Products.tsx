import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import ComparisonSection from "@/components/ComparisonSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { itemListJsonLd } from "@/lib/seo";
import { productSpecifications } from "@/lib/specifications";
import { ROUTES } from "@/lib/routes";

import ProductSpecificationsSection from "@/components/ProductSpecificationsSection";
import InternalLinksSection from "@/components/InternalLinksSection";
import SeoActionCards from "@/components/SeoActionCards";

const Products = () => (
  <div className="page-shell">
    <SeoHead
      page="products"
      includeWebsiteSchema
      extraJsonLd={[
        itemListJsonLd(
          productSpecifications.map((spec) => ({
            name: `${spec.model} — ${spec.type}`,
            path: ROUTES.product(spec.slug),
            description: `${spec.capacity}. ${spec.idealFor}.`,
          })),
        ),
      ]}
    />
    <Header />
    <main>
      <section className="page-hero bg-gradient-to-br from-emerald-50 via-white to-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="section-eyebrow">Product Catalogue</p>
          <h1 className="page-hero-title">Egg Incubator Models — Maharashtra &amp; India</h1>
          <p className="page-hero-subtitle">
            Compare 8 JB models: starter 100-egg units from ₹2,700 to commercial combine incubators
            up to 816+272 eggs. Filter by type, capacity, or price below.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              { label: "8 Models", sub: "Full range" },
              { label: "From ₹2,700", sub: "Starter price" },
              { label: "816+ Eggs", sub: "Max capacity" },
              { label: "Made in India", sub: "Bhandara factory" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white border border-slate-200 px-4 py-2.5 text-center min-w-[7rem] shadow-sm"
              >
                <p className="text-sm font-bold text-emerald-800">{stat.label}</p>
                <p className="text-xs text-slate-500">{stat.sub}</p>
              </div>
            ))}
          </div>
          <a
            href="#products"
            className="inline-flex items-center gap-2 mt-8 text-emerald-700 font-semibold text-sm hover:underline"
          >
            Browse &amp; filter models
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <ProductsSection />
      <ProductSpecificationsSection />
      <ComparisonSection />
      <SeoActionCards />
      <FaqSection />
      <InternalLinksSection />
      <CtaSection />
    </main>
    <Footer />
  </div>
);

export default Products;
