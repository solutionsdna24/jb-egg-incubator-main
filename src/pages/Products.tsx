import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
