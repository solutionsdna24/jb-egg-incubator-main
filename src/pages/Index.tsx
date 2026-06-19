import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import StatsSection from "@/components/StatsSection";
import SeoIntroSection from "@/components/SeoIntroSection";
import LocalAreasSection from "@/components/LocalAreasSection";
import HomeDiscoverLinks from "@/components/HomeDiscoverLinks";
import FeaturesSection from "@/components/FeaturesSection";
import ProductPreviewSection from "@/components/ProductPreviewSection";
import InternalLinksSection from "@/components/InternalLinksSection";
import Footer from "@/components/Footer";
import PromoBar from "@/components/PromoBar";
import PoultryContentSection from "@/components/PoultryContentSection";
import SeoHead from "@/components/SeoHead";
import { faqPageJsonLd, localBusinessJsonLd, localAreasItemListJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/content";

const HomeBelowFold = lazy(() => import("@/components/HomeBelowFold"));

const Index = () => (
  <div className="page-shell pt-0 relative">
    <SeoHead
      page="home"
      includeWebsiteSchema
      extraJsonLd={[faqPageJsonLd(faqs), localBusinessJsonLd(), localAreasItemListJsonLd()]}
    />
    <Header />
    <PromoBar />
    <main id="home">
      <MainTitle />
      <StatsSection />
      <LocalAreasSection />
      <HomeDiscoverLinks />
      <SeoIntroSection />
      <PoultryContentSection />
      <FeaturesSection />
      <ProductPreviewSection />
      <InternalLinksSection />
      <Suspense fallback={null}>
        <HomeBelowFold />
      </Suspense>
      <Footer />
    </main>
  </div>
);

export default Index;
