import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page imports
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import People from "./pages/People";
import Admission from "./pages/Admission";
import Career from "./pages/Career";
import Life from "./pages/Life";
import NotFound from "./pages/NotFound";

//About imports
import AboutRIS from "./pages/About/AboutRIS";

const queryClient = new QueryClient();

const App = () => (
  <div className="font-sans">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/people" element={<People />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/career" element={<Career />} />
            <Route path="/life" element={<Life />} />
            <Route path="*" element={<NotFound />} />

            {/* About Subpage */}
            <Route path="/about/about-ris" element={<AboutRIS />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;
