import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter , Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import JbEggIncubatorOrder from "./pages/JbEggIncubatorOrder";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./pages/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const removeGoogleBanner = () => {
      document.body.style.top = "0px";
  
      const iframe = document.querySelector(
        "iframe.goog-te-banner-frame"
      ) as HTMLElement | null;
  
      if (iframe) {
        iframe.style.display = "none";
      }
  
      const banner = document.querySelector(
        ".goog-te-banner-frame"
      ) as HTMLElement | null;
  
      if (banner) {
        banner.style.display = "none";
      }
    };
  
    removeGoogleBanner();
  
    const interval = setInterval(removeGoogleBanner, 500);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter >
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/egg-incubators" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/details" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/jb-egg-incubator-order"
              element={<JbEggIncubatorOrder />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter >
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;