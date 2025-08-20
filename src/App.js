import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => setDark(!dark);

  return (
    <div className={`${dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-500`}>
      <Navbar dark={dark} toggleTheme={toggleTheme} />
      <Hero dark={dark} />
      <About dark={dark} />
      <Skills dark={dark} />
      <WorkExperience dark={dark} />
      <Timeline dark={dark} />
      <Projects dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}

export default App;