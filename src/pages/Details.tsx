import Header from "@/components/Header";
import SeoIntroSection from "@/components/SeoIntroSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Details = () => {
  return (
    <div className="page-shell">
      <Header />
      <main>       
        <SeoIntroSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Details;
