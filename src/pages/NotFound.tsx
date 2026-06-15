import { useLocation, Link } from "react-router-dom";
import SeoHead from "@/components/SeoHead";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <SeoHead page="notFound" />
      <main className="text-center max-w-xl">
        <p className="text-6xl font-bold text-blue-700 mb-2">404</p>
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-slate-900">Page Not Found</h1>
        <p className="text-base sm:text-xl text-slate-600 mb-6">
          The page <span className="font-mono text-sm bg-slate-100 px-2 py-1 rounded">{location.pathname}</span> could
          not be found. Return to JB Egg Incubator to explore products and contact details.
        </p>
        <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-4 text-blue-700">
          <Link to="/" className="underline hover:text-blue-900">
            Home
          </Link>
          <Link to="/products" className="underline hover:text-blue-900">
            Products
          </Link>
          <Link to="/about" className="underline hover:text-blue-900">
            Details
          </Link>
          <Link to="/contact" className="underline hover:text-blue-900">
            Contact
          </Link>
        </nav>
      </main>
    </div>
  );
};

export default NotFound;
