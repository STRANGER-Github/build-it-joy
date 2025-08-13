import { useState } from "react";
import GridSection from "@/components/GridSection";

const Index = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [hasUserHovered, setHasUserHovered] = useState(false);

  const handleSectionClick = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  const handleMouseEnter = (section: string) => {
    if (!hasUserHovered) setHasUserHovered(true);
    setHoveredSection(section);
  };

  const handleMouseLeave = (section: string) => {
    if (hasUserHovered) {
      setHoveredSection(null);
    }
  };

  // Helper to get the effective hovered section (fallback to "HOME" if none and no user hover)
  const effectiveHoveredSection =
    hoveredSection || (!hasUserHovered ? "ARCHITECT" : null);

  const getRowHeight = (row: "top" | "bottom") => {
    if (effectiveHoveredSection === "ARCHITECT") return row === "top" ? "60%" : "40%";
    if (effectiveHoveredSection === "ABOUT US") return row === "top" ? "65%" : "35%";
    if (effectiveHoveredSection === "HOME") return row === "bottom" ? "65%" : "35%";
    if (effectiveHoveredSection === "LIFE AT SKLTCOA") return row === "bottom" ? "70%" : "30%";
    return "50%";
  };

  const getFlexBasis = (section: string) => {
    if (effectiveHoveredSection === "ARCHITECT") {
      switch (section) {
        case "ARCHITECT":
        case "LIFE AT SKLTCOA":
          return "65%";
        case "ABOUT US":
        case "HOME":
          return "35%";
      }
    }
    if (effectiveHoveredSection === "ABOUT US") {
      switch (section) {
        case "ABOUT US":
        case "HOME":
          return "70%";
        case "ARCHITECT":
        case "LIFE AT SKLTCOA":
          return "30%";
      }
    }
    if (effectiveHoveredSection === "HOME") {
      switch (section) {
        case "HOME":
        case "ABOUT US":
          return "70%";
        case "LIFE AT SKLTCOA":
        case "ARCHITECT":
          return "30%";
      }
    }
    if (effectiveHoveredSection === "LIFE AT SKLTCOA") {
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
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{ height: getRowHeight("top") }}
        >
          <GridSection
            title="HOME"
            variant="dark"
            linkTo="/home"
            onClick={() => handleSectionClick("architect")}
            className="border-r border-b border-border transition-all duration-700 ease-in-out"
            style={{ flexBasis: getFlexBasis("ARCHITECT") }}
            onMouseEnter={() => handleMouseEnter("ARCHITECT")}
            onMouseLeave={() => handleMouseLeave("ARCHITECT")}
            isHovered={effectiveHoveredSection === "ARCHITECT"}
          />
          <GridSection
            title="ABOUT US"
            variant="light"
            linkTo="/about"
            onClick={() => handleSectionClick("about")}
            className="border-b border-border transition-all duration-700 ease-in-out"
            style={{ flexBasis: getFlexBasis("ABOUT US") }}
            onMouseEnter={() => handleMouseEnter("ABOUT US")}
            onMouseLeave={() => handleMouseLeave("ABOUT US")}
            isHovered={effectiveHoveredSection === "ABOUT US"}
          />
        </div>

        {/* Bottom Row */}
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{ height: getRowHeight("bottom") }}
        >
          <GridSection
            title="LIFE AT SKLTCOA"
            variant="light"
            linkTo="/life"
            onClick={() => handleSectionClick("home")}
            className="border-r border-border transition-all duration-700 ease-in-out"
            style={{ flexBasis: getFlexBasis("HOME") }}
            onMouseEnter={() => handleMouseEnter("HOME")}
            onMouseLeave={() => handleMouseLeave("HOME")}
            isHovered={effectiveHoveredSection === "HOME"}
          />
          <GridSection
            title="CONTACT"
            variant="dark"
            linkTo="/contact"
            onClick={() => handleSectionClick("life")}
            className="transition-all duration-700 ease-in-out"
            style={{ flexBasis: getFlexBasis("LIFE AT SKLTCOA") }}
            onMouseEnter={() => handleMouseEnter("LIFE AT SKLTCOA")}
            onMouseLeave={() => handleMouseLeave("LIFE AT SKLTCOA")}
            isHovered={effectiveHoveredSection === "LIFE AT SKLTCOA"}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
