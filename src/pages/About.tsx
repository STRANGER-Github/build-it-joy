import Header from "@/components/Header";
import MainMenu, { MainMenuItem } from "@/components/MainMenu";
import archSocietyChart from "@/assets/Untitled.png";

const aboutMenuItems: MainMenuItem[] = [
  { name: "About Rahul Education", href: "/about/rahul-education" },
  { name: "Our Management", href: "/about/management" },
  { name: "About SKLTCoA", href: "/about/skltcoa" },
  { name: "Our Principal", href: "/about/principal" },
  { name: "Vision and Mission", href: "/about/vision-mission" },
  { name: "College Brochure", href: "/about/brochure" },
];

const About = () => {
  return (
    <div className="min-h-screen pb-10 bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6 md:p-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-12 tracking-wide">
            ABOUT US
          </h1>

          <div className="grid gap-8 text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl lg:leading-[2] text-justify">
            <p className="bg-white p-4 rounded-md shadow-sm">
              As an architecture school based in the suburbs of Mumbai, we, at SKLTCoA, envision an institution that can create holistic architects with a consciousness of designing for the future, by reimagining the past and embodying their present. Smt. K.L. Tiwari College of Architecture (SKLTCOA) has emerged as a centre of excellence in architectural education since its establishment in 2016. Affiliated with the University of Mumbai, SKLTCOA has built a strong foundation for aspiring architects, combining academic rigour with a commitment to holistic development. Recognised by the Government of Maharashtra, approved by the Council of Architecture (COA) and the Directorate of Technical Education (DTE), Maharashtra, and certified under Section 2(f) of the UGC Act, 1956, the institution ensures adherence to the highest standards of architectural education. Adding to its credibility is its ISO Certified educational system, which reflects a dedication to quality assurance, innovation, and continuous improvement.
            </p>

            <p className="bg-white p-4 rounded-md shadow-sm">
              SKLTCOA offers two flagship programs: The Bachelor of Architecture (B.Arch.) and the Diploma in Architecture. The five-year B.Arch. program is a robust blend of design, theory, technology, and sustainability, aimed at equipping students with the skills needed to thrive in the multidisciplinary field of architecture. Meanwhile, the Diploma in Architecture provides a foundational pathway for students, emphasising principles of design, construction, and environmental stewardship, serving both as an entry point into the profession and a stepping stone for advanced studies.
            </p>
          {/* Chart section */}
          <div className="">
            <img
              src={archSocietyChart}
              alt="Architecture and Society Chart"
              className="w-full max-w-3xl mx-auto"
            />
            <h2 className="text-2xl text-center font-semibold mb-4 text-gray-900">
              Architecture and Society
            </h2>
          </div>

            <p className="bg-white p-4 rounded-md shadow-sm">
              The institution takes pride in its dynamic teaching methodology, which integrates principles of constructivism, interdisciplinary collaboration, and experiential learning. Students at SKLTCOA benefit from advanced infrastructure, including design studios, digital labs, fabrication workshops, and a well-stocked library, creating an environment that fosters creativity and innovation. The programs emphasise sustainability and heritage conservation, preparing students to design solutions that balance modern innovation with cultural sensitivity.
            </p>

            <p className="bg-white p-4 rounded-md shadow-sm">
              As part of the vibrant academic ecosystem of Rahul Education, SKLTCOA has continuously evolved to address the changing demands of the profession. Its affiliation with the University of Mumbai ensures a progressive curriculum that blends theoretical knowledge with practical application. This alignment prepares graduates not only for immediate industry demands but also equips them to lead conversations on global challenges such as urbanisation, climate change, and cultural preservation.
            </p>

            <p className="bg-white p-4 rounded-md shadow-sm">
              Looking to the future, SKLTCOA remains committed to nurturing architects who are not only skilled professionals but also thoughtful leaders and innovators. By integrating cutting-edge technology, global best practices, and a respect for local contexts, the institution continues to shape architects capable of reimagining the built environment and contributing meaningfully to society.
            </p>
          </div>

        </main>

        <aside className="w-full md:w-64 lg:w-80">
          <MainMenu title="About" items={aboutMenuItems} />
        </aside>
      </div>

      <Header />
    </div>
  );
};

export default About;
