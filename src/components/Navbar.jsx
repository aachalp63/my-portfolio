import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ dark, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["projects", "about", "skills", "experience", "timeline", "contact"];

  return (
    <nav
      className={`fixed top-0 w-full ${
        dark
          ? "bg-gray-900/70"
          : "bg-gradient-to-r from-purple-100 via-white-400 to-green-100 backdrop-blur-md"
      } shadow-md z-50 transition-colors`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
         <div className="flex items-center gap-2">
        {/* Logo / Name */}
         <img
     src={`${process.env.PUBLIC_URL}/favicon_v1.ico`}
    alt="Aachal Avatar"
    className="w-8 h-8 object-contain"
  />
        <h1
          className={`text-2xl font-bold transition-colors ${
            dark
              ? "text-white"
              : "bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400"
          }`}
        >
          Aachal's PortFolio
        </h1>
           </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`transition-colors hover:text-pink-500 ${
                dark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className={`ml-4 px-4 py-2 rounded-full font-semibold transition-all ${
              dark
                ? "bg-indigo-500 text-white hover:bg-indigo-600"
                : "bg-white bg-opacity-50 text-teal-600 border border-teal-200 hover:bg-white/70"
            }`}
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`p-2 rounded-md focus:outline-none transition-colors ${
              dark ? "text-white" : "text-gray-700"
            }`}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden bg-gradient-to-b ${
              dark
                ? "from-gray-900/95 to-gray-800/90"
                : "from-white/90 to-green-50/90 backdrop-blur-md"
            }`}
          >
            <div className="flex flex-col items-center py-4 space-y-4 font-medium">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors hover:text-pink-500 ${
                    dark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}

              <button
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
                className={`mt-2 px-4 py-2 rounded-full font-semibold transition-all ${
                  dark
                    ? "bg-indigo-500 text-white hover:bg-indigo-600"
                    : "bg-white bg-opacity-50 text-teal-600 border border-teal-200 hover:bg-white/70"
                }`}
              >
                {dark ? "Light" : "Dark"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
