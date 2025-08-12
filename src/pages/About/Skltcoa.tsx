import Header from "@/components/Header";
import MainMenu, { MainMenuItem } from "@/components/MainMenu";

const aboutMenuItems: MainMenuItem[] = [
  { name: "About Rahul Education", href: "/about/rahul-education" },
  { name: "Our Management", href: "/about/management" },
  { name: "About SKLTCoA", href: "/about/skltcoa" },
  { name: "Our Principal", href: "/about/principal" },
  { name: "Vision and Mission", href: "/about/vision-mission" },
  { name: "College Brochure", href: "/about/brochure" },
];

const Skltcoa = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="flex flex-col md:flex-row">
        {/* Main content area with padding and max width */}
        <main className="flex-1 p-6 md:p-10">
          <div className="max-w-8xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 tracking-wide">
            ABOUT SKLTCOA
            </h1>

            <div className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl lg:leading-[2] space-y-6 text-justify">
              <p>
                <b>Welcome to Smt. K.L. Tiwari College of Architecture (SKLTCOA)</b>
              </p>  
              <p>
                <strong>Smt. K.L. Tiwari College of Architecture (SKLTCOA)</strong> has emerged as a center of excellence in architectural education since its establishment in 2016. Affiliated with the <strong>University of Mumbai</strong>, SKLTCOA has built a strong foundation for aspiring architects, combining academic rigor with a commitment to holistic development. Recognized by the <strong>Government of Maharashtra</strong>, approved by the <strong>Council of Architecture (COA)</strong> and the <strong>Directorate of Technical Education (DTE)</strong>, Maharashtra, and certified under <strong>Section 2(f) of the UGC Act, 1956</strong>, the institution ensures adherence to the highest standards of architectural education. Adding to its credibility is its <strong>ISO Certified</strong> educational system, which reflects a dedication to quality assurance, innovation, and continuous improvement.
              </p>

              <p>
                SKLTCOA offers two flagship programs: the <strong>Bachelor of Architecture (B.Arch.)</strong> and the <strong>Diploma in Architecture</strong>. The five-year B.Arch. program is a robust blend of design, theory, technology, and sustainability, aimed at equipping students with the skills needed to thrive in the multidisciplinary field of architecture. Meanwhile, the Diploma in Architecture provides a foundational pathway for students, emphasizing principles of design, construction, and environmental stewardship, serving both as an entry point into the profession and a stepping stone for advanced studies.
              </p>

              <p>
                The institution prides itself on its dynamic teaching methodology, which integrates principles of <strong>constructivism</strong>, <strong>interdisciplinary collaboration</strong>, and <strong>experiential learning</strong>. Students at SKLTCOA benefit from advanced infrastructure, including design studios, digital labs, fabrication workshops, and a well-stocked library, creating an environment that fosters creativity and innovation. The programs emphasize <strong>sustainability</strong> and <strong>heritage conservation</strong>, preparing students to design solutions that balance modern innovation with cultural sensitivity.
              </p>
            </div>
          </div>
          <br />
          <hr />
        </main>

        {/* Sidebar menu with fixed width on md+ */}
        <aside className="w-full md:w-64 lg:w-80">
          <MainMenu title="About" items={aboutMenuItems} />
        </aside>
      </div>

      <Header />
    </div>
  );
};

export default Skltcoa;
