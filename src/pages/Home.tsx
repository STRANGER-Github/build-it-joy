import React from "react";
import { Link } from "react-router-dom"; // ✅ React Router import
import ScrollingBanner from "@/components/ScrollingBanner";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";

const videoData = [
  {
    id: "aW3N1bzbjvg",
    title: "Space & Architectural Education",
    desc: "Insight into collaborative and experiential architectural education.",
  },
  {
    id: "nmRzgk39Yis",
    title: "Design as Experience",
    desc: "Making space meaningful through design perspective.",
  },
  {
    id: "yJRoxzS_w40",
    title: "Spatial Toys",
    desc: "Exploring spatial toys and their role in architecture learning.",
  },
  {
    id: "Zvfodpx01Yc",
    title: "Architectural Innovation",
    desc: "New ideas and material experimentation in architecture.",
  },
  {
    id: "vajGEwjNfus",
    title: "Community Engagement",
    desc: "How architecture interacts with social contexts.",
  },
  {
    id: "m6Eh9sOHogA",
    title: "Orientation & Introduction",
    desc: "First year orientation and foundational concepts.",
  },
  {
    id: "2I4T5C_8z6Y",
    title: "Faculty Perspectives",
    desc: "Faculty talking about teaching philosophy and methods.",
  },
  {
    id: "cs2EANLs64g",
    title: "Environment & Space",
    desc: "Discussion on environment, space, and design thinking.",
  },
];

// Define routes for each nav item
const navLinks = [
  { label: "COURSES", path: "/courses" },
  { label: "LIFE@SKLTCOA", path: "/life" },
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
      <main className="p-3">
        <div className="max-w-8xl mx-auto px-4">
          {/* Navigation Menu */}
          <nav className="my-2">
            <div className="max-w-7xl mx-auto">
              <ul className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-4 sm:gap-8 text-gray-700 font-semibold text-base lg:text-lg">
                {navLinks.map(({ label, path }) => (
                  <li key={label}>
                    <Link to={path}>
                      <div className="flex items-center gap-2 whitespace-nowrap px-3 py-2 hover:text-gray-900 hover:underline transition cursor-pointer">
                        <ArrowRight className="w-4 h-4 shrink-0" />
                        {label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>


          {/* YouTube Video Gallery with Titles & Descriptions */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {videoData.map(({ id, title, desc }) => (
              <div key={id} className="w-full rounded-lg overflow-hidden shadow-lg bg-white flex flex-col">
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}?rel=0`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
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
