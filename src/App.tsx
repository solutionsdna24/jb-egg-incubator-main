import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "./pages/ScrollToTop";
import { hideGoogleTranslateBanner, startImageProtection } from "@/lib/googleTranslate";

const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const Details = lazy(() => import("./pages/Details"));
const Contact = lazy(() => import("./pages/Contact"));
const JbEggIncubatorOrder = lazy(() => import("./pages/JbEggIncubatorOrder"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WhatsAppFloat = lazy(() => import("@/components/WhatsAppFloat"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50" aria-label="Loading page">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
  </div>
);

const App = () => {
  useEffect(() => {
    hideGoogleTranslateBanner();
    const bannerObserver = new MutationObserver(hideGoogleTranslateBanner);
    bannerObserver.observe(document.body, { childList: true, subtree: true });
    const stopImageProtection = startImageProtection();
    return () => {
      bannerObserver.disconnect();
      stopImageProtection();
    };
  }, []);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/egg-incubators" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/details" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jb-egg-incubator-order" element={<JbEggIncubatorOrder />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Suspense fallback={null}>
          <WhatsAppFloat />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
