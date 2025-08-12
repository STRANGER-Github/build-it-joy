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
import Contact from "./pages/Contact";
import Life from "./pages/Life";
import NotFound from "./pages/NotFound";

//About imports
import RahulEducation from "./pages/About/RahuIEducation";
import Skltcoa from "./pages/About/Skltcoa";
import Principal from "./pages/About/Principal";
import VisionAndMission from "./pages/About/VisionAndMission";
import CollegeBrochure from "./pages/About/Brochure";
import { Pin } from "lucide-react";

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
            {/* <Route path="/people" element={<People />} /> */}
            {/* <Route path="/admission" element={<Admission />} /> */}
            <Route path="/career" element={<Career />} />
            <Route path="/life" element={<Life />} />
            <Route path="*" element={<NotFound />} />

            {/* About Subpage */}
            <Route path="/about/rahul-education" element={<RahulEducation />} />
            <Route path="/about/skltcoa" element={<Skltcoa />} />
            <Route path="/about/principal" element={<Principal />} />
            <Route path="/about/vision-mission" element={<VisionAndMission />} />
            <Route path="/about/brochure" element={<CollegeBrochure />} />



            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;
