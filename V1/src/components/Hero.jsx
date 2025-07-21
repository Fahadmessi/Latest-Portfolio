import React from "react";
import Profileimg from "../assets/img/profileimg.jpg"; // Adjust the path as necessary
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Hero = () => {
  return (
    <header className="hero-section">
      <div className="left-content">
        <div>
          <h1 className="hero-title">
            Hi, I'm Fahad <span className="waving-hand">👋</span>
          </h1>
          <p className="hero-description">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>

        <div className="location-status">
          <div className="location" style={{ marginLeft: "1%" }}>
            <FaMapMarkerAlt />
            <span className="location-content">Punjab, Pakistan</span>
          </div>
          <div className="status">
            <div className="status-indicator">
              <div className="ping"></div>
              <div className="dot"></div>
            </div>
            <span className="location-content">Available for new projects</span>
          </div>
        </div>

        <div className="social-links">
          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="right-content">
        <div className="profile-wrapper">
          <div className="profile-shadow"></div>
          <img src={Profileimg} alt="Profile" className="profile-img" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
