import Header from "@/components/Header";
import MainMenu, { MainMenuItem } from "@/components/MainMenu";

const academicMenuItems: MainMenuItem[] = [
  { name: "Our Academic Philosophy", href: "/academics/philosophy" },
  { name: "Programs", href: "/academics/programs" },
  { name: "Academic Calendar", href: "/academics/calendar" },
  { name: "Courses Objectives", href: "/academics/objectives" },
  { name: "Programme Outcomes", href: "/academics/outcomes" },
  { name: "NEP 2020 Preparedness", href: "/academics/nep-2020" },
  { name: "Swayam", href: "/academics/swayam" },
  // { name: "Indian Knowledge Systems", href: "/academics/knowledge-systems" },
  // { name: "Indian Development Foundation", href: "/academics/development-foundation" },
  { name: "Syllabus", href: "/academics/syllabus" },
];

const academicSections = [
  {
    title: "Programs & Curriculum",
    content: `Smt. K.L. Tiwari College of Architecture (SKLTCOA) offers a 5-year full-time Bachelor of Architecture (B.Arch) program, approved by the Council of Architecture (COA) and affiliated with the University of Mumbai. Our 10-semester curriculum blends creativity, technical expertise, and cultural awareness, covering design studios, architectural theory and history, building construction, environmental studies, structural systems, professional practice, and urban design. Each subject is designed to help students master both the artistic and scientific aspects of architecture, ensuring a balance between tradition, innovation, and sustainability.`,
  },
  {
    title: "Learning Approach",
    content: `At SKLTCOA, learning goes beyond classrooms through a blend of studio-based training and field exposure. Students participate in workshops and seminars led by industry experts, site visits to heritage and modern projects, and study tours for real-world learning. Model making, prototyping, and collaborative projects encourage hands-on problem-solving and teamwork. This immersive approach ensures that students not only gain technical skills but also develop the confidence and creativity required for professional practice.`,
  },
  {
    title: "Facilities, Assessment & Growth",
    content: `Our campus offers inspiring spaces for learning, including well-equipped design studios, a construction yard for hands-on building techniques, a material museum, a computer lab with advanced design software, and a library with rich resources. Continuous assessment through studio juries, portfolio reviews, assignments, and practical evaluations ensures steady progress. With experienced faculty, strong industry connections, and a focus on sustainability and innovation, SKLTCOA nurtures well-rounded architects ready to shape better communities and a better future.`,
  },
];

const Academics = () => {
  return (
    <div className="min-h-screen pb-10 bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6 md:p-10">
          <div className="max-w-8xl ">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-left tracking-wide">
              Academics
            </h1>

            <div className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify space-y-8">
              {academicSections.map((section, index) => (
                <div key={index}>
                  <p className="font-semibold mb-2">{section.title}</p>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside className="w-full md:w-64 lg:w-80">
          <MainMenu title="Academics" items={academicMenuItems} />
        </aside>
      </div>

      <Header />
    </div>
  );
};

export default Academics;
