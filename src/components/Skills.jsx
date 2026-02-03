import React from "react";
import { motion } from "framer-motion";
import { FaPython,FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma,FaFileExcel,FaDatabase,FaChartLine,
  FaChartBar,FaAndroid,FaGitAlt,FaGithub,FaPhp,FaCode,FaJava,FaFileCode
 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "TailwindCSS", icon: <FaFigma size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "MS Excel", icon: <FaFileExcel size={40} /> },
  { name: "MySQL", icon: <FaDatabase size={40} /> },
  { name: "SPSS", icon: <FaChartBar size={40} /> },
  { name: "Power BI", icon: <FaChartLine size={40} /> },
  { name: "Android", icon: <FaAndroid size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "PHP", icon: <FaPhp size={40} /> },
  { name: "C", icon: <FaCode size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "XML", icon: <FaFileCode size={40} /> },
];

const Skills = ({ dark }) => (
  <section
    id="skills"
    className={`min-h-screen px-6 py-20 relative overflow-hidden transition-colors ${
      dark
        ? "bg-gray-900"
        : "bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50"
    }`}
  >
    {/* Floating decorative circles */}
    <div
      className={`absolute top-10 left-10 w-48 h-48 rounded-full filter blur-3xl animate-pulse ${
        dark ? "bg-purple-500/20" : "bg-purple-300/40"
      }`}
    ></div>
    <div
      className={`absolute bottom-20 right-16 w-56 h-56 rounded-full filter blur-3xl animate-pulse ${
        dark ? "bg-pink-500/20" : "bg-pink-300/40"
      }`}
    ></div>

    <h2
      className={`text-4xl font-bold text-center mb-12 transition-colors ${
        dark
          ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400"
          : "text-purple-700"
      }`}
    >
      Skills
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto relative z-10">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.1,
            boxShadow: dark
              ? "0 0 20px 5px rgba(255,0,255,0.6)"
              : "0 0 25px 5px rgba(128,0,128,0.4)",
            transition: { type: "tween", duration: 0.3 },
          }}
          className={`flex flex-col items-center justify-center gap-2 rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 ${
            dark
              ? "bg-gray-800 text-white"
              : "bg-white/80 backdrop-blur-md text-black-800"
          }`}
        >
          {React.cloneElement(skill.icon, {
            className: dark
              ? skill.name === "React"
                ? "text-cyan-400"
                : skill.name === "TailwindCSS"
                ? "text-teal-400"
                : skill.name === "JavaScript"
                ? "text-yellow-400"
                : skill.name === "MongoDB"
                ? "text-green-500"
                : skill.name === "HTML"
                ? "text-orange-500"
                : skill.name === "Python"
                ? "text-yellow-500"
                : skill.name === "MS Excel"
                ? "text-green-500"
                : skill.name === "SPSS"
                ? "text-green-500"
                : skill.name === "Power BI"
                ? "text-yellow-500"
                : skill.name === "Android"
                ? "text-green-500"
                : skill.name === "Git"
                ? "text-red-500"
                : skill.name === "GitHub"
                ? "text-white-500"
                : skill.name === "PHP"
                ? "text-blue-500"
                : skill.name === "Java"
                ? "text-blue-500"
                : skill.name === "C"
                ? "text-gray-500"
                : skill.name === "CSS"
                ? "text-blue-500"
                : "text-pink-500"
              : skill.name === "React"
              ? "text-blue-400"
              : skill.name === "TailwindCSS"
              ? "text-teal-400"
              : skill.name === "JavaScript"
              ? "text-yellow-400"
              : skill.name === "MongoDB"
              ? "text-green-600"
              : skill.name === "HTML"
              ? "text-orange-500"
              : skill.name === "Python"
              ? "text-yellow-500"
              : skill.name === "MS Excel"
              ? "text-green-500"
              : skill.name === "SPSS"
              ? "text-green-500"
              : skill.name === "Power BI"
              ? "text-yellow-500"
              : skill.name === "Android"
              ? "text-green-500"
              : skill.name === "Git"
              ? "text-red-500"
              : skill.name === "GitHub"
              ? "text-black-900"
              : skill.name === "Java"
              ? "text-blue-500"
              : skill.name === "C"
              ? "text-gray-500"
              : skill.name === "PHP"
              ? "text-blue-500"
              : skill.name === "CSS"
              ? "text-blue-600"
              : "text-pink-500",
          })}
          

          <motion.span
            whileHover={{
              scale: 1.2,
              color: dark ? "#f472b6" : "#9333ea",
              transition: { type: "spring", stiffness: 200 },
            }}
            className={`font-semibold transition-colors ${
              dark ? "text-white" : "text-gray-800"
            }`}
          >
            {skill.name}
          </motion.span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
