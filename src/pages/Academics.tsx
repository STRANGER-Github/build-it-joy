import Header from "@/components/Header"
import MainMenu, { MainMenuItem } from "@/components/MainMenu"

const academicMenuItems: MainMenuItem[] = [
  { name: "Our Academic Philosophy", href: "/academics/philosophy" },
  { name: "Programs", href: "/academics/programs" },
  { name: "Academic Calendar", href: "/academics/calendar" },
  { name: "Courses Objectives", href: "/academics/objectives" },
  { name: "Programme Outcomes", href: "/academics/outcomes" },
  { name: "NEP 2020 Preparedness", href: "/academics/nep-2020" },
  { name: "Swayam", href: "/academics/swayam" },
  { name: "Indian Knowledge Systems", href: "/academics/knowledge-systems" },
  { name: "Indian Development Foundation", href: "/academics/development-foundation" },
  { name: "Syllabus", href: "/academics/syllabus" },
]

const Academics = () => {
  return (
    <div className="min-h-screen pb-10 bg-gray-50 ">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6 md:mr-64">
          {/* Your main academic content goes here */}
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-left tracking-wide">
              Academics
            </h1>

            <div className="text-gray-800 text-base leading-relaxed space-y-6 text-justify">
              <p className="font-semibold">
                Programs & Curriculum
              </p>
              <p>
                Smt. K.L. Tiwari College of Architecture (SKLTCOA) offers a 5-year full-time Bachelor of Architecture (B.Arch) program, approved by the Council of Architecture (COA) and affiliated with the University of Mumbai. Our 10-semester curriculum blends creativity, technical expertise, and cultural awareness, covering design studios, architectural theory and history, building construction, environmental studies, structural systems, professional practice, and urban design. Each subject is designed to help students master both the artistic and scientific aspects of architecture, ensuring a balance between tradition, innovation, and sustainability.
              </p>

              <p className="font-semibold">
                Learning Approach
              </p>
              <p>
                At SKLTCOA, learning goes beyond classrooms through a blend of studio-based training and field exposure. Students participate in workshops and seminars led by industry experts, site visits to heritage and modern projects, and study tours for real-world learning. Model making, prototyping, and collaborative projects encourage hands-on problem-solving and teamwork. This immersive approach ensures that students not only gain technical skills but also develop the confidence and creativity required for professional practice.
              </p>

              <p className="font-semibold">
                Facilities, Assessment & Growth
              </p>
              <p>
                Our campus offers inspiring spaces for learning, including well-equipped design studios, a construction yard for hands-on building techniques, a material museum, a computer lab with advanced design software, and a library with rich resources. Continuous assessment through studio juries, portfolio reviews, assignments, and practical evaluations ensures steady progress. With experienced faculty, strong industry connections, and a focus on sustainability and innovation, SKLTCOA nurtures well-rounded architects ready to shape better communities and a better future.
              </p>

            </div>
          </div>

        </main>

        <MainMenu title="Academics" items={academicMenuItems} />

      </div>

      <Header />
    </div>
  )
}

export default Academics
