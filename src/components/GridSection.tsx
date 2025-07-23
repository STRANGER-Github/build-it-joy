import { cn } from "@/lib/utils";

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
        "transition-all duration-700 ease-out hover:scale-[1.02]",
        isLight 
          ? "bg-grid-light text-grid-light-foreground" 
          : "bg-grid-dark text-grid-dark-foreground",
        isArchitect && "bg-cover bg-center bg-no-repeat",
        className
      )}
      style={isArchitect ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`
      } : undefined}
      onClick={onClick}
    >
      {isArchitect && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
      )}
      <h2 className={cn(
        "relative z-10 text-lg font-normal tracking-[0.2em] uppercase select-none",
        "transition-all duration-500 ease-out group-hover:translate-x-4 group-hover:scale-110",
        isArchitect && "text-white group-hover:text-white/90"
      )}>
        {title}
      </h2>
    </div>
  );
};

export default GridSection;