import Header from "@/components/Header"
import MainMenu, { MainMenuItem } from "@/components/MainMenu"
import Faculty1 from "@/assets/People/faculty1.png";
import Faculty2 from "@/assets/People/faculty2.png";
import Faculty3 from "@/assets/People/faculty3.png";
import Faculty4 from "@/assets/People/faculty4.png";


const peopleMenuItems: MainMenuItem[] = [
  { name: "Faculty Directory", href: "/people/faculty" },
  { name: "Faculty Development Program", href: "/people/staff" },
  { name: "Faculty Publications", href: "/people/alumni" },
  { name: "Faculty Achievements", href: "/people/visiting" },
  { name: "Student Achievement", href: "/people/student-achievements" },
]

const facultyList = [
  {
    name: "Ar. Jigesh Patel",
    title: "Assistant Professor",
    qualification: "B. Arch",
    experience: "11 Years",
    teaching: "08 Years",
    image: Faculty1,  
  },
  {
    name: "Ar. Swapnil Ambre",
    title: "Assistant Professor",
    qualification: "B. Arch",
    experience: "13 Years",
    teaching: "05 Years",
    image: Faculty2,
  },
  {
    name: "Ar. Pranali Ohale",
    title: "Assistant Professor",
    qualification: "B. Arch, M.Arch. (Architecture Education)",
    experience: "06 Years",
    teaching: "02 Years",
    image: Faculty3,
  },
  {
    name: "Ar. Sachin Patil",
    title: "Assistant Professor",
    qualification: "B. Arch",
    experience: "13 Years",
    teaching: "09 Years",
    image: Faculty4,
  },
];

const People = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6 md:mr-64">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-left tracking-wide">
              PEOPLE
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {facultyList.map((faculty, index) => (
                <div key={index} className="text-left">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-30 h-40 mx-auto rounded-full object-cover grayscale"
                  />
                  <div className="mt-4 text-sm text-gray-800 leading-relaxed">
                    <p className="font-semibold">{faculty.name}</p>
                    <p>{faculty.title}</p>
                    <p>{faculty.qualification}</p>
                    <p>{faculty.experience} experience,</p>
                    <p>Teaching experience – {faculty.teaching}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <MainMenu title="People" items={peopleMenuItems} />
      </div>

      <Header />
    </div>
  )
}

export default People
