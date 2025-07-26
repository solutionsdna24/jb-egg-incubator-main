import { Phone, Truck, Shield } from "lucide-react";
import chickBackground from "@/assets/chick-background.jpg";

interface MainTitleProps {
  onOrderNowClick?: () => void;
}

const MainTitle = ({ onOrderNowClick }: MainTitleProps) => {
  return (
    <div className="relative text-center py-12 px-4 overflow-hidden">
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
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
          JB EGG INCUBATOR
        </h1>
        <h4 className="text-2xl font-bold text-white mb-6 font-playfair">
          Hatch Success with JB Incubators
        </h4>
        <div className="flex justify-center mb-6 space-x-4">
          <button 
            className="text-white font-bold px-4 py-2 rounded transition-colors shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#e63946', borderRadius: '8px' }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#c92a34'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#e63946'}
            onClick={onOrderNowClick}
          >
            <span role="img" aria-label="Order" className="mr-2">🛒</span>Order Now
          </button>
          <a 
            href="tel:+918767189437" 
            className="text-white font-bold px-4 py-2 rounded transition-colors"
            style={{ backgroundColor: '#1d3557', borderRadius: '8px' }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#163049'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#1d3557'}
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
    </div>
  );
};

export default MainTitle;