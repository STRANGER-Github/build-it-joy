import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, ChevronUp } from "lucide-react"

export interface MainMenuItem {
  name: string
  href: string
}

interface MainMenuProps {
  items: MainMenuItem[]
  title: string // page title e.g., "Academics"
  className?: string
}

const MainMenu = ({ items, title, className = "" }: MainMenuProps) => {
  const location = useLocation()
  const pathname = location.pathname
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:block md:w-64 md:fixed right-0 top-20 px-4 py-4 bg-transparent text-right ${className}`}
      >
        <nav className="space-y-3">
          {items.map((item) => {
            const isActive = pathname === item.href
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
            )
          })}
        </nav>
      </aside>

      {/* Mobile Accordion Menu */}
      <div className={`block md:hidden px-4 mt-6 ${className}`}>
        <button
          className="flex items-center justify-between w-full text-left border-b pb-2 text-blue-700 font-semibold text-base underline"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title.toUpperCase()}
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {isOpen && (
          <nav className="space-y-2 mt-4">
            {items.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-700 font-semibold underline"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </>
  )
}

export default MainMenu
