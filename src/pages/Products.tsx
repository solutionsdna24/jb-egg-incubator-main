import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import ComparisonSection from "@/components/ComparisonSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

import ProductSpecificationsSection from "@/components/ProductSpecificationsSection";
import InternalLinksSection from "@/components/InternalLinksSection";
import SeoActionCards from "@/components/SeoActionCards";

const Products = () => (
  <div className="page-shell">
    <SeoHead page="products" />
    <Header />
    <main>
      <section className="page-hero bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="section-eyebrow">Product Catalogue</p>
          <h1 className="page-hero-title">Egg Hatching Machine Maharashtra &amp; India — JB Models</h1>
          <p className="page-hero-subtitle">
            Compare 100 egg incubator, 120 egg layout &amp; fully automatic egg incubator specs.
            Egg incubator manufacturer JB — factory in Bhandara, Vidarbha.
          </p>
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
