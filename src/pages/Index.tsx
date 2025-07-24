import { useState } from "react";
import GridSection from "@/components/GridSection";

const Index = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  // Row height logic
  const getRowHeight = (row: "top" | "bottom") => {
    if (hoveredSection === "ARCHITECT") {
      return row === "top" ? "60%" : "40%";
    }
    if (hoveredSection === "ABOUT US") {
    return row === "top" ? "65%" : "35%";
    }
    if (hoveredSection === "HOME") {
    return row === "bottom" ? "65%" : "35%";
    }
    if (hoveredSection === "LIFE AT SKLTCOA") {
    return row === "bottom" ? "70%" : "30%";
    }
    return "50%";
  };

  // Column width logic
  const getFlexBasis = (section: string) => {
    if (hoveredSection === "ARCHITECT") {
      switch (section) {
        case "ARCHITECT":
        case "LIFE AT SKLTCOA":
          return "65%";
        case "ABOUT US":
        case "HOME":
          return "35%";
        default:
          return "50%";
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
      default:
        return "50%";
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
      default:
        return "50%";
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
      default:
        return "50%";
      }
    }

    return "50%"; // default state
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-background">
      <div className="flex flex-col h-full">
        {/* Top Row */}
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{ height: getRowHeight("top") }}
        >
          <GridSection
            title="ARCHITECT"
            variant="dark"
            onClick={() => handleSectionClick("architect")}
            className="border-r border-b border-border transition-all duration-700 ease-in-out"
            style={{
              flexBasis: getFlexBasis("ARCHITECT")
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
              flexBasis: getFlexBasis("ABOUT US")
            }}
            onMouseEnter={() => setHoveredSection("ABOUT US")}
            onMouseLeave={() => setHoveredSection(null)}
            isHovered={hoveredSection === "ABOUT US"}
          />
        </div>

        {/* Bottom Row */}
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{ height: getRowHeight("bottom") }}
        >
          <GridSection
            title="HOME"
            variant="light"
            onClick={() => handleSectionClick("home")}
            className="border-r border-border transition-all duration-700 ease-in-out"
            style={{
              flexBasis: getFlexBasis("HOME")
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
              flexBasis: getFlexBasis("LIFE AT SKLTCOA")
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
