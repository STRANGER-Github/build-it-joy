import { cn } from "@/lib/utils";
import architectModel from "@/assets/architect-model.jpg";

interface GridSectionProps {
  title: string;
  variant: "dark" | "light";
  className?: string;
  onClick?: () => void;
}

const GridSection = ({ title, variant, className, onClick }: GridSectionProps) => {
  const isLight = variant === "light";
  const isArchitect = title === "ARCHITECT";
  
  return (
    <div
      className={cn(
        "relative flex items-center justify-start p-8 cursor-pointer group overflow-hidden",
        "transition-all duration-700 ease-in-out",
        isLight 
          ? "bg-grid-light text-grid-light-foreground" 
          : "bg-grid-dark text-grid-dark-foreground",
        className
      )}
      onClick={onClick}
    >
      {isArchitect && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
          style={{ backgroundImage: `url(${architectModel})` }}
        />
      )}
      <div className="relative z-10">
        <h2 className="text-lg font-normal tracking-[0.2em] uppercase select-none transition-all duration-500 ease-in-out group-hover:text-white group-hover:drop-shadow-lg">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default GridSection;