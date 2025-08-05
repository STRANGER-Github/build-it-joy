import { useState } from "react";
import { X, Menu, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

interface SubMenuGroup {
  title: string;
  items: { name: string; href: string }[];
}

interface MobileNavOverlayProps {
  mainMenus: SubMenuGroup[]; // each group is a top-level with its children
  logoSrc: string;
  logoAlt?: string;
}

export default function MobileNavOverlay({ mainMenus, logoSrc, logoAlt = "SKLTCoA Logo" }: MobileNavOverlayProps) {
  const [open, setOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleGroup = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <>
      {/* Hamburger + Logo bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white shadow">
        <div className="flex items-center gap-3">
          {/* Logo, scaled down if wide */}
          <img src={logoSrc} alt={logoAlt} className="h-10 max-w-[160px] object-contain" />
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="text-[#0F2341] p-2 rounded-md focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-[#0F2341] text-white flex flex-col">
          {/* Top bar with logo + close */}
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <img src={logoSrc} alt={logoAlt} className="h-12 max-w-[180px] object-contain" />
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-white p-2 rounded-md focus:outline-none"
            >
              <X size={28} />
            </button>
          </div>

          {/* Scrollable menu groups */}
          <div className="overflow-y-auto flex-1 px-6 py-4 space-y-6">
            {mainMenus.map((group, idx) => (
              <div key={group.title} className="border-b border-white/20 pb-4">
                <button
                  onClick={() => toggleGroup(idx)}
                  className="w-full flex justify-between items-center text-xl font-semibold uppercase tracking-wide"
                >
                  <span>{group.title}</span>
                  {expandedIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedIndex === idx && (
                  <div className="mt-3 bg-gray-50 text-gray-800 rounded-lg overflow-hidden shadow-inner">
                    {group.items.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-3 border-b last:border-b-0 hover:bg-gray-100 transition"
                        onClick={() => setOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Optional footer or CTA */}
          <div className="px-6 py-4 text-sm">
            <p className="opacity-80">© {new Date().getFullYear()} SKLTCoA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
