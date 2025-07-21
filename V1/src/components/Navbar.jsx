import React, { useState } from "react";
import { LuSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    // Jab menu khule to body par blur class add ho, band hone par remove ho.
    if (newMenuState) {
      document.getElementById("main-content").classList.add("blur");
    } else {
      document.getElementById("main-content").classList.remove("blur");
    }
  };

  const handleLinkClick = () => {
    // Link pe click karne par agar mobile menu khula hai to usay band kar dein.
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <h1>&lt; FA /&gt;</h1>
        </div>

        {/* Hamburger/Cross Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#work" onClick={handleLinkClick}>
              Work
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={handleLinkClick}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
          <li className="dark-mode-toggle-li">
            <label className="dark-mode-label" onClick={toggleDarkMode}>
              {isDarkMode ? <LuSun color="orange" /> : <IoMoonOutline color="#080807" />}
            </label>
          </li>
          <li>
            <a href="#" className="btn">
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;