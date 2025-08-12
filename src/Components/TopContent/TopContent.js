import React from "react";
import "../TopContent/TopContent.css";
import { TypeAnimation } from "react-type-animation";

function TopContent() {
  return (
    <div className="topContent">
      <div className="topContent__Container">
        <div className="user"></div>

        <h1>Anugrah S</h1>

        {/* Short tagline */}
        <h3 className="tagline">
          Software Engineer | React JS | Angular | Node JS | AWS | FastAPI Enthusiast
        </h3>

        <p>
          I'm{" "}
          <span className="span-1">
            <TypeAnimation
              sequence={[
                "Crafting interactive UIs with React.js",
                2000,
                "Building dynamic apps in Angular",
                2000,
                "Engineering scalable APIs in Node.js",
                2000,
                "Delivering end-to-end Full-Stack solutions",
                2000,
                "Integrating AI-powered features",
                2000,
                "Exploring cutting-edge technologies",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="caca"
            />
          </span>
        </p>

        {/* Direct download from public folder */}
        <a href="/Anugrah_S_9526777078.pdf" download="Anugrah_S_Resume.pdf">
          <button className="topContent__downloadButton">Download Resume</button>
        </a>

        <a
          href="https://wa.me/919526777078"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="topContent__workButton">Join with me</button>
        </a>
      </div>
    </div>
  );
}

export default TopContent;
