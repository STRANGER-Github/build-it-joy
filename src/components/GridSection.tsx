"use client"

import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

import architectModel from "@/assets/architect-model.jpeg"
import aboutModel from "@/assets/about-model.png"
import home from "@/assets/home-model.png"
import lifeskltcoa from "@/assets/contact.png"

interface GridSectionProps {
  title: string
  variant: "dark" | "light"
  linkTo?: string
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  isHovered?: boolean
}

const GridSection = ({
  title,
  variant,
  linkTo,
  className,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}: GridSectionProps) => {
  const isLight = variant === "light"

  // Map each title to its image
  const backgroundImages: Record<string, string> = {
    "ARCHITECT": architectModel,
    "ABOUT US": aboutModel,
    "LIFE AT SKLTCOA": home,
    "CONTACT": lifeskltcoa,
  }

  const backgroundImage = backgroundImages[title]

  return (
    <div
      className={cn(
        "relative flex items-center justify-start p-8 cursor-pointer overflow-hidden",
        "transition-all duration-700 ease-in-out",
        isLight
          ? "bg-grid-light text-grid-light-foreground"
          : "bg-grid-dark text-grid-dark-foreground",
        className
      )}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background image */}
      {backgroundImage && (
  <div
    className={cn(
      "absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out",
      "grayscale", // <-- Add this class
      isHovered ? "opacity-100" : "opacity-0"
    )}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  />
)}


      {/* Foreground title */}
      <div className="relative z-10">
        {linkTo ? (
          <Link
            to={linkTo}
            className={cn(
              "text-lg font-normal tracking-[0.2em] uppercase select-none transition-all duration-500 ease-in-out",
              isHovered ? "text-white drop-shadow-lg underline" : ""
            )}
            onClick={(e) => e.stopPropagation()} // prevent full block click
          >
            {title}
          </Link>
        ) : (
          <h2
            className={cn(
              "text-lg font-normal tracking-[0.2em] uppercase select-none transition-all duration-500 ease-in-out",
              isHovered ? "text-white drop-shadow-lg" : ""
            )}
          >
            {title}
          </h2>
        )}
      </div>
    </div>
  )
}

export default GridSection
