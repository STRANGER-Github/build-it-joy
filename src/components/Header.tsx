"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLocation } from "react-router-dom"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const pathname = usePathname()
  const location = useLocation()
const pathname = location.pathname

  const navigationItems = [
    { name: "HOME", href: "/home" },
    { name: "ABOUT US", href: "/about" },
    { name: "ACADEMICS", href: "/academics" },
    { name: "PEOPLE", href: "/people" },
    { name: "ADMISSION", href: "/admission" },
    { name: "Life@SKLTCOA", href: "/life" },
  ]

  return (
    <header className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white z-50 border-t border-gray-700">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center py-4 space-x-8">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <div key={item.name} className="flex items-center space-x-2">
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 uppercase tracking-wide ${
                    isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    isActive ? "bg-white opacity-100 scale-110" : "bg-white opacity-60"
                  }`}
                ></div>
              </div>
            )
          })}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="text-lg font-semibold">
              SKLTCOA
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-700 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute bottom-full left-0 right-0 bg-gray-800 border-t border-gray-700">
              <nav className="flex flex-col space-y-3 p-4">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center justify-between py-2 px-2 rounded-md transition-colors duration-200 ${
                        isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span
                        className={`text-sm font-medium uppercase tracking-wide ${isActive ? "font-semibold" : ""}`}
                      >
                        {item.name}
                      </span>
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          isActive ? "bg-white opacity-100 scale-110" : "bg-white opacity-60"
                        }`}
                      ></div>
                    </Link>
                  )
                })}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
