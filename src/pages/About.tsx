import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import CompanyStorySection from "@/components/CompanyStorySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ManufacturingProcessSection from "@/components/ManufacturingProcessSection";
import FarmerStoriesSection from "@/components/FarmerStoriesSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import TeamSection from "@/components/TeamSection";
import ProductSpecificationsSection from "@/components/ProductSpecificationsSection";
import GallerySection from "@/components/GallerySection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import SeoActionCards from "@/components/SeoActionCards";
import InternalLinksSection from "@/components/InternalLinksSection";
import BacklinkPartnersSection from "@/components/BacklinkPartnersSection";
import { brandStory, BRAND_FOUNDED_YEAR } from "@/lib/about";
import { faqPageJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/content";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/routes";

const About = () => (
  <div className="page-shell">
    <SeoHead
      page="about"
      extraJsonLd={[faqPageJsonLd(faqs)]}
    />
    <Header />
    <main>
      <section className="page-hero bg-gradient-to-br from-emerald-50 via-white to-stone-50">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="section-eyebrow">About JB Incubator</p>
          <h1 className="page-hero-title">Egg Incubator Manufacturer — Bhandara, Maharashtra Since {BRAND_FOUNDED_YEAR}</h1>
          <p className="page-hero-subtitle">
            JB is an egg incubator manufacturer and egg incubator supplier India trusts — automatic
            egg incubator, 100 egg incubator, and fully automatic models from our Vidarbha factory.
          </p>
        </div>
      </section>

      <section id="about-jb" className="section-padding bg-white" aria-labelledby="brand-story-heading">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="section-eyebrow text-center">Brand Story</p>
          <h2 id="brand-story-heading" className="section-title text-center mb-8">
            {brandStory.headline}
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed text-base sm:text-lg">
            {brandStory.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to={ROUTES.products} className="btn-accent">Browse Products</Link>
            <Link to={ROUTES.training} className="btn-outline">Poultry Training</Link>
          </div>
        </div>
      </section>

      <CompanyStorySection showImage={false} />
      <div id="why-choose-jb">
        <WhyChooseSection />
      </div>
      <ManufacturingProcessSection />
      <div id="customer-success-stories">
        <FarmerStoriesSection />
      </div>
      <JourneyTimeline />
      <TeamSection />
      <ProductSpecificationsSection />
      <GallerySection />
      <SeoActionCards />
      <FaqSection showContactLink />
      <InternalLinksSection />
      <BacklinkPartnersSection />
      <CtaSection />
    </main>
    <Footer />
  </div>
);

export default About;
