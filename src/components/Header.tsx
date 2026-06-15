import { Menu, Phone, X, ShoppingBag, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import LanguageToggle from "@/components/LanguageToggle";
import { scrollToSection } from "@/lib/navigation";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/details" },
  { label: "Products", to: "/products" },
  { label: "Videos", section: "videos" },
  { label: "Reviews", section: "reviews" },
  { label: "Blog", to: "/blog" },

  { label: "Contact", to: "/contact" },
] as const;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToSection = (sectionId: string) => {
    scrollToSection(sectionId, navigate, pathname);
  };

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
      isActive
        ? "border-emerald-600 text-emerald-700"
        : "border-transparent text-stone-600 hover:text-emerald-700 hover:border-emerald-200"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-stone-200">
      <div className="bg-emerald-700 text-white text-xs sm:text-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3">
          <p className="font-medium truncate">
            JB Incubators from ₹2,700 · Pan-India Delivery · Call +91 8767189437
          </p>
          <LanguageToggle variant="dark" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-3 min-h-[72px] sm:min-h-20">
          <div className="flex items-center gap-2 min-w-0">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden h-10 w-10 p-0 shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <BrandLogo size="header" align="left" className="shrink-0" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="tel:+918767189437"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-stone-200 px-3 py-2 text-sm font-semibold text-stone-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
            >
              <Phone className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              Call
            </a>
            <button
              type="button"
              onClick={() => goToSection("videos")}
              className="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-3 py-2 text-sm font-semibold text-stone-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
            >
              <Play className="h-4 w-4 text-red-600" aria-hidden="true" />
              <span className="hidden sm:inline">Videos</span>
            </button>
            <Link to="/jb-egg-incubator-order" className="btn-accent text-sm px-4 sm:px-5 py-2.5 gap-2">
              <ShoppingBag className="h-4 w-4 shrink-0" aria-hidden="true" />
              Order
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:block border-t border-stone-100 bg-stone-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide" aria-label="Primary navigation">
            {navItems.map((item) =>
              "section" in item ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => goToSection(item.section)}
                  className="px-4 py-3 text-sm font-medium text-stone-600 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-400 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </button>
              ) : (
                <NavLink key={item.to} to={item.to} className={navClass}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white animate-slide-down">
          <nav className="container mx-auto px-4 py-3 grid grid-cols-2 gap-2" aria-label="Mobile navigation">
            {navItems.map((item) =>
              "section" in item ? (
                <button
                  key={item.label}
                  type="button"
                  className="px-4 py-3 rounded-lg text-left text-sm font-semibold text-stone-800 bg-stone-50 hover:bg-emerald-50 hover:text-emerald-700"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => goToSection(item.section), 150);
                  }}
                >
                  {item.label}
                </button>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="px-4 py-3 rounded-lg text-sm font-semibold text-stone-800 bg-stone-50 hover:bg-emerald-50 hover:text-emerald-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
          <div className="container mx-auto px-4 pb-4 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => goToSection("videos"), 150);
              }}
              className="flex w-full items-center justify-center gap-2 py-3 bg-red-600 text-white font-semibold rounded-lg"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              Watch Videos
            </button>
            <a
              href="tel:+918767189437"
              className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call +91 8767189437
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
