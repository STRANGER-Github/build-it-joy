"use client"

import { useLocation, Link } from "react-router-dom"
import {
  FiHome,
  FiUsers,
  FiBookOpen,
  FiUser,
  FiInbox,
  FiGrid,
} from "react-icons/fi"

export default function Header() {
  const location = useLocation()
  const pathname = location.pathname

  const navigationItems = [
    { name: "HOME", href: "/home", icon: <FiHome className="w-4 h-4" /> },
    { name: "ABOUT ", href: "/about", icon: <FiUser className="w-4 h-4" /> },
    { name: "ACADEMICS", href: "/academics", icon: <FiBookOpen className="w-4 h-4" /> },
    { name: "PEOPLE", href: "/people", icon: <FiUsers className="w-4 h-4" /> },
    { name: "ADMISSION", href: "/admission", icon: <FiInbox className="w-4 h-4" /> },
    { name: "Life", href: "/life", icon: <FiGrid className="w-4 h-4" /> },
  ]

  return (
    <header className="fixed bottom-0 left-0 right-0 bg-[#0F2341] text-white z-50 border-t border-gray-700">
      <div className="md:container sm:mx-auto md:mx-auto md:max-w-7xl  md:px-16">
        {/* Desktop and Tablet Navigation (horizontal inline icons + text) */}
        <nav className="hidden md:flex justify-between items-center py-4">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                  isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Mobile Navigation (stacked grid below logo) */}
        <div className="md:hidden px-[1rem] py-4 text-center">
          {/* Logo */}
          

          {/* Navigation */}
          <div className="grid grid-cols-6 gap-4">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex flex-col items-center text-[10px] font-medium uppercase tracking-wide transition-colors ${
                    isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <div className="mb-1">{item.icon}</div>
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
