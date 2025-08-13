"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaUsers, FaLightbulb, FaGlobe, FaLeaf, FaAward } from "react-icons/fa";
import { MdArchitecture } from "react-icons/md";

import { Link } from "react-router-dom";
import Header from "@/components/Header";
import heroImg from "@/assets/life.jpg";
import buildingImg from "@/assets/about-us.jpg";
import chartImg from "@/assets/Untitled.png";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Bachelor of Architecture",
    duration: "5 Years (Full-time)",
    desc: "A robust blend of design, theory, technology, and sustainability — approved by COA and affiliated with the University of Mumbai. Prepares students for the multidisciplinary field of architecture.",
  },
  {
    title: "Diploma in Architecture",
    duration: "3 Years (Full-time)",
    desc: "Foundation in design, construction, and environmental stewardship — serving as a pathway into the profession or for advanced studies.",
  },
];

const navLinks = [
  { label: "Rahul Education", path: "/about/rahul-education" },
  { label: "Our Management", path: "/about/management" },
  { label: "About SKLTCOA", path: "/about/skltcoa" },
  { label: "Our Principal", path: "/about/principal" },
  { label: "Vision and Mission", path: "/about/vision-mission" },
  { label: "College Brochure", path: "/about/brochure" },
];

export default function About() {
  const [selectedProgram, setSelectedProgram] = useState(0);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[520px] grayscale flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Reimagining the Past. Designing the Future.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto">
            We create holistic architects who design for the future by reimagining the past and embodying the present.
          </p>
          {/* Accreditation Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["COA Approved", "DTE Maharashtra", "UGC 2(f)", "ISO Certified"].map((badge) => (
              <span key={badge} className="px-4 py-1 bg-white/90 text-black rounded-full shadow text-sm">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <div className="mb-4 mt-4">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-[#0F2341] text-base lg:text-lg">
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path}>
                    <div className="flex items-center gap-2 px-4 py-3 bg-white border border-[#0F2341] rounded-lg shadow-sm hover:bg-[#0F2341] hover:text-white transition-all duration-300 group">
                      <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="whitespace-nowrap">{label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


      {/* Who We Are */}
      <section className="py-1 grayscale max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={buildingImg}
          alt="Campus"
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold mb-4">Who We Are ?</h2>
          <p className="leading-relaxed">
            Established in 2016, Smt. K.L. Tiwari College of Architecture (SKLTCOA) is a centre of excellence in
            architectural education. Affiliated with the University of Mumbai and recognised by the Government of
            Maharashtra, we are approved by the Council of Architecture (COA) and DTE Maharashtra, certified under
            Section 2(f) of the UGC Act, 1956, and ISO certified — ensuring quality, innovation, and continuous
            improvement.
          </p>
        </motion.div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Programs Offered</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {programs.map((prog, idx) => (
              <motion.div
                key={prog.title}
                className={`p-6 rounded-xl shadow-lg cursor-pointer transition ${selectedProgram === idx ? "bg-[#0F2341] text-white" : "bg-gray-100"
                  }`}
                onClick={() => setSelectedProgram(idx)}
                whileHover={{ scale: 1.05 }}
              >
                <MdArchitecture size={32} className="mb-3 mx-auto" />
                <h3 className="text-xl font-semibold">{prog.title}</h3>
                <p className="text-sm mt-2">{prog.duration}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 max-w-2xl mx-auto text-gray-700">{programs[selectedProgram].desc}</div>
        </div>
      </section>

      {/* Architecture & Society */}
      <section className="py-16 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Architecture and Society</h2>
        <motion.img
          src={chartImg}
          alt="Architecture & Society"
          className="mx-auto grayscale rounded-lg shadow-lg cursor-pointer hover:scale-105 transition"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Teaching Methodology</h2>
          <div className="space-y-6">
            {[
              { icon: FaLightbulb, text: "Constructivism: Learning by Doing" },
              { icon: FaUsers, text: "Interdisciplinary Collaboration" },
              { icon: FaLeaf, text: "Sustainability as Core Value" },
              { icon: FaUniversity, text: "Heritage Conservation" },
              { icon: FaGlobe, text: "Global Perspective" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <item.icon className="text-[#0F2341]" size={28} />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rahul Education Ecosystem */}
      <section className="pt-16 pb-32 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold mb-4">Part of Rahul Education</h2>
          <p>
            As part of the vibrant Rahul Education academic ecosystem, SKLTCOA benefits from a progressive curriculum,
            infrastructure support, and a shared vision to prepare students for challenges like urbanisation, climate
            change, and cultural preservation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0F2341] shadow-md p-6 rounded-lg text-center"
        >
          <p className="italic text-white font-medium">
            “Designing for the Future, Respecting the Past.”
          </p>
        </motion.div>

      </section>
      <Header />
    </div>
  );
}
