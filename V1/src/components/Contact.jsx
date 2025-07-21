import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => {
        setCopied("");
      }, 500); 
    });
  };

  return (
    <section className="Contact" id="contact">
      <div className="contact-content">
        <div className="contact-top">
          <h3>Get in touch</h3>
          <p>
            What’s next? Feel free to reach out to me if you are looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>

        <div className="contact-tell">
          <div className="email">
            <MdOutlineMailOutline style={{ fontSize: "1.4rem" }} />
            <p className="contact-info">its.fahad.bilal@gmail.com</p>
            <FaRegCopy
              style={{ cursor: "pointer", fontSize: "1.2rem" }}
              onClick={() => copyToClipboard("its.fahad.bilal@gmail.com")}
            />
            {copied === "its.fahad.bilal@gmail.com" && (
              <span className="copied-msg">Copied!</span>
            )}
          </div>

          <div className="teli">
            <FaPhoneAlt style={{ fontSize: "1.2rem" }} />
            <p className="contact-info">+92 305 7382778</p>
            <FaRegCopy
              style={{ cursor: "pointer", fontSize: "1.2rem" }}
              onClick={() => copyToClipboard("+92 305 7382778")}
            />
            {copied === "+92 305 7382778" && (
              <span className="copied-msg">Copied!</span>
            )}
          </div>
        </div>

        <p className="find-me-text">You may also find me on these platforms!</p>

        <div className="social-links-contact">
          <a href="#" aria-label="GitHub">
            <FaGithub style={{ fontSize: "1.5rem" }} />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter style={{ fontSize: "1.5rem" }} />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram style={{ fontSize: "1.5rem" }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
