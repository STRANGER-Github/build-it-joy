import { useLocation, Link } from "react-router-dom";

export interface MainMenuItem {
  name: string;
  href: string;
}

interface MainMenuProps {
  items: MainMenuItem[];
  title: string; // page title e.g., "Academics"
  className?: string;
}

const MainMenu = ({ items, className = "" }: MainMenuProps) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    // Desktop Sidebar only
    <aside
      className={`hidden md:block md:w-64 md:fixed right-0 top-20 px-4 py-4 bg-transparent text-right ${className}`}
    >
      <nav className="space-y-3">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`block text-sm md:text-base font-medium transition-colors duration-200 ${
                isActive
                  ? "text-blue-700 font-semibold underline"
                  : "text-black hover:text-blue-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default MainMenu;
