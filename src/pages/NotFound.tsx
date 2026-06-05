import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | JB Egg Incubator";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <main className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-6">
          The page <span className="font-mono text-sm">{location.pathname}</span> could not be found.
          Return to JB Egg Incubator to explore products, gallery photos, and contact details.
        </p>
        <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-4 text-blue-700">
          <a href="/" className="underline hover:text-blue-900">
            Home
          </a>
          <a href="/products" className="underline hover:text-blue-900">
            Products
          </a>
          <a href="/details" className="underline hover:text-blue-900">
            Details
          </a>
          <a href="/contact" className="underline hover:text-blue-900">
            Contact
          </a>
        </nav>
      </main>
    </div>
  );
};

export default NotFound;
