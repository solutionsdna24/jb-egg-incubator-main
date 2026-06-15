import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import ComparisonSection from "@/components/ComparisonSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

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
            Compare egg hatching machine price in Maharashtra &amp; India. Automatic egg incubator JBW100,
            JBST100 &amp; JBI80M from poultry incubator supplier JB — factory in Bhandara, Vidarbha.
          </p>
        </div>
      </section>
      <ProductsSection />
      <ComparisonSection />
      <FaqSection />
      <CtaSection />
    </main>
    <Footer />
  </div>
);

export default Products;
