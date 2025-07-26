import { Button } from "@/components/ui/button";
import { Phone, Truck, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] bg-white text-center px-4">
      <div className="text-center py-12 px-4">
        <h3 className="text-3xl md:text-5xl font-extrabold text-blue-700 inline-block px-6 py-2 rounded-lg mb-1" style={{
          background: "linear-gradient(90deg, #f8fafc 80%, #e0e7ef 100%)",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)",
          textShadow: `
            -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000,
            -3px 0 0 #000, 3px 0 0 #000, 0 3px 0 #000, 0 -3px 0 #000,
            0 0 8px #000, 0 2px 16px #000
          `,
          fontWeight: 900
        }}>
          JB EGG INCUBATOR
        </h3>
        <div className="text-sm md:text-base text-blue-600 font-medium mt-1">Hatch Success with JB Incubators</div>
      </div>
      <h1 
        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 relative inline-block px-6 py-2 rounded-lg"
        style={{
          background: "linear-gradient(90deg, #f8fafc 80%, #e0e7ef 100%)",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)",
          textShadow: `
            -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000,
            -4px 0 0 #000, 4px 0 0 #000, 0 4px 0 #000, 0 -4px 0 #000
          `
        }}
      >
        Hatch Success with JB Incubators
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Premium quality egg incubators for poultry farmers. High hatch rates, reliable performance, and trusted support across India.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-white font-playfair">
        <div className="flex items-center font-extrabold" style={{ textShadow: '0 0 12px #fff, 0 0 24px #fff' }}>
          <Phone className="h-5 w-5 mr-2" />
          <span>Call/DM to Order</span>
        </div>
        <div className="hidden md:block text-white font-extrabold" style={{ textShadow: '0 0 12px #fff, 0 0 24px #fff' }}>|</div>
        <div className="flex items-center font-extrabold" style={{ textShadow: '0 0 12px #fff, 0 0 24px #fff' }}>
          <Truck className="h-5 w-5 mr-2" />
          <span>Fast Shipping Across India</span>
        </div>
        <div className="hidden md:block text-white font-extrabold" style={{ textShadow: '0 0 12px #fff, 0 0 24px #fff' }}>|</div>
        <div className="flex items-center font-extrabold" style={{ textShadow: '0 0 12px #fff, 0 0 24px #fff' }}>
          <Shield className="h-5 w-5 mr-2" />
          <span>1 Year Warranty</span>
        </div>
      </div>
      <Button 
        size="lg" 
        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-10 py-4 rounded shadow"
        asChild
      >
        <a href="#contact">Contact Us</a>
      </Button>
    </section>
  );
};

export default HeroSection;