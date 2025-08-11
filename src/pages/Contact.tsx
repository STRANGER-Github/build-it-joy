import Header from "@/components/Header"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 items-stretch">
        
        {/* Contact Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 transition hover:shadow-xl flex flex-col justify-between">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-wide uppercase text-center">
            Contact Us
          </h1>

          <div className="space-y-8 text-base leading-relaxed text-gray-800 flex-1">
            <div>
              <p className="font-semibold">Campus Address:</p>
              <p>
                Shree LR Tiwari Educational Campus, <br />
                Mira Road, Thane, Maharashtra 401107
              </p>
            </div>

            <div>
              <p className="font-semibold">Phone:</p>
              <p>8007916355</p>
            </div>

            <div>
              <p className="font-semibold">Email:</p>
              <p>skltcoa@gmail.com</p>
            </div>

            <div>
              <p className="font-semibold">Follow us:</p>
              <div className="flex space-x-4 mt-3">
                <a
                  href="https://www.facebook.com/KLTiwariArchitectureCollege"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition"
                >
                  <FaFacebookF className="text-blue-600 w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/skltcoa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-pink-100 transition"
                >
                  <FaInstagram className="text-pink-500 w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/skltca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition"
                >
                  <FaLinkedinIn className="text-blue-700 w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/c/RahulEducationSociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-red-100 transition"
                >
                  <FaYoutube className="text-red-600 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Matches Contact Card Size */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex">
          <iframe
            title="SKLTCoA Campus Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1234567890123!2d72.874153!3d19.299169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a960d83faa6f%3A0x4c8aae9e4c109870!2sSmt.+K.L.+Tiwari+College+of+Architecture!5e0!3m2!1sen!2sin!4v1691577600000!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ minHeight: '100%', border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Header />
    </div>
  )
}

export default Contact
