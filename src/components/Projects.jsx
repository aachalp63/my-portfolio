import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", description: "A personal portfolio website built with React and TailwindCSS.", link: "#", image: "/assets/project1.jpg" },
  {title: "PhishNet – Phishing Detection & Awareness Hub",
  description: "A web application built with Next.js and JavaScript that provides AI-driven phishing URL detection, phishing case studies, whitepaper downloads, and employee training quizzes.",
  link: "https://aachalp63-phishnet.vercel.app/", // replace with live demo or GitHub link if available // replace with your actual image path
  },
  {
  title: "Budget Tracker App",
  description: "An Android application built with Java that allows users to track their income, expenses, and visualize statistics. Features include transaction management and summary dashboards using SharedPreferences.",
  link: "#", // replace with live demo or GitHub link if available
  image: "/assets/budget-tracker.jpg" // replace with your actual image path
  },
  {
  title: "PeacePal – Mental Health Chatbot",
  description: "A custom AI-powered mental health chatbot built with Python and Streamlit. Features a hybrid response engine combining a trained ML model, rule-based logic, and Wikipedia fallback. Includes login/registration, chat history saving, and interactive chat bubble UI.",
  link: "#", // replace with live demo or GitHub link if available
  image: "/assets/peacepal.jpg" // replace with your actual image path
  },
  {
  title: "Online Restaurant Booking System",
  description: "A web application built with HTML, CSS, JavaScript, and PHP that allows users to view restaurants, book tables, and manage reservations. Includes admin panel for managing bookings and a responsive user interface.",
  link: "#", // replace with live demo or GitHub link if available
  image: "/assets/restaurant-booking.jpg" // replace with your actual image path
  },
  {
  title: "Job Portal",
  description: "A dynamic web application built with PHP, MySQL, HTML, CSS, and JavaScript. Features include user registration/login, job posting, job search, applications, password recovery via Gmail SMTP, and AJAX-based real-time filtering.",
  link: "#", // replace with live demo or GitHub link if available
  image: "/assets/job-portal.jpg" // replace with your actual image path
},
{
  title: "Emojify",
  description: "A fun web application that converts face emotion into corresponding emojis. Built with   .",
  link: "#", // replace with live demo or GitHub link if available
  image: "/assets/emojify.jpg" // replace with your actual image path
},
  { title: "Weather App", description: "A weather forecast app using OpenWeatherMap API.", link: "#", image: "/assets/project3.jpg" },
];

const Projects = ({ dark }) => (
  <section
    id="projects"
    className={`min-h-screen px-6 py-20 transition-colors ${
      dark
        ? "bg-gray-900 relative overflow-hidden"
        : "bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden"
    }`}
  >
    {/* Optional neon/floating shapes */}
    {dark ? (
      <>
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-purple-500/20 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-56 h-56 rounded-full bg-pink-500/20 filter blur-3xl animate-pulse"></div>
      </>
    ) : (
      <>
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-purple-200/30 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-56 h-56 rounded-full bg-pink-200/30 filter blur-3xl"></div>
      </>
    )}

    <motion.h2
      className={`text-4xl font-bold mb-10 text-center transition-colors ${
        dark
          ? "text-yellow-400"
          : "text-indigo-600"
      }`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Projects
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
      {projects.map((project, idx) => (
        <motion.a
          key={idx}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
            dark
              ? "bg-white/10 hover:shadow-[0_15px_25px_rgba(255,255,255,0.2)]"
              : "bg-white/80 hover:shadow-lg"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            boxShadow: dark
              ? "0 15px 25px rgba(255,255,255,0.2)"
              : "0 15px 25px rgba(0,0,0,0.15)",
          }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.2, duration: 0.8 }}
        >
      {/*    <img
           
            alt={project.title}
            className="w-full h-48 object-cover"
          /> 
          */}
          <div className="p-4">
            <h3
              className={`text-xl font-semibold mb-2 transition-colors ${
                dark ? "text-white" : "text-gray-800"
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`transition-colors ${
                dark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {project.description}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Projects;
