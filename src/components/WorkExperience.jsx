import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Astrax Private lmt.",
    role: "Front End Intern",
    duration: "Jan 2025 - Jun 2025",
    description: "Developed responsive web pages and UI components using HTML, CSS, JavaScript, Bootstrap, and PHP.
      </br>Collaborated with the team to ensure improved customer experience.
      </br>Optimized pages for mobile responsiveness, usability, and performance.",
  },
  {
    company: "IPSOS",
    role: "Executive - Data Processing",
    duration: "Jul 2022 - Jan 2024",
    description: "Processed and validated large survey datasets using SPSS with 99% accuracy and GDPR compliance.
      </br>Delivered 50+ weekly/monthly analytical reports for clients including Netflix, Meta, WD-40, and S&P Global.
</br>Automated data transformation workflows using SQL queries and Python, reducing manual effort by 30–40%.
</br>Performed data cleaning, derived variables, executed multi-level tabulations, and resolved discrepancies.
</br>Collaborated with project managers and client stakeholders to validate reports and ensure timely, accurate delivery.
</br>Recommended process improvements and contributed to documentation of processes and knowledge transfer activities.
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
