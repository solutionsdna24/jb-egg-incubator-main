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
          <h1 className="page-hero-title">Egg Hatching Machine Price & Commercial Incubators</h1>
          <p className="page-hero-subtitle">
            Compare automatic egg incubator machines from a leading poultry incubator supplier in India.
            JBW100, JBST100 & JBI80M — clear egg hatching machine price, features & pan-India delivery.
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
