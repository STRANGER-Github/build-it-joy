import GridSection from "@/components/GridSection";

const Index = () => {
  const handleSectionClick = (section: string) => {
    console.log(`Navigating to ${section}`);
    // Add navigation logic here when needed
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-background">
      <div className="grid grid-cols-2 grid-rows-2 h-full">
        <GridSection
          title="ARCHITECT"
          variant="dark"
          onClick={() => handleSectionClick("architect")}
          className="border-r border-b border-border"
        />
        <GridSection
          title="ABOUT US"
          variant="light"
          onClick={() => handleSectionClick("about")}
          className="border-b border-border"
        />
        <GridSection
          title="HOME"
          variant="light"
          onClick={() => handleSectionClick("home")}
          className="border-r border-border"
        />
        <GridSection
          title="LIFE AT SKLTCOA"
          variant="dark"
          onClick={() => handleSectionClick("life")}
        />
      </div>
    </div>
  );
};

export default Index;