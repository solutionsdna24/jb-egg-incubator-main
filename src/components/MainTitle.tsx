import { Phone, Truck, Shield } from "lucide-react";
import chickBackground from "@/assets/chick-background.webp";
import { Link } from "react-router-dom";

interface MainTitleProps {
  onOrderNowClick?: () => void;
}

const MainTitle = ({ onOrderNowClick }: MainTitleProps) => {
  return (
    <section className="relative text-center py-12 px-4 overflow-hidden" aria-labelledby="main-page-heading">
      <div
        role="img"
        data-aid="BACKGROUND_IMAGE_RENDERED"
        data-ux="HeaderMediaFillBackground"
        data-ht="Fill"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          backgroundImage: `url(${chickBackground})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}  
      />
      <div className="relative z-10">
        <h1 id="main-page-heading" className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
          JB EGG INCUBATOR
        </h1>
        <p className="text-2xl font-bold text-white mb-4 font-playfair">
          Hatch Success with JB Incubators
        </p>
        <p className="text-base md:text-lg text-white/95 max-w-3xl mx-auto mb-6 leading-relaxed">
          JB Egg Incubator supplies manual and automatic poultry incubators across India with
          dependable temperature control, strong build quality, and practical support for farmers
          who need consistent hatch results.
        </p>
        <div className="flex justify-center mb-6 space-x-4">
        <Link to="/jb-egg-incubator-order">

          <button
            className="text-white font-bold px-4 py-2 rounded shadow-lg hover:shadow-xl bg-red-600 hover:bg-red-700 transition-colors"
            style={{ borderRadius: "8px" }}
          

          >
            <span role="img" aria-label="Order" className="mr-2">🛒</span>Order Now
          </button>
          </Link>
          <a
            href="tel:+918767189437"
            className="text-white font-bold px-4 py-2 rounded bg-blue-900 hover:bg-blue-950 transition-colors"
            style={{ borderRadius: "8px" }}
          >
            <span role="img" aria-label="Call" className="mr-2">📞</span>Call Now
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-white font-playfair">
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            <span>Call/DM to Order</span>
          </div>
          <div className="hidden md:block text-white">|</div>
          <div className="flex items-center">
            <Truck className="h-5 w-5 mr-2" />
            <span>Fast Shipping Across India</span>
          </div>
          <div className="hidden md:block text-white">|</div>
          <div className="flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            <span>1 Year Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTitle;