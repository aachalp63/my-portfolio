import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({ dark }) => (
  <footer
    className={`py-10 text-center transition-colors ${
      dark ? "bg-gray-950 text-gray-300" : "bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50 text-gray-800"
    }`}
  >
    <div className="flex justify-center space-x-8 mb-4">
      <a
        href="https://github.com/aachalp63/"
        className={`transition-all hover:scale-125 ${
          dark ? "hover:text-white-500" : "hover:text-white-500"
        }`}
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/aachal-parate-102566218/"
        className={`transition-all hover:scale-125 ${
          dark ? "hover:text-blue-400" : "hover:text-blue-500"
        }`}
      >
        <FaLinkedin size={28} />
      </a>

    </div>
    <p className={`transition-colors ${dark ? "text-gray-500" : "text-gray-700"}`}>
      &copy; {new Date().getFullYear()} Aachal Parate. All rights reserved.
    </p>
  </footer>
);

export default Footer;
