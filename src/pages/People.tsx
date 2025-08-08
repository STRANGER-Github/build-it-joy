import { useState } from "react";
import Header from "@/components/Header";
import SampleImage1 from "@/assets/People/faculty1.png";
import SampleImage2 from "@/assets/People/faculty2.png";
import SampleImage3 from "@/assets/People/faculty3.png";
import SampleImage4 from "@/assets/People/faculty4.png";

type Faculty = {
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  image: string;
};

const facultyData: Faculty[] = [
  {
    name: "Ar. Neha Bhatia",
    designation: "Assistant Professor",
    qualification: "B. Arch",
    experience: "11 Years, Teaching Experience - 08 Years",
    image: SampleImage1,
  },
  {
    name: "Ar. John Doe",
    designation: "Professor",
    qualification: "M. Arch",
    experience: "15 Years, Teaching Experience - 10 Years",
    image: SampleImage2,
  },
  {
    name: "Ar. Jane Smith",
    designation: "Lecturer",
    qualification: "B. Arch",
    experience: "8 Years, Teaching Experience - 6 Years",
    image: SampleImage3,
  },
  {
    name: "Ar. Mark Lee",
    designation: "Assistant Professor",
    qualification: "M. Arch",
    experience: "12 Years, Teaching Experience - 9 Years",
    image: SampleImage4,
  },
];

// Repeat the pattern to reach 16 entries
const repeatedData = Array.from({ length: 4 }, () => facultyData).flat();

export default function People() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pb-10 bg-gray-100 pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          FACULTIES
        </h1>
        <p className="text-gray-700 text-sm md:text-base max-w-4xl mb-10 leading-relaxed">
          Smt. K. L. Tiwari College Of Architecture has a fully qualified and experienced faculty,
          striving to offer the finest in teaching and research under the able guidance of their
          HODs. Apart from teaching, they are also involved in Research and guiding students through their thesis.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {repeatedData.map((faculty, index) => (
            <div
              key={index}
              className="relative group overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className={`w-full h-auto object-cover grayscale transition-transform duration-500 ease-in-out ${
                  hoveredIndex === index ? "scale-110 grayscale-0" : "scale-100"
                }`}
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 text-white p-4 flex flex-col justify-end transition-opacity duration-500 ease-in-out ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-lg font-semibold">{faculty.name}</h3>
                <p className="text-sm">{faculty.designation}</p>
                <p className="text-sm">{faculty.qualification}</p>
                <p className="text-sm mt-1">{faculty.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Header />
    </div>
  );
}
