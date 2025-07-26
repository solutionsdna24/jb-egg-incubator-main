import { Button } from "@/components/ui/button";
import JbLogo from "@/assets/jb-logo.png";
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] bg-white text-center px-4">
      <img 
        src={JbLogo}
        alt="JB Egg Incubator Logo" 
        className="h-28 w-auto mb-8 mx-auto"
      />
      <div 
        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block px-6 py-2 rounded-lg"
        style={{
          background: "linear-gradient(90deg, #f8fafc 80%, #e0e7ef 100%)",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)",
        }}
      >
        JB EGG INCUBATOR
      </div>
      <h1 
        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 relative inline-block px-6 py-2 rounded-lg"
        style={{
          background: "linear-gradient(90deg, #f8fafc 80%, #e0e7ef 100%)",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)",
        }}
      >
        Hatch Success with JB Incubators
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Premium quality egg incubators for poultry farmers. High hatch rates, reliable performance, and trusted support across India.
      </p>
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