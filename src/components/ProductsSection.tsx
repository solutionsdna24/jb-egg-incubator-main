import { useState } from "react";
import { Button } from "@/components/ui/button";
import jbw100 from "@/assets/jbw100.png";
import jbst100 from "@/assets/jbst100.png";
import jbin100a from "@/assets/jbin100a.png";
import { Settings, Eye, Egg, Zap } from "lucide-react";

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfN9z4X80WO-V_qXBl8mHs8ObkZMK4ko4o5xWkMXLK7znPC8w/formResponse";

const ProductsSection = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showGoogleForm, setShowGoogleForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    model: "",
    quantity: "",
    note: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  // Google Form field names (entry.xxxxx...)
  const FIELD_EMAIL = "entry.1045781291";
  const FIELD_NAME = "entry.2005620554";
  const FIELD_PHONE = "entry.1166974658";
  const FIELD_ADDRESS = "entry.1065046570";
  const FIELD_MODEL = "entry.839337160";
  const FIELD_QUANTITY = "entry.839337162";
  const FIELD_NOTE = "entry.839337161";

  const handleOrderClick = (productName) => {
    setSelectedProduct(productName);
    setShowOrderForm(true);
    setForm({
      email: "",
      name: "",
      phone: "",
      address: "",
      model: productName,
      quantity: "",
      note: ""
    });
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowGoogleForm(true);
  };

  return (
    <>
      <section id="products" className="pt-0 pb-20 bg-gray-50" data-lov-id="src\components\ProductsSection.tsx:133:4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Egg Incubators</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Microsoft YaHei UI Light, Microsoft YaHei, Arial, sans-serif' }}>
              Reliable Egg Incubators with High Hatch Rates<br />
              From Manual to Fully Automatic Models – Built for Precision, Durability, and Success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
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
                      className="text-white font-bold px-4 py-2 rounded transition-colors shadow-lg hover:shadow-xl"
                      style={{ backgroundColor: '#e63946', borderRadius: '8px' }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = '#c92a34'}
                      onMouseOut={e => e.currentTarget.style.backgroundColor = '#e63946'}
                      onClick={() => handleOrderClick(product.name)}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {showOrderForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative pt-12 pb-8 px-4 z-50 overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 bg-blue-600 text-white border-2 border-white rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold shadow-lg z-50 focus:outline-none hover:bg-red-600 hover:text-white transition-colors"
              onClick={() => setShowOrderForm(false)}
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfN9z4X80WO-V_qXBl8mHs8ObkZMK4ko4o5xWkMXLK7znPC8w/viewform?embedded=true"
              width="100%"
              height="1557"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Order Now Form"
              className="w-full rounded"
              style={{ minHeight: 600 }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsSection;