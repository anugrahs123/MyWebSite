import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import "./Contact.css";

function Contact() {
  const [time, setTime] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hh = String(date.getHours()).padStart(2, "0");
      const mm = String(date.getMinutes()).padStart(2, "0");
      const ss = String(date.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Element id="contact" className="contact">
      <div className="contact-card">
        <h1>Contact</h1>
        <p className="contact__cta">Let’s work together!</p>

        {/* Social Icons */}
        <div className="contact__icon">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <IconButton><Facebook /></IconButton>
          </a>
          <a href="https://www.instagram.com/anugrah._s/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <IconButton><Instagram /></IconButton>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <IconButton><Twitter /></IconButton>
          </a>
          <a href="https://www.linkedin.com/in/anugrah-s-5aaa1a211/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IconButton><LinkedIn /></IconButton>
          </a>
          <a href="https://github.com/anugrahs123/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconButton><GitHub /></IconButton>
          </a>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <p>Email: <span className="contact__cta"><a href="mailto:anugrahsasikumar@gmail.com">anugrahsasikumar@gmail.com</a></span></p>
          <p>Phone: <span className="contact__cta"><a href="tel:+919526777078">+91-9526777078</a></span></p>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.424502527752!2d75.75209569182519!3d11.562170068212884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba67c7969e2a065%3A0x2d60bd2ae30b114a!2sPerambra%2C%20Kerala%20673525!5e0!3m2!1sen!2sin!4v1754988180618!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Time & Footer */}
        <h3 className="time">{time}</h3>
        <p className="contact__footer">&copy; {currentYear} Anugrah S. All Rights Reserved.</p>
      </div>
    </Element>
  );
}

export default Contact;
