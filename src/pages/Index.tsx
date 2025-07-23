import { useState } from "react";
import GridSection from "@/components/GridSection";

const Index = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    console.log(`Navigating to ${section}`);
    // Add navigation logic here when needed
  };

  const getFlexBasis = (section: string) => {
    if (hoveredSection === null) return "50%";
    if (hoveredSection === section) {
      return section === "ARCHITECT" ? "70%" : "50%";
    }
    return "30%";
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-background">
      <div className="flex flex-col h-full">
        {/* Top Row */}
        <div className="flex h-1/2 transition-all duration-700 ease-in-out">
          <GridSection
            title="ARCHITECT"
            variant="dark"
            onClick={() => handleSectionClick("architect")}
            className="border-r border-b border-border transition-all duration-700 ease-in-out"
            style={{ 
              flexBasis: hoveredSection === "ARCHITECT" ? "70%" : hoveredSection === "ABOUT US" ? "30%" : "50%"
            }}
            onMouseEnter={() => setHoveredSection("ARCHITECT")}
            onMouseLeave={() => setHoveredSection(null)}
            isHovered={hoveredSection === "ARCHITECT"}
          />
          <GridSection
            title="ABOUT US"
            variant="light"
            onClick={() => handleSectionClick("about")}
            className="border-b border-border transition-all duration-700 ease-in-out"
            style={{ 
              flexBasis: hoveredSection === "ABOUT US" ? "70%" : hoveredSection === "ARCHITECT" ? "30%" : "50%"
            }}
            onMouseEnter={() => setHoveredSection("ABOUT US")}
            onMouseLeave={() => setHoveredSection(null)}
            isHovered={hoveredSection === "ABOUT US"}
          />
        </div>
        {/* Bottom Row */}
        <div className="flex h-1/2 transition-all duration-700 ease-in-out">
          <GridSection
            title="HOME"
            variant="light"
            onClick={() => handleSectionClick("home")}
            className="border-r border-border transition-all duration-700 ease-in-out"
            style={{ 
              flexBasis: hoveredSection === "HOME" ? "70%" : hoveredSection === "LIFE AT SKLTCOA" ? "30%" : "50%"
            }}
            onMouseEnter={() => setHoveredSection("HOME")}
            onMouseLeave={() => setHoveredSection(null)}
            isHovered={hoveredSection === "HOME"}
          />
          <GridSection
            title="LIFE AT SKLTCOA"
            variant="dark"
            onClick={() => handleSectionClick("life")}
            className="transition-all duration-700 ease-in-out"
            style={{ 
              flexBasis: hoveredSection === "LIFE AT SKLTCOA" ? "70%" : hoveredSection === "HOME" ? "30%" : "50%"
            }}
            onMouseEnter={() => setHoveredSection("LIFE AT SKLTCOA")}
            onMouseLeave={() => setHoveredSection(null)}
            isHovered={hoveredSection === "LIFE AT SKLTCOA"}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;