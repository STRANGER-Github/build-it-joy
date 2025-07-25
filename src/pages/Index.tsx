import { useState } from "react";
import GridSection from "@/components/GridSection";

const Index = () => {
  const [hoveredSection, setHoveredSection] = useState<string>("ARCHITECT");
  const [hasUserHovered, setHasUserHovered] = useState(false);

  const handleSectionClick = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  const handleMouseEnter = (section: string) => {
    if (!hasUserHovered) setHasUserHovered(true);
    setHoveredSection(section);
  };

  const handleMouseLeave = (section: string) => {
    if (hasUserHovered) setHoveredSection(null);
  };

  // Row height logic (same as before)
  const getRowHeight = (row: "top" | "bottom") => {
    if (hoveredSection === "ARCHITECT") return row === "top" ? "60%" : "40%";
    if (hoveredSection === "ABOUT US") return row === "top" ? "65%" : "35%";
    if (hoveredSection === "HOME") return row === "bottom" ? "65%" : "35%";
    if (hoveredSection === "LIFE AT SKLTCOA") return row === "bottom" ? "70%" : "30%";
    return "50%";
  };

  // Column width logic (same as before)
  const getFlexBasis = (section: string) => {
    if (hoveredSection === "ARCHITECT") {
      switch (section) {
        case "ARCHITECT":
        case "LIFE AT SKLTCOA":
          return "65%";
        case "ABOUT US":
        case "HOME":
          return "35%";
      }
    }
    if (hoveredSection === "ABOUT US") {
      switch (section) {
        case "ABOUT US":
        case "HOME":
          return "70%";
        case "ARCHITECT":
        case "LIFE AT SKLTCOA":
          return "30%";
      }
    }
    if (hoveredSection === "HOME") {
      switch (section) {
        case "HOME":
        case "ABOUT US":
          return "70%";
        case "LIFE AT SKLTCOA":
        case "ARCHITECT":
          return "30%";
      }
    }
    if (hoveredSection === "LIFE AT SKLTCOA") {
      switch (section) {
        case "LIFE AT SKLTCOA":
        case "ARCHITECT":
          return "65%";
        case "ABOUT US":
        case "HOME":
          return "35%";
      }
    }

    return "50%";
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-background">
      <div className="flex flex-col h-full">
        {/* Top Row */}
        <div className="flex transition-all duration-700 ease-in-out" style={{ height: getRowHeight("top") }}>
          <GridSection
            title="HOME"
            variant="dark"
            onClick={() => handleSectionClick("architect")}
            className="border-r border-b border-border transition-all duration-700 ease-in-out"
            style={{ flexBasis: getFlexBasis("ARCHITECT") }}
            onMouseEnter={() => handleMouseEnter("ARCHITECT")}
            onMouseLeave={() => handleMouseLeave("ARCHITECT")}
            isHovered={hoveredSection === "ARCHITECT"}
          />
          <GridSection
            title="ABOUT US"
            variant="light"
            onClick={() => handleSectionClick("about")}
            className="border-b border-border transition-all duration-700 ease-in-out"
            style={{ flexBasis: getFlexBasis("ABOUT US") }}
            onMouseEnter={() => handleMouseEnter("ABOUT US")}
            onMouseLeave={() => handleMouseLeave("ABOUT US")}
            isHovered={hoveredSection === "ABOUT US"}
          />
        </div>

        {/* Bottom Row */}
        <div className="flex transition-all duration-700 ease-in-out" style={{ height: getRowHeight("bottom") }}>
          <GridSection
            title="CAREER"
            variant="light"
            onClick={() => handleSectionClick("home")}
            className="border-r border-border transition-all duration-700 ease-in-out"
            style={{ flexBasis: getFlexBasis("HOME") }}
            onMouseEnter={() => handleMouseEnter("HOME")}
            onMouseLeave={() => handleMouseLeave("HOME")}
            isHovered={hoveredSection === "HOME"}
          />
          <GridSection
            title="LIFE AT SKLTCOA"
            variant="dark"
            onClick={() => handleSectionClick("life")}
            className="transition-all duration-700 ease-in-out"
            style={{ flexBasis: getFlexBasis("LIFE AT SKLTCOA") }}
            onMouseEnter={() => handleMouseEnter("LIFE AT SKLTCOA")}
            onMouseLeave={() => handleMouseLeave("LIFE AT SKLTCOA")}
            isHovered={hoveredSection === "LIFE AT SKLTCOA"}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
