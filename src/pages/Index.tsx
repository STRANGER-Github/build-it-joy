import GridSection from "@/components/GridSection";

const Index = () => {
  const handleSectionClick = (section: string) => {
    console.log(`Navigating to ${section}`);
    // Add navigation logic here when needed
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-background">
      <div className="flex flex-col h-full group/container">
        <div className="flex flex-1 group/top-row">
          <GridSection
            title="ARCHITECT"
            variant="dark"
            onClick={() => handleSectionClick("architect")}
            className="border-r border-b border-border flex-1 transition-all duration-700 ease-out hover:flex-[1.3] group-hover/top-row:flex-[0.7]"
          />
          <GridSection
            title="ABOUT US"
            variant="light"
            onClick={() => handleSectionClick("about")}
            className="border-b border-border flex-1 transition-all duration-700 ease-out hover:flex-[1.3] group-hover/top-row:flex-[0.7]"
          />
        </div>
        <div className="flex flex-1 group/bottom-row">
          <GridSection
            title="HOME"
            variant="light"
            onClick={() => handleSectionClick("home")}
            className="border-r border-border flex-1 transition-all duration-700 ease-out hover:flex-[1.3] group-hover/bottom-row:flex-[0.7]"
          />
          <GridSection
            title="LIFE AT SKLTCOA"
            variant="dark"
            onClick={() => handleSectionClick("life")}
            className="flex-1 transition-all duration-700 ease-out hover:flex-[1.3] group-hover/bottom-row:flex-[0.7]"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;