import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div id="about">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">JB INCUBATOR</h3>
            <p className="text-gray-300 mb-4">
              Leading manufacturer of precision incubator controllers, providing reliable solutions
              for successful egg hatching across India. We design incubators for stable temperature,
              practical operation, and long-term durability in real farm conditions.
            </p>
            <p className="text-gray-300 mb-4">
              Trusted by poultry farmers and hatchery operators for consistent performance, product
              guidance, and responsive support before and after purchase.
            </p>
            <p className="text-gray-300">
              <Link to="/products" className="text-blue-300 hover:text-blue-200 underline">
                Browse incubator models
              </Link>
            </p>
          </div>
          {/* Contact Us */}
          <div id="contact">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <Link to="tel:+918767189437" className="flex items-center hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">+91 8767189437</span>
              </Link>
              <Link to="tel:+918803625410" className="flex items-center hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">+91 8803625410</span>
              </Link>
              <Link to="mailto:jbincubator5@gmail.com" className="flex items-center hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">jbincubator5@gmail.com</span>
              </Link>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">Lakhandur, Bhandara, Maharashtra 441803</span>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-2">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
          <Link to="/">Home</Link>
          </ul>
          <ul className="space-y-2">
          <Link to="/products">Products</Link>
          </ul>
          <ul className="space-y-2">
          <Link to="/details">About Us</Link>
          </ul>
          
          <ul className="space-y-2">
          <Link to="/jb-egg-incubator-order">Order Enquiry</Link>
          </ul>
          <ul className="space-y-2">
          <Link to="/contact" >Contact</Link>
          </ul>
         
           
           
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 JB INCUBATOR. All rights reserved. | Built with precision and care.</p>
        </div>
      </div>
      <a
  href="https://wa.me/918767189437?text=Hi%JB%Egg%Incubator%Team,%I%want%to%order%an%egg%incubator%machine.%Please%share%details."
  title="WhatsApp"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 z-[9999] flex flex-col items-center"
>
  {/* WhatsApp Circle Button */}
  <div className="transition-transform duration-300 hover:scale-110">
  <img 
      src="/whatsapp.png"
      alt="WhatsApp"
      className="w-13 h-20 rounded-full"
    />
  </div>

  {/* Mobile Friendly Text */}
   <span
    className="mt-1 text-[12px] font-semibold text-white bg-green-600 
               px-2 py-[2px] rounded-md shadow text-center whitespace-nowrap"
  >
    Chat on WhatsApp
  </span>
</a>
    </footer>
  );
};

export default Footer; 