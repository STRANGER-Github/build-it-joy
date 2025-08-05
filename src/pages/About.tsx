import Header from "@/components/Header"
import MainMenu, { MainMenuItem } from "@/components/MainMenu"

const aboutMenuItems: MainMenuItem[] = [
  { name: "About Rahul Education", href: "/about/about-ris" },
  { name: "Our Management", href: "/about/management" },
  { name: "About SKLTCoA", href: "/about/skltcoa" },
  { name: "Our Principal", href: "/about/principal" },
  { name: "Vision and Mission", href: "/about/vision-mission" },
  { name: "College Brochure", href: "/about/brochure" },
]

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6 md:mr-64">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-left tracking-wide">
              ABOUT US
            </h1>

            <div className="grid gap-8 md:grid-cols-3 text-gray-800 text-sm md:text-base leading-relaxed text-justify">
              <p>
                The teaching and learning technique used at Smt. K.L. Tiwari College of Architecture encourages
                faculty to map the Programmed Outcome and plan, implement, monitor, and evaluate (through internal
                and external evaluation). The continual assessment that students complete based on the learning
                outcomes of various topics is a reflection of the teaching-learning that takes place in the
                institute. The institution assesses whether Programme Outcomes and Course Outcomes have been attained.
              </p>

              <p>
                At the start of each academic session, the institution develops its own academic calendar
                (for both undergraduate and postgraduate programmes), following the university’s academic calendar.
                The primary goal of coursework delivery or programme outcomes is to provide students with the current
                knowledge and practical skills they will need to handle issues in the future.
              </p>

              <p>
                Through a variety of workshops on classic and modern architectural issues, Smt. K.L. Tiwari College
                of Architecture offers students several opportunities to transform the way that learning is often
                done. Students are exposed to the art of space creation through regular, creative workshops that also
                help to make them aware of built-environment challenges.
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
