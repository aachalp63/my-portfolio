import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ dark }) => {
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("Message sent! (Placeholder)");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className={`min-h-screen px-6 py-20 flex flex-col items-center transition-colors relative overflow-hidden ${
        dark ? "bg-gray-800" : "bg-gradient-to-br from-green-50 via-indigo-50 to-blue-50"
      }`}
    >
      {/* Floating shapes */}
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

      {/* Section Heading */}
      <motion.h2
        className={`text-4xl font-extrabold mb-10 text-center transition-colors ${
          dark
            ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400"
            : "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400"
        }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className={`p-10 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-4 border backdrop-blur-md transition-colors ${
          dark
            ? "bg-gray-800/70 border-purple-500/40"
            : "bg-white/80 border-indigo-200/50"
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className={`p-3 rounded-md focus:outline-none transition-colors border ${
            dark
              ? "bg-gray-900 text-white placeholder-gray-400 border-gray-700 focus:border-purple-400"
              : "bg-white text-gray-800 placeholder-gray-500 border-gray-300 focus:border-indigo-400"
          }`}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className={`p-3 rounded-md focus:outline-none transition-colors border ${
            dark
              ? "bg-gray-900 text-white placeholder-gray-400 border-gray-700 focus:border-purple-400"
              : "bg-white text-gray-800 placeholder-gray-500 border-gray-300 focus:border-indigo-400"
          }`}
        />
        <textarea
          placeholder="Message"
          required
          className={`p-3 rounded-md focus:outline-none transition-colors border ${
            dark
              ? "bg-gray-900 text-white placeholder-gray-400 border-gray-700 focus:border-purple-400"
              : "bg-white text-gray-800 placeholder-gray-500 border-gray-300 focus:border-indigo-400"
          }`}
        ></textarea>

        <motion.button
          className={`py-3 rounded-full font-bold shadow-lg transition-all ${
            dark
              ? "bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-gray-900"
              : "bg-pink-600 text-white hover:bg-purple-500"
          }`}
          whileHover={{
            scale: 1.05,
            boxShadow: dark
              ? "0 0 15px rgba(255, 0, 255, 0.6), 0 0 25px rgba(255, 255, 0, 0.5)"
              : "0 0 10px rgba(252, 94, 184, 0.3)",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
        > 
          Send
        </motion.button>
      </motion.form>

      {msg && (
        <p
          className={`mt-4 transition-colors ${
            dark ? "text-green-400" : "text-green-700"
          }`}
        >
          {msg}
        </p>
      )}
    </section>
  );
};

export default Contact;
