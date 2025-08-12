import React from "react";
import { Link } from "react-router-dom"; // ✅ React Router import
import ScrollingBanner from "@/components/ScrollingBanner";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";

const videoData = [
  {
    id: "aW3N1bzbjvg",
    title: "Ru-Ba-Ru",
    desc: "Designing for Safety, Designing for All.",
  },
  {
    id: "nmRzgk39Yis",
    title: "Beyond the Blueprints",
    desc: "This documentary gives a glimpse into the making of the book.",
  },
  {
    id: "yJRoxzS_w40",
    title: "Architecture Campus",
    desc: "Looking to the future, to create, inspire, and drive positive change.",
  },
  {
    id: "Zvfodpx01Yc",
    title: "Films and Media",
    desc: "Films & Media Workshop led by media expert and educator Krunal Acharya.",
  },
  {
    id: "vajGEwjNfus",
    title: "Architectural Design Studio 1",
    desc: "Buildings may shelter people, but culture make them truly alive.",
  },
  {
    id: "m6Eh9sOHogA",
    title: "Architectural Design Studio 2",
    desc: "A village where, social relations, and ecological co-exist in delicate balance.",
  },
  {
    id: "2I4T5C_8z6Y",
    title: "Architectural Design Studio 3",
    desc: "This immersive experience foregrounded the role of architecture as a social act.",
  },
  {
    id: "cs2EANLs64g",
    title: "Architectural Design Studio 4",
    desc: "Focusing on the essence, interdependent communities and designing spaces.",
  },
];

// Define routes for each nav item
const navLinks = [
  { label: "COURSES", path: "/courses" },
  { label: "LIFE@SKLTCA", path: "/life" },
  { label: "ABOUT US", path: "/about" },
  { label: "EXAMINATION", path: "/examination" },
  { label: "ADMISSION", path: "/admission" },
  { label: "CONTACT", path: "/contact" },
];

const Home = () => {
  return (
    <>
      {/* Cinematic scrolling banner at top */}

      <ScrollingBanner />

      {/* Main content below */}
      <main className="">
        <div className="max-w-8xl mx-auto px-4">
          {/* Quick Links Section */}
          <div className="mb-4 mt-4">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-[#0F2341] text-base lg:text-lg">
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path}>
                    <div className="flex items-center gap-2 px-4 py-3 bg-white border border-[#0F2341] rounded-lg shadow-sm hover:bg-[#0F2341] hover:text-white transition-all duration-300 group">
                      <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="whitespace-nowrap">{label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Navigation Menu
          <nav className="mb-3 bg-[#0F2341] ">
            <div className="max-w-7xl mx-auto">
              <ul className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-4 sm:gap-8 text-white  text-base lg:text-lg">
                {navLinks.map(({ label, path }) => (
                  <li key={label}>
                    <Link to={path}>
                      <div className="flex items-center gap-2 whitespace-nowrap py-2  hover:underline transition cursor-pointer">
                        <ArrowRight className="w-4 h-4 shrink-0" />
                        {label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav> */}


          {/* YouTube Video Gallery with Titles & Descriptions */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-12">
            {videoData.map(({ id, title, desc }) => (
              <div key={id} className="w-full rounded-lg overflow-hidden shadow-lg bg-white flex flex-col group">
                {/* Wrap thumbnail and play button in a link */}
                <a
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full lg:h-[12.1rem] h-[12.5rem] overflow-hidden block"
                >
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt={title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-70 rounded-full px-4 py-3 group-hover:bg-opacity-90 transition text-xl">
                      ▶
                    </div>
                  </div>
                </a>

                {/* Video title and description */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 flex-1">{desc}</p>
                </div>
              </div>
            ))}
          </section>



        </div>

        <Header /> {/* Intentionally placed at bottom */}
      </main>
    </>
  );
};

export default Home;
