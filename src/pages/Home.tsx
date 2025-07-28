import React from "react";
import ScrollingBanner from "@/components/ScrollingBanner";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";
import buildingsketch from "@/assets/bldg-sketch.png";
import enggcollege from "@/assets/engineering-clg.jpg";
import risbuilding from "@/assets/ris-bldg.png";
import stadium from "@/assets/stadium.png";

const Home = () => {
  return (
    <>
      {/* Cinematic scrolling banner at top */}
      <ScrollingBanner />

      {/* Main content below */}
      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Navigation Menu */}
          <nav className="mb-8">
            <ul className="flex flex-wrap gap-14 lg:text-3xl text-gray-600 font-medium">
              {["COURSES", "LIFE@SKLTCOA", "ABOUT US", "EXAMINATION"].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 whitespace-nowrap hover:text-gray-900 px-4 cursor-pointer transition-colors"
                >
                  <ArrowRight className="w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          {/* Image Grid */}
          <div className="grid grid-cols-6 gap-6">
            {/* Top Left - Modern Building (col-span-4) */}
            <div className="relative overflow-hidden rounded-lg shadow-lg col-span-6 md:col-span-4 h-auto md:h-96">
              <img
                src={risbuilding}
                alt="Modern building with colorful glass panels"
                className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Top Right - White Geometric Building (col-span-2) */}
            <div className="relative overflow-hidden rounded-lg shadow-lg col-span-6 md:col-span-2 h-auto md:h-96">
              <img
                src={buildingsketch}
                alt="White building with geometric patterns"
                className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom Left - Stadium (col-span-2) */}
            <div className="relative overflow-hidden rounded-lg shadow-lg col-span-6 md:col-span-2 h-auto md:h-96">
              <img
                src={stadium}
                alt="Stadium with circular architecture"
                className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom Right - Institutional Building (col-span-4) */}
            <div className="relative overflow-hidden rounded-lg shadow-lg col-span-6 md:col-span-4 h-auto md:h-96">
              <img
                src={enggcollege}
                alt="White institutional building"
                className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>

        <Header /> {/* Intentionally placed at bottom */}
      </main>
    </>
  );
};

export default Home;
