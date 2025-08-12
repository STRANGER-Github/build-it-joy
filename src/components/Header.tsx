"use client";

import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiBookOpen,
  FiUser,
  FiInbox,
  FiGrid,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import logo from "@/assets/main-logo-with-bg.png";

// Define interface
interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedPaths, setExpandedPaths] = useState<string[]>([]);

  // Define nav items
  const navigationItems: NavItem[] = [
    {
      name: "HOME",
      href: "/home",
      icon: <FiHome className="w-4 h-4" />,
    },
    {
      name: "ABOUT",
      href: "/about",
      icon: <FiUser className="w-4 h-4" />,
      children: [
        { name: "Rahul Education", href: "/about/rahul-education" },
        // { name: "Our Management", href: "/about/management" },
        { name: "About SKLTCoA", href: "/about/skltcoa" },
        { name: "Our Principal", href: "/about/principal" },
        { name: "Vision And Mission", href: "/about/vision-mission" },
        { name: "College Brochure", href: "/about/brochure" },
      ],
    },
    {
      name: "ACADEMICS",
      href: "/academics",
      icon: <FiBookOpen className="w-4 h-4" />,
    },
    {
      name: "PEOPLE",
      href: "/people",
      icon: <FiUsers className="w-4 h-4" />,
    },
    {
      name: "ADMISSION",
      href: "/admission",
      icon: <FiInbox className="w-4 h-4" />,
    },
    {
      name: "LIFE",
      href: "/life",
      icon: <FiGrid className="w-4 h-4" />,
    },
  ];

  // Toggle expand
  const toggleExpand = (path: string) => {
    setExpandedPaths((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  // Recursive render for nested items
  const renderMenuItems = (items: NavItem[], pathPrefix = "") => {
    return items.map((item) => {
      const fullPath = `${pathPrefix}${item.href}`;
      const isActive = pathname === item.href;
      const isExpanded = expandedPaths.includes(fullPath);

      return (
        <div key={fullPath} className="ml-2 mb-1">
          <div className="flex justify-between items-center">
            <Link
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex gap-2 items-center text-sm px-3 py-2 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-white/10 text-white border border-blue-500 shadow-inner"
                  : "text-gray-200 hover:bg-white/10"
              }`}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.name}
            </Link>
            {item.children && (
              <button
                className="p-1 text-gray-300"
                onClick={() => toggleExpand(fullPath)}
              >
                {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            )}
          </div>

          {isExpanded && item.children && (
            <div className="ml-4 border-l border-gray-700 pl-2">
              {renderMenuItems(item.children, fullPath)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      {/* Desktop Footer Header */}
      <header className="fixed bottom-0 left-0 right-0 bg-[#0F2341] text-white z-50 border-t border-gray-700 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex gap-2 items-center text-sm uppercase ${
                pathname.startsWith(item.href)
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </header>

      {/* Mobile Top Bar (hamburger stays fixed) */}
      <div
  className={`md:hidden flex justify-end items-center px-4 py-3 transition-colors duration-300 ${
    mobileOpen
      ? "bg-[#0F2341]/10 backdrop-blur-md shadow-md"
      : "bg-transparent"
  }`}
  style={{ position: "absolute", top: 0, right: 0, zIndex: 60 }}
>

        {/* Hamburger Menu */}
        <button onClick={() => setMobileOpen(true)} className="p-5">
          <FiMenu size={24} className="text-black" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[70] bg-[#0F2341]/90 backdrop-blur-md text-white overflow-y-auto">
          {/* Header inside overlay */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
            <img src={logo} alt="Logo" className="rounded-xl h-9 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-gray-300"
              aria-label="Close"
            >
              <FiX size={28} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="px-6 pb-10">{renderMenuItems(navigationItems)}</div>
        </div>
      )}

      {/* Mobile Bottom Nav Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0F2341] border-t border-gray-700 z-50">
        <div className="grid grid-cols-6 gap-1 px-3 py-2 text-center">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center text-[10px] font-medium uppercase tracking-wide transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <div className="mb-1">{item.icon}</div>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
