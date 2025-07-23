import { cn } from "@/lib/utils";
import architectModel from "@/assets/architect-model.jpg";

interface GridSectionProps {
  title: string;
  variant: "dark" | "light";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isHovered?: boolean;
}

const GridSection = ({ 
  title, 
  variant, 
  className, 
  style,
  onClick, 
  onMouseEnter, 
  onMouseLeave,
  isHovered 
}: GridSectionProps) => {
  const isLight = variant === "light";
  const isArchitect = title === "ARCHITECT";
  
  return (
    <div
      className={cn(
        "relative flex items-center justify-start p-8 cursor-pointer overflow-hidden",
        "transition-all duration-700 ease-in-out",
        isLight 
          ? "bg-grid-light text-grid-light-foreground" 
          : "bg-grid-dark text-grid-dark-foreground",
        className
      )}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isArchitect && (
        <div 
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${architectModel})` }}
        />
      )}
      <div className="relative z-10">
        <h2 className={cn(
          "text-lg font-normal tracking-[0.2em] uppercase select-none transition-all duration-500 ease-in-out",
          isArchitect && isHovered ? "text-white drop-shadow-lg" : ""
        )}>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default GridSection;