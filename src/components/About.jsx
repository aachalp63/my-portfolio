import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const About = ({ dark }) => (
  <section
    id="about"
    className={`min-h-screen px-6 py-20 transition-colors ${
      dark ? "bg-gray-800" : "bg-gradient-to-r from-purple-50 via-cyan-50 to-blue-50"
    }`}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Profile"
        className={`w-44 h-44 md:w-64 md:h-64 rounded-full shadow-2xl object-cover ${
          dark ? "ring-2 ring-indigo-400" : "ring-2 ring-cyan-400"
        }`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Text Content */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 ${
            dark ? "text-indigo-400" : "text-teal-600"
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-lg md:text-xl leading-relaxed mb-6 ${
            dark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Data Analyst with 1.5 years of experience at IPSOS.<br></br>
          <br></br>
          <ul>
            <li>Skilled in{" "} 
              <span
            className={`font-semibold ${
              dark ? "text-pink-400" : "text-pink-500"
            }`}
          >
            data handling, software development, and database management.
          </span>{" "}</li>
            <li>Proficient in managing large datasets, performing {" "}
          <span
            className={`font-semibold ${
              dark ? "text-yellow-400" : "text-yellow-500"
            }`}
          >
            data cleaning, transformation, and creating
              tabulation reports to support actionable insights.
          </span>{" "}
            </li>
          </ul>
          <br></br>
          I’m a passionate Frontend Developer focused on building{" "}
          <span
            className={`font-semibold ${
              dark ? "text-pink-400" : "text-pink-500"
            }`}
          >
            modern, responsive
          </span>{" "}
          web applications with smooth animations and interactive UI. I love transforming designs into{" "}
          <span
            className={`font-semibold ${
              dark ? "text-yellow-400" : "text-yellow-500"
            }`}
          >
            functional, pixel-perfect interfaces
          </span>
          .
        </p>
        <p
          className={`text-lg md:text-xl leading-relaxed ${
            dark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          When I’m not coding, I enjoy learning about the latest web technologies, data anlysis, experimenting with new tools, and contributing to open-source projects.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
