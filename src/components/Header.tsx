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

  const navigationItems: NavItem[] = [
    {
      name: "HOME",
      href: "/home",
      icon: <FiHome />,
      children: [
        { name: "Overview", href: "/home/overview" },
        { name: "Updates", href: "/home/updates" },
      ],
    },
    {
      name: "ABOUT",
      href: "/about",
      icon: <FiUser />,
      children: [
        { name: "Our Story", href: "/about/our-story" },
        {
          name: "Vision & Mission",
          href: "/about/vision-mission",
          children: [
            { name: "Vision", href: "/about/vision-mission/vision" },
            { name: "Mission", href: "/about/vision-mission/mission" },
          ],
        },
        { name: "Leadership", href: "/about/leadership" },
      ],
    },
    {
      name: "ACADEMICS",
      href: "/academics",
      icon: <FiBookOpen />,
      children: [
        { name: "Programs", href: "/academics/programs" },
        { name: "Syllabus", href: "/academics/syllabus" },
      ],
    },
    {
      name: "PEOPLE",
      href: "/people",
      icon: <FiUsers />,
      children: [
        { name: "Faculty", href: "/people/faculty" },
        { name: "Students", href: "/people/students" },
      ],
    },
    {
      name: "ADMISSION",
      href: "/admission",
      icon: <FiInbox />,
      children: [
        { name: "Apply Now", href: "/admission/apply" },
        { name: "Process", href: "/admission/process" },
      ],
    },
    {
      name: "LIFE",
      href: "/life",
      icon: <FiGrid />,
      children: [
        { name: "Campus Life", href: "/life/campus" },
        { name: "Clubs", href: "/life/clubs" },
      ],
    },
  ];

  const toggleExpand = (path: string) => {
    setExpandedPaths((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

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

      {/* Mobile Hamburger Top Bar */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-[60] flex justify-end px-4 py-3 transition-colors duration-300 ${
          mobileOpen ? "bg-[#0F2341]/10 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <button onClick={() => setMobileOpen(true)} className="p-2 rounded-md">
          <FiMenu size={24} className="text-black" />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[70] bg-[#0F2341]/90 backdrop-blur-md text-white overflow-y-auto transition-all duration-300">
          {/* Close Button */}
          <div className="flex justify-end px-6 py-4">
            <button
              onClick={() => {
                console.log("Close clicked");
                setMobileOpen(false);
              }}
              className=" text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <FiX size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-6 pb-10">{renderMenuItems(navigationItems)}</div>
        </div>
      )}
    </>
  );
}
