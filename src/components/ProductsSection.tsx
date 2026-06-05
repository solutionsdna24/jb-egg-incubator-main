import { useState } from "react";
import jbw100 from "@/assets/jbw100.webp";
import jbst100 from "@/assets/jbst100.webp";
import jbin100a from "@/assets/jbin100a.webp";

const ProductsSection = () => {


  const products = [
    {
      id: "JBW100",
      name: "JBW100",
      price: "₹ 2,700.00",
      image: jbw100,
      features: {
        control: "Manual Control",
        monitoring: "Manual Monitoring",
        capacity: "100 eggs",
        power: "120 Watt"
      },
      keyFeatures: [
        "Thermocol Body Material",
        "High quality controller",
        "Single fan cooling system",
        "2 bulbs heating system",
        "2 Holder included",
        "6-month warranty on controller & adapter",
        "80%+ hatch rate performance",
        "Branded & long lasting parts"
      ]
    },
    {
      id: "JBST100",
      name: "JBST100",
      price: "₹ 4,999.00",
      image: jbst100,
      features: {
        control: "Mercury Thermometer",
        monitoring: "Digital Hygrometer",
        capacity: "100 eggs",
        power: "120 Watt"
      },
      keyFeatures: [
        "Fiber Body Material",
        "High quality controller",
        "Double Fan cooling system",
        "2 bulbs heating system",
        "Double Holder included",
        "Digital Hygrometer included",
        "Mercury Thermometer included",
        "6-month warranty on controller & adapter",
        "85%+ hatch rate performance"
      ]
    },
    {
      id: "JBIN100A",
      name: "JBIN100A",
      price: "₹ 9,499.00",
      image: jbin100a,
      features: {
        control: "Auto Control",
        monitoring: "Digital Monitor",
        capacity: "120 eggs",
        power: "120 Watt"
      },
      keyFeatures: [
        "Fiber Body Material",
        "High quality controller with automatic rotation",
        "Dual Fan cooling system",
        "2 bulbs heating system",
        "Double Holder included",
        "Digital Hygrometer included",
        "Mercury Thermometer included",
        "Made in India Adapter",
        "Additional fuse & battery backup",
        "85%+ hatch rate performance",
        "Fully Automatic operation"
      ]
    }
  ];
  return (
    <>
      <section id="products" className="pt-4 pb-20 bg-slate-50" data-lov-id="src\components\ProductsSection.tsx:133:4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Egg Incubators</h2>
            <p className="text-base text-slate-600 max-w-3xl mx-auto mb-3" style={{ fontFamily: 'Microsoft YaHei UI Light, Microsoft YaHei, Arial, sans-serif' }}>
              Reliable Egg Incubators with High Hatch Rates. From manual to fully automatic models,
              JB incubators are built for precision, durability, and successful hatching in daily farm use.
            </p>
            <p className="text-base text-slate-600 max-w-3xl mx-auto">
              Compare{" "}
              <a href="#product-JBW100" className="text-blue-700 underline hover:text-blue-900">JBW100</a>,{" "}
              <a href="#product-JBST100" className="text-blue-700 underline hover:text-blue-900">JBST100</a>, and{" "}
              <a href="#product-JBIN100A" className="text-blue-700 underline hover:text-blue-900">JBIN100A</a>{" "}
              below, then{" "}
              <a href="/egg-incubators#contact" className="text-blue-700 underline hover:text-blue-900">
                contact us
              </a>{" "}
              or call{" "}
              <a href="tel:+918767189437" className="text-blue-700 underline hover:text-blue-900">
                +91 8767189437
              </a>{" "}
              to place your order.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div id={`product-${product.id}`} key={product.id} className="bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" loading="lazy" decoding="async" />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.name}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span data-lov-id="src\components\ProductsSection.tsx:152:16" className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.name}
                    </span>
                    <span className="text-3xl font-bold text-blue-600">{product.price}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6" style={{ fontFamily: 'Microsoft YaHei UI Light, Microsoft YaHei, Arial, sans-serif' }}>
                    <div className="flex items-center text-sm text-gray-600">
                      {/* Thermometer SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 text-red-500"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
                      <span>{product.features.control}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      {/* Droplets SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 text-blue-500"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
                      <span>{product.features.monitoring}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      {/* Clock SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 text-green-500"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span>{product.features.capacity}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      {/* Zap SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 text-yellow-500"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                      <span>{product.features.power}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Footer buttons from hero section */}
                  <div className="flex justify-center gap-4 mt-6">
                    <button
                      className="text-white font-bold px-4 py-2 rounded transition-colors shadow-lg hover:shadow-xl bg-red-600 hover:bg-red-700"
                      style={{ borderRadius: "8px" }}
                      onClick={() => {
                        window.location.href = "/jb-egg-incubator-order";
                      }}
                    >
                      <span role="img" aria-label="Order" className="mr-2">🛒</span>Order Now
                    </button>
                    <a
                      href="tel:+918767189437"
                      className="text-white font-bold px-4 py-2 rounded transition-colors bg-blue-900 hover:bg-blue-950"
                      style={{ borderRadius: "8px" }}
                    >
                      <span role="img" aria-label="Call" className="mr-2">📞</span>Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default ProductsSection;