import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={`page-wrapper ${isDarkMode ? "dark-mode-on" : ""}`}>
      <input
        type="checkbox"
        id="dark-mode-toggle"
        className="dark-mode-input"
        checked={isDarkMode}
        readOnly
      />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main id="main-content">
        <div className="child-container">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Testimonial />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
