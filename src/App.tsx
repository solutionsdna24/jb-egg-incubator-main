import { lazy, Suspense, useEffect, type ReactNode } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "./pages/ScrollToTop";
import { hideGoogleTranslateBanner, startImageProtection } from "@/lib/googleTranslate";

const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const JbEggIncubatorOrder = lazy(() => import("./pages/JbEggIncubatorOrder"));
const Training = lazy(() => import("./pages/Training"));
const HatchingGuide = lazy(() => import("./pages/HatchingGuide"));
const IncubationCalculator = lazy(() => import("./pages/IncubationCalculator"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const KeywordLanding = lazy(() => import("./pages/KeywordLanding"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WhatsAppFloat = lazy(() => import("@/components/WhatsAppFloat"));
import { LANDING_PATHS } from "./lib/landingPages";

/** GitHub Pages serves folder URLs with a trailing slash — register both path forms. */
const routePair = (path: string, element: ReactNode) => {
  const base = path.replace(/\/+$/, "") || "/";
  if (base === "/") {
    return [<Route key="/" path="/" element={element} />];
  }
  return [
    <Route key={base} path={base} element={element} />,
    <Route key={`${base}/`} path={`${base}/`} element={element} />,
  ];
};

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
            {routePair("/", <Index />)}
            {routePair("/egg-incubators", <Index />)}
            {routePair("/products", <Products />)}
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/products/:slug/" element={<ProductDetail />} />
            {routePair("/about", <About />)}
            <Route path="/details" element={<Navigate to="/about/" replace />} />
            <Route path="/details/" element={<Navigate to="/about/" replace />} />
            {routePair("/contact", <Contact />)}
            {routePair("/order-egg-incubator", <JbEggIncubatorOrder />)}
            <Route path="/jb-egg-incubator-order" element={<Navigate to="/order-egg-incubator/" replace />} />
            <Route path="/jb-egg-incubator-order/" element={<Navigate to="/order-egg-incubator/" replace />} />
            {routePair("/guides/poultry-incubation-training", <Training />)}
            {routePair("/guides/free-hatching-guide", <HatchingGuide />)}
            {routePair("/tools/incubation-capacity-calculator", <IncubationCalculator />)}
            {LANDING_PATHS.flatMap((path) => routePair(path, <KeywordLanding />))}
            {routePair("/blog", <Blogs />)}
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/:slug/" element={<BlogPost />} />
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
