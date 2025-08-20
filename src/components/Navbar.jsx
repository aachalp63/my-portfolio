import React from "react";

const Navbar = ({ dark, toggleTheme }) => (
  <nav
    className={`fixed top-0 w-full ${
      dark ? "bg-gray-900/70" : "bg-gradient-to-r from-purple-100 via-white-400 to-green-100 backdrop-blur-md"
    } shadow-md z-50 transition-colors`}
  >
    <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo / Name */}
      <h1
        className={`text-2xl font-bold ${
          dark ? "text-white-400" : "bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400"
        }`}
      >
        Aachal
      </h1>

      {/* Nav Links */}
      <div className="space-x-6 font-medium flex items-center">
        {["projects", "about", "skills","experience", "timeline", "contact"].map((section) => (
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

        {/* Theme Toggle Button */}
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
    </div>
  </nav>
);

export default Navbar;
