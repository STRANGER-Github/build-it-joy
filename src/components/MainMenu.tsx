import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "@/assets/main-logo-without-bg.png";

export interface MainMenuItem {
  name: string;
  href: string;
}

interface MainMenuProps {
  items: MainMenuItem[];
  title: string;
  className?: string;
}

const MainMenu = ({ items, className = "" }: MainMenuProps) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      {/* Fixed logo at top-right (only on desktop) */}
      <div className="hidden md:block fixed top-6 right-4 z-50">
        <img src={logo} alt="Right Logo" className="h-12 w-auto" />
      </div>

      {/* Desktop Sidebar */}
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
                className={`block text-sm md:text-xl font-medium transition-colors duration-200 ${
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
    </>
  );
};

export default MainMenu;
