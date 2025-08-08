import { useState } from "react"
import Header from "@/components/Header"
import MainMenu, { MainMenuItem } from "@/components/MainMenu"

const admissionMenuItems: MainMenuItem[] = [
  { name: "Admission and Eligibility", href: "/admission/process" },
  { name: "Vacancy", href: "/admission/eligibility" },
  { name: "Approval Letters of Admitted Students", href: "/admission/fees" },
  { name: "Admission Notification", href: "/admission/scholarships" },
  { name: "Document Required", href: "/admission/scholarships" },
  { name: "B.Arch", href: "/admission/scholarships" },
  { name: "D.Arch", href: "/admission/scholarships" },
]

const Admission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Replace with actual backend API or email handler
    console.log("Form Submitted:", formData)
    alert("Message submitted!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen pb-10 bg-gray-50 ">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6 md:mr-64">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">ADMISSION</h1>

            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left column - static content */}
              <div className="flex-1 space-y-6 text-sm text-gray-800">
                <div>
                  <h2 className="font-semibold">Admission Notification</h2>
                  <ul className="list-disc pl-5 mt-1">
                    <li><a href="#">Final Merit List For The Admission To B.Arch. 2025-26</a></li>
                    <li><a href="#">Notice Of Fee Approval Proposal</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold">Admission Notification 2025-24</h2>
                  <ul className="list-disc pl-5 mt-1">
                    <li><a href="#">FY B Arch Advertisement Notification Draft 2025-24</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold">Admission Notification 2023-24</h2>
                  <ul className="list-disc pl-5 mt-1">
                    <li><a href="#">Advertisement-For-FY- B-Arch 2023-24</a></li>
                    <li><a href="#">Institute-Level-Seat</a></li>
                    <li><a href="#">Institute-Cap</a></li>
                  </ul>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mx-auto">
                <h3 className="text-center text-lg font-semibold text-blue-900 mb-4 uppercase tracking-wide">
                  GET IN TOUCH
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="block text-xs font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-2 border rounded bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />

                  <label className="block text-xs font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-2 border rounded bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />

                  <label className="block text-xs font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message"
                    className="w-full px-4 py-2 border rounded bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    rows={4}
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm transition"
                  >
                    Submit
                  </button>
                </form>
              </div>

            </div>
          </div>
        </main>

        <MainMenu title="Admission" items={admissionMenuItems} />
      </div>

      <Header />
    </div>
  )
}

export default Admission
