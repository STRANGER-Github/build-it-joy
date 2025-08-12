import Header from "@/components/Header";
import MainMenu, { MainMenuItem } from "@/components/MainMenu";

const aboutMenuItems: MainMenuItem[] = [
  { name: "About Rahul Education", href: "/about/rahul-education" },
  { name: "Our Management", href: "/about/management" },
  { name: "About SKLTCOA", href: "/about/skltcoa" },
  { name: "Our Principal", href: "/about/principal" },
  { name: "Vision and Mission", href: "/about/vision-mission" },
  { name: "College Brochure", href: "/about/brochure" },
];

const VisionAndMission = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="flex flex-col md:flex-row">
        {/* Main content */}
        <main className="flex-1 p-6 md:p-10">
          <div className="max-w-8xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-12 tracking-wide">
              Our Vision, Mission & Goals
            </h1>

            {/* Vision & Mission grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Vision</h2>
                <p className="text-sm lg:leading-[2] sm:text-base md:text-lg lg:text-xl  text-gray-800 text-justify">
                  To Be A Global Leader In Architectural Education, Shaping Empathetic, Innovative, And Socially Responsible Architects. We Envision Architecture That Harmonizes Humanity With Nature, Preserves Cultures, Heritage, Promotes Sustainability, And Creates Inclusive, Inspiring Spaces.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">Mission</h2>
                <p className="text-sm sm:text-base lg:leading-[2] md:text-lg lg:text-xl  text-gray-800 text-justify">
                  To Deliver Immersive, Hands-On Education That Fosters Critical Thinking And Creativity. We Emphasize Cultural Identity And Unveil The Narratives Of The Built And The Un-Built Environment, Align With The UN Sustainable Development Goals, And Integrate Interdisciplinary Insights From Anthropology To Environmental Science. Our Goal Is To Empower Students As Socially Conscious Architects Driving Sustainable, Inclusive, And Transformative Design.
                </p>
              </div>
            </div>
<hr />
            {/* Goals */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Goals</h2>
              <ul className=" space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed text-justify">
                <li>Academic Excellence: Blend Theory And Practice To Cultivate Creativity, Critical Thinking, And Problem-Solving And Emphasise On Research Driven Academic Program.</li>
                <li>Preservation: Lead Restoration And Beautification Of Heritage Sites, Narratives, Communities Etc. To Instill A Respect For Identity.</li>
                <li>Sustainability: Champion Eco-Conscious Design Aligned With Global Sustainability Goals.</li>
                <li>Social Responsibility: Design Inclusive Spaces That Address Diversity, Equality, And Community Well-Being.</li>
                <li>Innovation: Foster Forward-Thinking, Technology-Driven Architectural Solutions.</li>
                <li>Global Leadership: Prepare Architects As Global Citizens And Advocates For Sustainable Futures.</li>
                <li>Holistic Growth: Nurture Intellectual, Ethical, And Emotional Resilience For Lifelong Professional Success.</li>
              </ul>
            </div>
          </div>
        </main>

        {/* Sidebar menu */}
        <aside className="w-full md:w-64 lg:w-72 p-4">
          <MainMenu title="About" items={aboutMenuItems} />
        </aside>
      </div>

      <Header />
    </div>
  );
};

export default VisionAndMission;
