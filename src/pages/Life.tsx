import { useState } from "react"
import { Link } from "react-router-dom"
import Life from "@/assets/life.jpg";
import Skills from "@/assets/skills.jpg";
import Learning from "@/assets/learning.jpg";
import Header from "@/components/Header";

const sections = [
  {
    title: "Life",
    subtitle: "At SKLTCoA",
    href: "/life/",
    image: Life,
    bgColor: "bg-blue-900",
  },
  {
    title: "Skills",
    subtitle: "At SKLTCoA",
    href: "/skills",
    image: Skills,
    bgColor: "bg-blue-600",
  },
  {
    title: "Learnings",
    subtitle: "At SKLTCoA",
    href: "/learnings",
    image: Learning,
    bgColor: "bg-blue-300",
  },
]

export default function LandingBlocks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      {sections.map(({ title, subtitle, href, image, bgColor }, index) => {
        const isHovered = index === hoveredIndex;
        
        // On desktop (horizontal), width changes
        // On mobile (vertical), height changes (flex-grow controls it)
        // Tailwind doesn't allow conditionally switching flex basis in one class, so control flex-grow:
        // We'll set flex-grow high for hovered, low for others.

        // Using custom inline style for flex-grow to handle smooth transition.
        // flex-grow: 6 for hovered, 2 for others, 1 for no hover

        let flexGrowValue = 1;
        if (hoveredIndex === null) {
          flexGrowValue = 1;
        } else if (isHovered) {
          flexGrowValue = 6;
        } else {
          flexGrowValue = 2;
        }

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ flexGrow: flexGrowValue, transition: "flex-grow 0.5s ease-in-out" }}
            className={`relative overflow-hidden flex flex-col justify-center items-center cursor-pointer ${bgColor}`}
          >
            {/* Image fades in on hover */}
            <div
              className={`absolute inset-0 grayscale bg-center bg-cover transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* Overlay */}
            <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${isHovered ? "bg-opacity-30" : "bg-opacity-40"}`} />
            
            {/* Text */}
            <div className="relative z-10 text-white text-center px-4">
              <Link to={href} className="inline-block">
                <h2 className={`text-2xl md:text-3xl font-bold transition duration-300 ${isHovered ? "underline" : ""}`}>
                  {title}
                </h2>
                <p className="text-md md:text-lg font-light">{subtitle}</p>
              </Link>
            </div>
          </div>
        )
      })}
      <Header />
    </div>
  )
}
