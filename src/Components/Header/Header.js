import React from "react";
import { Link } from "react-scroll";
import "../Header/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          Port<span>Folio</span>
        </h1>
      </div>

      <div className="header__right">
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
        >
          <h4>About</h4>
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
        >
          <h4>Skills</h4>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
        >
          <h4>Projects</h4>
        </Link>
        <Link
          to="exp"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
        >
          <h4>Experience</h4>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
        >
          <h4>Contact</h4>
        </Link>

        {/* Download Resume Button */}
        <a
          href="/Anugrah_S_9526777078.pdf"
          download="Anugrah_S_Resume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Header;
