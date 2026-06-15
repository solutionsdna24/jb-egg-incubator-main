import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import StatsSection from "@/components/StatsSection";
import SeoIntroSection from "@/components/SeoIntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductPreviewSection from "@/components/ProductPreviewSection";
import Footer from "@/components/Footer";
import PromoBar from "@/components/PromoBar";
import PoultryContentSection from "@/components/PoultryContentSection";
import SeoHead from "@/components/SeoHead";
import { faqPageJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/content";
import chickBackground from "@/assets/chick-background.webp";

const HomeBelowFold = lazy(() => import("@/components/HomeBelowFold"));

const Index = () => (
  <div className="page-shell pt-0 relative">
    <div
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.07] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${chickBackground})` }}
      aria-hidden="true"
    />
    <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-emerald-50/90 via-white/95 to-stone-50" aria-hidden="true" />

    <SeoHead page="home" extraJsonLd={[faqPageJsonLd(faqs)]} />
    <Header />
    <PromoBar />
    <main id="home">
      <MainTitle />
      <StatsSection />
      <SeoIntroSection />
      <PoultryContentSection />
      <FeaturesSection />
      <ProductPreviewSection />
      <Suspense fallback={null}>
        <HomeBelowFold />
      </Suspense>
      <Footer />
    </main>
  </div>
);

export default Index;
