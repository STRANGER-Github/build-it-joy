import { useState } from "react";
import { Link } from "react-router-dom";
import Life from "@/assets/life.jpg";
import Skills from "@/assets/skills.jpg";
import Learning from "@/assets/learning.jpg";
import Header from "@/components/Header";

const sections = [
  {
    title: "Learnings",
    subtitle: "At SKLTCoA",
    href: "/life/learnings-at-skltcoa",
    image: Learning,
    bgColor: "bg-blue-300",
  },
  {
    title: "Life",
    subtitle: "At SKLTCoA",
    href: "/life/life-at-skltcoa",
    image: Life,
    bgColor: "bg-blue-900",
  },
  {
    title: "Skills",
    subtitle: "At SKLTCoA",
    href: "/life/skills-at-skltcoa",
    image: Skills,
    bgColor: "bg-blue-600",
  },
];

export default function LandingBlocks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row min-h-screen pb-10 overflow-hidden">
      {sections.map(({ title, subtitle, href, image, bgColor }, index) => {
        const isHovered = index === hoveredIndex;

        // Set flex-grow values for hover effect
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
            className={`relative flex flex-col justify-center items-center cursor-pointer ${bgColor} min-h-[33.33vh] md:min-h-0`}
          >
            {/* Background Image: Always visible, scale on hover */}
            <div
              className={`absolute grayscale inset-0 bg-center bg-cover transition-transform duration-700 transform ${isHovered ? "scale-110" : "scale-100"}`}
              style={{ backgroundImage: `url(${image})` }}
            />

            {/* Dark Overlay */}
            <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${isHovered ? "bg-opacity-30" : "bg-opacity-40"}`} />

            {/* Text Content */}
            <div className="relative z-10 text-white text-center px-4">
              <Link to={href} className="inline-block">
                <h2 className={`text-2xl md:text-3xl font-bold transition duration-300 ${isHovered ? "underline" : ""}`}>
                  {title}
                </h2>
                <p className="text-md md:text-lg font-light">{subtitle}</p>
              </Link>
            </div>
          </div>
        );
      })}

      {/* Header at bottom on mobile */}
      <div className="w-full md:absolute md:bottom-0">
        <Header />
      </div>
    </div>
  );
}









// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Life from "@/assets/life.jpg";
// import Skills from "@/assets/skills.jpg";
// import Learning from "@/assets/learning.jpg";
// import Header from "@/components/Header";

// const sections = [
//   {
//     title: "Life",
//     subtitle: "At SKLTCoA",
//     href: "/life/",
//     image: Life,
//     bgColor: "bg-blue-900",
//   },
//   {
//     title: "Skills",
//     subtitle: "At SKLTCoA",
//     href: "/skills",
//     image: Skills,
//     bgColor: "bg-blue-600",
//   },
//   {
//     title: "Learnings",
//     subtitle: "At SKLTCoA",
//     href: "/learnings",
//     image: Learning,
//     bgColor: "bg-blue-300",
//   },
// ];

// export default function LandingBlocks() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
//         {sections.map(({ title, subtitle, href, image, bgColor }, index) => {
//           const isHovered = index === hoveredIndex;

//           let flexGrowValue = 1;
//           if (hoveredIndex === null) {
//             flexGrowValue = 1;
//           } else if (isHovered) {
//             flexGrowValue = 6;
//           } else {
//             flexGrowValue = 2;
//           }

//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               style={{ flexGrow: flexGrowValue, transition: "flex-grow 0.5s ease-in-out" }}
//               className={`relative overflow-hidden flex flex-col justify-center items-center cursor-pointer ${bgColor}`}
//             >
//               <div
//                 className={`absolute inset-0 grayscale bg-center bg-cover transition-opacity duration-700 ${
//                   isHovered ? "opacity-100" : "opacity-0"
//                 }`}
//                 style={{ backgroundImage: `url(${image})` }}
//               />
//               <div
//                 className={`absolute inset-0 bg-black transition-opacity duration-700 ${
//                   isHovered ? "bg-opacity-30" : "bg-opacity-40"
//                 }`}
//               />
//               <div className="relative z-10 text-white text-center px-4">
//                 <Link to={href} className="inline-block">
//                   <h2
//                     className={`text-2xl md:text-3xl font-bold transition duration-300 ${
//                       isHovered ? "underline" : ""
//                     }`}
//                   >
//                     {title}
//                   </h2>
//                   <p className="text-md md:text-lg font-light">{subtitle}</p>
//                 </Link>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <Header />
//     </div>
//   );
// }
