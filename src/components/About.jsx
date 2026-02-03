import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const About = ({ dark }) => (
  <section
    id="about"
    className={`min-h-screen px-6 py-20 transition-colors ${
      dark
        ? "bg-gray-800"
        : "bg-gradient-to-r from-purple-50 via-cyan-50 to-blue-50"
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
          Software Development Enthusiast with hands-on experience in building
          scalable web applications using the{" "}
          <span
            className={`font-semibold ${
              dark ? "text-pink-400" : "text-pink-500"
            }`}
          >
            MERN stack
          </span>
          . I enjoy solving real-world problems through clean code, modular
          architecture, and efficient data handling.
        </p>

        <ul
          className={`text-lg md:text-xl leading-relaxed mb-6 list-disc pl-5 ${
            dark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          <li>
            Experienced in developing{" "}
            <span
              className={`font-semibold ${
                dark ? "text-yellow-400" : "text-yellow-500"
              }`}
            >
              full-stack web applications
            </span>{" "}
            with React, Node.js, Express, and MongoDB, focusing on performance,
            scalability, and maintainability.
          </li>
          <li>
            Strong foundation in{" "}
            <span
              className={`font-semibold ${
                dark ? "text-pink-400" : "text-pink-500"
              }`}
            >
              RESTful APIs, authentication, database design,
            </span>{" "}
            and component-driven UI development.
          </li>
          <li>
            Previously worked as an Executive Data Processing professional at
            IPSOS, where I strengthened my skills in{" "}
            <span
              className={`font-semibold ${
                dark ? "text-yellow-400" : "text-yellow-500"
              }`}
            >
              data validation, automation, and analytical problem-solving
            </span>
            — skills I now apply to backend logic and data-driven systems.
          </li>
        </ul>

        <p
          className={`text-lg md:text-xl leading-relaxed ${
            dark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          I’m currently pursuing my MCA and actively building projects that
          combine frontend excellence with robust backend systems. Outside of
          coding, I enjoy exploring system design concepts, learning new
          technologies, and contributing to meaningful software solutions.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
