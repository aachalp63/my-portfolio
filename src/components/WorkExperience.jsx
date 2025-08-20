import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Astrax Private lmt.",
    role: "Software Developer Intern",
    duration: "Jan 2025 - Jun 2025",
    description: "Developed Tracking management system using HTML, CSS, PHP, Javascript.Implemented responsive UI components and integrated REST APIs.",
  },
  {
    company: "IPSOS",
    role: "Executive - Data Processing",
    duration: "Jul 2022 - Jan 2024",
    description: "Performed data cleaning, transformation, and visualization using Python, Excel, SQL and SPSS.Delivered actionable insights for clients.Performed various functions like data cleaning,data handling, transformation and analysis in accordance with Research specification. Delivered tabulation reports with quality checks, ensuring accurate and insightful client-ready outputs. Identified and resolved data discrepancies, maintaining consistency and reliability of insights. Skilfully handled numerous client request and queries, collaborated with clients to understand project objectives, ensuring timely delivery and quality results.",
  },

];

const WorkExperience = ({ dark }) => {
  return (
    <section
      id="experience"
      className={`min-h-screen px-6 py-20 transition-colors ${
        dark
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 text-gray-800"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Work Experience
      </h2>

      <div className="max-w-5xl mx-auto grid gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
            className={`p-6 rounded-xl shadow-lg ${
              dark ? "bg-gray-800" : "bg-white/80 backdrop-blur-md"
            }`}
          >
            <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
            <p className="text-sm text-gray-400 mb-2">{exp.company} | {exp.duration}</p>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
