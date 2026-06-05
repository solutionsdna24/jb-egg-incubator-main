import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import JbEggIncubatorOrder from "./pages/JbEggIncubatorOrder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/egg-incubators" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jb-egg-incubator-order" element={<JbEggIncubatorOrder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
