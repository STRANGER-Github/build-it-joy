import Header from "@/components/Header"
import MainMenu, { MainMenuItem } from "@/components/MainMenu"

const aboutMenuItems: MainMenuItem[] = [
  { name: "About Rahul Education", href: "/about/rahul-education" },
  { name: "Our Management", href: "/about/management" },
  { name: "About SKLTCoA", href: "/about/skltcoa" },
  { name: "Our Principal", href: "/about/principal" },
  { name: "Vision and Mission", href: "/about/vision-mission" },
  { name: "College Brochure", href: "/about/brochure" },
]

const About = () => {
  return (
    <div className="min-h-screen pb-10 bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6 md:mr-64">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-left tracking-wide">
              ABOUT US
            </h1>

            <div className="grid gap-8 md:grid-cols-3 text-gray-800 text-sm md:text-base leading-relaxed text-justify">
              <p>
                Smt. K.L. Tiwari College of Architecture (SKLTCOA) is dedicated to fostering a learning environment grounded in outcome-based education. At the beginning of each academic year, the institution formulates its academic calendar in line with the University of Mumbai, setting a structured framework for undergraduate and postgraduate programmes. Faculty members at SKLTCOA actively map Programme Outcomes (POs) and Course Outcomes (COs) while planning, implementing, monitoring, and evaluating the academic delivery. Continuous internal and external assessments help ensure that learning objectives are being met and that students are progressing in alignment with the academic goals of the institution.
              </p>

              <p>
                The teaching-learning methodology at SKLTCOA places strong emphasis on reflective practice, allowing faculty to continuously assess and improve their pedagogical strategies. Students engage in outcome-based assessments that measure their understanding of course content and application of knowledge. This approach not only enhances academic performance but also equips students with the skills needed to address real-world architectural challenges with creativity and confidence. The curriculum is designed to integrate current knowledge and practical skills, preparing students for the evolving demands of the architectural profession.
              </p>

              <p>
                Beyond the classroom, SKLTCOA enriches the academic journey through a series of hands-on workshops and interactive sessions. These workshops focus on both traditional and contemporary architectural themes, encouraging students to think critically and innovate. Regular exposure to the art of space creation and built-environment issues helps students develop a deeper understanding of their role as future architects. By embracing a dynamic and experiential model of education, the institution ensures its graduates are not only academically proficient but also socially conscious and professionally prepared.
              </p>
            </div>
            
          </div>
        </main>

        <MainMenu title="About" items={aboutMenuItems} />
      </div>

      <Header />
    </div>
  )
}

export default About
