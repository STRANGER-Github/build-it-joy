import { Link, useLocation } from "react-router-dom"

interface SidebarItem {
  name: string
  href: string
}

interface SidebarProps {
  className?: string
}

export default function LifeSidebar({ className = "" }: SidebarProps) {
  const location = useLocation()
  const pathname = location.pathname

  const sidebarItems: SidebarItem[] = [
    { name: "Our Academic Philosophy", href: "/academics/philosophy" },
    { name: "Programs", href: "/academics/programs" },
    { name: "Academic Calendar", href: "/academics/calendar" },
    { name: "Courses Objectives", href: "/academics/objectives" },
    { name: "Programme Outcomes", href: "/academics/outcomes" },
    { name: "NEP 2020 Preparedness", href: "/academics/nep-2020" },
    { name: "Swayam", href: "/academics/swayam" },
    { name: "Indian Knowledge Systems", href: "/academics/knowledge-systems" },
    { name: "Indian Development Foundation", href: "/academics/development-foundation" },
    { name: "Syllabus", href: "/academics/syllabus" },
  ]

  return (
    <aside
      className={`w-full md:w-60 md:fixed right-0 top-20 px-4 py-2 md:py-4 md:pr-6 bg-transparent text-right ${className}`}
    >
      <nav className="space-y-3">
        {sidebarItems.map((item) => {
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
  )
}
