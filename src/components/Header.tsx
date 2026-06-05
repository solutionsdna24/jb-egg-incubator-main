import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import jbLogoPreview from "@/assets/JB_LOGO-removebg-preview.webp";
import orderNowButton from "@/assets/order-now-button.webp";
import phoneIcon from "@/assets/phone-icon.webp";
import { Phone, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onOrderNowClick?: () => void;
}

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/details" },
  { label: "Products", to: "/products" },
  { label: "Order Enquiry", to: "/jb-egg-incubator-order" },
  { label: "Contact", to: "/contact" },
];

const Header = ({ onOrderNowClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-semibold transition-colors ${isActive ? "text-blue-700" : "text-slate-700 hover:text-blue-700"}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
       <div className="bg-green-900 text-white px-12 py-3 ">
       <Phone className="h-5 w-5 mr-2 inline" />
       <span>Call Now on +91 8767189437</span>
       </div>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 gap-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
            {/* Logo image only */}
            <NavLink to="/" aria-label="JB Egg Incubator Home">
              <img src={jbLogoPreview} alt="JB Egg Incubator Logo" className="h-14 w-auto flex justify-between items-center" />

            </NavLink>
            
              <NavLink to="/jb-egg-incubator-order" className="ml-6 flex items-center p-0 bg-transparent border-none shadow-none hover:bg-transparent">
                <img src={orderNowButton} alt="Order Now" className="h-10 w-auto object-contain" loading="lazy" decoding="async" />
              </NavLink>
         
            <a href="tel:+918767189437" className="ml-3 flex items-center" aria-label="Call Now">
              <img src={phoneIcon} alt="Call Now" className="h-10 w-10 object-contain" loading="lazy" decoding="async" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xl md:text-lg" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-gray-700 rounded shadow-lg absolute left-0 right-0 top-full z-50">
            <nav className="flex flex-col py-2 px-4 space-y-2" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={navLinkClass}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;