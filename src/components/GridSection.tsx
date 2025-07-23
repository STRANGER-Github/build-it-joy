import { cn } from "@/lib/utils";

interface GridSectionProps {
  title: string;
  variant: "dark" | "light";
  className?: string;
  onClick?: () => void;
}

const GridSection = ({ title, variant, className, onClick }: GridSectionProps) => {
  const isLight = variant === "light";
  
  return (
    <div
      className={cn(
        "flex items-center justify-start p-8 cursor-pointer transition-all duration-500 hover:scale-[1.02] group",
        isLight 
          ? "bg-grid-light text-grid-light-foreground" 
          : "bg-grid-dark text-grid-dark-foreground",
        className
      )}
      onClick={onClick}
    >
      <h2 className="text-lg font-normal tracking-[0.2em] uppercase select-none transition-transform duration-300 group-hover:translate-x-2">
        {title}
      </h2>
    </div>
  );
};

export default GridSection;