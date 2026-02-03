import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Astrax Private Ltd.",
    role: "Front End Intern",
    duration: "March 2025 - Jun 2025",
    description: [
      "Developed responsive web pages and UI components using HTML, CSS, JavaScript, Bootstrap, and PHP.",
      "Collaborated with the team to ensure improved customer experience.",
      "Optimized pages for mobile responsiveness, usability, and performance.",
    ],
  },
  {
    company: "IPSOS",
    role: "Executive - Data Processing",
    duration: "Jul 2022 - Jan 2024",
    description: [
      "Processed and validated large survey datasets using SPSS with 99% accuracy and GDPR compliance.",
      "Delivered 50+ weekly/monthly analytical reports for clients including Netflix, Meta, WD-40, and S&P Global.",
      "Automated data transformation workflows using SQL queries and Python, reducing manual effort by 30–40%.",
      "Performed data cleaning, derived variables, executed multi-level tabulations, and resolved discrepancies.",
      "Collaborated with project managers and client stakeholders to validate reports and ensure timely, accurate delivery.",
      "Recommended process improvements and contributed to documentation of processes and knowledge transfer activities.",
    ],
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
      <h2
        className={`text-4xl font-bold text-center mb-12 transition-colors ${
          dark
            ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400"
            : "text-purple-700"
        }`}
      >
        Work Experience
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
            className={`p-6 rounded-xl shadow-lg transition-colors ${
              dark ? "bg-gray-800 hover:bg-gray-700" : "bg-white/80 backdrop-blur-md hover:bg-white/90"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-1 transition-colors ${
                dark ? "text-cyan-400" : "text-indigo-600"
              }`}
            >
              {exp.role}
            </h3>
            <p
              className={`text-sm mb-3 ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <span
                className={`font-semibold ${
                  dark ? "text-yellow-400" : "text-purple-500"
                }`}
              >
                {exp.company}
              </span>{" "}
              |{" "}
              <span
                className={`italic ${
                  dark ? "text-pink-400" : "text-pink-600"
                }`}
              >
                {exp.duration}
              </span>
            </p>
            <ul className="list-disc list-inside space-y-2">
              {exp.description.map((point, i) => (
                <li
                  key={i}
                  className={`transition-colors ${
                    dark ? "text-gray-200 hover:text-yellow-400" : "text-gray-700 hover:text-indigo-500"
                  }`}
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
