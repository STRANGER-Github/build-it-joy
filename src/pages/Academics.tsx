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
    <div className="min-h-screen bg-gray-50 ">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6 md:mr-64">
          {/* Your main academic content goes here */}
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-left tracking-wide">
              Academics
            </h1>

            <div className="text-gray-800 text-base leading-relaxed space-y-6 text-justify">
              <p className="font-semibold">
                Academic Philosophy: Architecture as a Reflection of Humanity and Nature
              </p>
              <p>
                At Smt. K.L. Tiwari College of Architecture (SKLTCOA), architecture is not merely about constructing buildings; it is about constructing ideas, shaping identities, and creating spaces that reflect the deepest values of humanity. Our philosophy is rooted in constructivism, where learning is an active and immersive process, blending theory with practice and reflection with action. For us, architecture is a profound act of creation that balances human needs, cultural identity, and harmony with nature, while fostering sustainable and socially viable solutions.
              </p>

              <p className="font-semibold">
                Humanism: Architecture as the Soul of Society
              </p>
              <p>
                Architecture is the language through which humanity tells its stories. Inspired by the principles of humanism, we believe that every space must serve the human spirit, addressing both physical needs and emotional well-being. At SKLTCOA, our students learn to design spaces that are inclusive, empathetic, and alive with meaning. From homes that nurture families to public spaces that foster connection, architecture becomes a vessel for peaceful coexistence, a stage where humanity finds expression and community thrives.
              </p>

              <p className="font-semibold">
                Constructivism: Learning by Doing and Being
              </p>
              <p>
                Education at SKLTCOA is not a passive transfer of knowledge—it is an active and iterative process of creation. Drawing from constructivist theories by Jean Piaget and Lev Vygotsky, we believe that learning happens through doing, experimenting, and reflecting. Whether it is designing a sustainable housing model, restoring a historic temple, or ideating a new public space, students are at the center of their learning journey, building knowledge brick by brick through real-world applications.
              </p>

              <p>
                In our studios, workshops, and field immersions, students become problem-solvers and innovators, translating abstract concepts into tangible designs. This active learning process ensures that every project is not only an academic exercise but also a meaningful contribution to society and culture.
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
