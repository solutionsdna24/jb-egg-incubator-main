import Header from "@/components/Header";
import CompanyStorySection from "@/components/CompanyStorySection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import GallerySection from "@/components/GallerySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

const Details = () => (
  <div className="page-shell">
    <SeoHead page="details" />
    <Header />
    <main>
      <section className="page-hero bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="section-eyebrow">About JB Incubator</p>
          <h1 className="page-hero-title">Egg Incubator Manufacturer Maharashtra &amp; India</h1>
          <p className="page-hero-subtitle">
            JB Egg Incubator designs and builds egg hatching machines at our Bhandara, Vidarbha factory —
            a poultry incubator supplier trusted by farmers across Nagpur, Maharashtra, and India.
          </p>
        </div>
      </section>
      <CompanyStorySection />
      <FeaturesSection />
      <ComparisonSection />
      <GallerySection />
      <HowItWorksSection />
      <FaqSection showContactLink={false} />
      <CtaSection />
    </main>
    <Footer />
  </div>
);

export default Details;
