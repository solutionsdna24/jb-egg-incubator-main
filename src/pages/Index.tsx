import { useState } from "react";
import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import SeoIntroSection from "@/components/SeoIntroSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const handleOrderNowClick = () => setShowOrderForm(true);
  return (
    <div className="page-shell pt-0">
      <Header onOrderNowClick={handleOrderNowClick} />
      <main id="home">
        <MainTitle onOrderNowClick={handleOrderNowClick} />
        <SeoIntroSection />
        <GallerySection />
        <section className="bg-white py-12 px-4 border-y border-slate-200">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore Our Pages</h2>
            <p className="text-slate-600 text-lg mb-8">
              Use the menu to browse details, compare products, and contact us for quick order help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Link to="/products" className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Products</h3>
                <p className="text-slate-600">View all incubator models with features and pricing.</p>
              </Link>
              <Link to="/details" className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Details</h3>
                <p className="text-slate-600">Learn benefits, quality, and setup details.</p>
              </Link>
              <Link to="/contact" className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Contact</h3>
                <p className="text-slate-600">Call, email, or send your inquiry form online.</p>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>     
    </div>
  );
};

export default Index;