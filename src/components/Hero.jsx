import React from "react";
import { motion } from "framer-motion";

const Hero = ({ dark }) => {
  return (
    <section
      className={`h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden ${
        dark
          ? "bg-gray-900"
          : "bg-gradient-to-br from-indigo via-teal-100 to-cyan-50"
      }`}
    >
      {/* Heading */}
      <motion.h1
        className={`text-5xl sm:text-6xl font-extrabold mb-6 ${
          dark
            ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400"
            : "bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-pink-400 to-blue-400"
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Aachal
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className={`text-xl sm:text-2xl mb-8 max-w-2xl ${
          dark ? "text-gray-300/90" : "text-gray-700/90"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Frontend Developer | React & Tailwind Enthusiast <br />
        Building clean, modern, and interactive web experiences
      </motion.p>

      {/* Button */}
      <motion.a
        href="#projects"
        className={`px-8 py-4 font-bold rounded-xl shadow-lg cursor-pointer ${
          dark
            ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-gray-900"
            : "bg-white bg-opacity-50 backdrop-blur-md text-teal-600 border border-teal-200"
        }`}
        whileHover={{
          scale: 1.05,
          boxShadow: dark
            ? "0px 10px 20px rgba(255,255,255,0.2)"
            : "0px 10px 20px rgba(0, 128, 128, 0.2)",
          transition: { type: "tween", duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>

      {/* Floating blurred circles */}
      <motion.div
        className={`absolute top-10 left-10 w-28 h-28 rounded-full filter blur-3xl ${
          dark ? "bg-pink-500/30" : "bg-teal-300/40"
        }`}
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className={`absolute bottom-20 right-16 w-36 h-36 rounded-full filter blur-3xl ${
          dark ? "bg-purple-500/30" : "bg-cyan-300/40"
        }`}
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
    </section>
  );
};

export default Hero;
