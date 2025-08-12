import React from "react";
import Projects from "../Projects/Projects"; // You may rename this to ExperienceCard later
import { Element } from "react-scroll";
import "./ExperlienceContainer.css";

function ExperienceContainer() {
  const experiences = [
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1754987543/inclusys_neuro_org_logo_zzi0en.jpg",
      title: "MERN Stack Developer",
      company: "Inclusys Neuro Org",
      desc: "Actively contributed to two key projects, including a government initiative, leveraging the latest technologies to enhance efficiency and professionalism. Involved in end-to-end development from initial requirement analysis and design to release",
      link: "https://www.inclusysdigital.com/",
    },
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1754987402/41d9d574-ce99-45ed-8b43-7c4e90b45c24.png",
      title: "Data Analyst Intern",
      company: "IIT Madras",
      desc: "Worked on climatology of temperature, humidity and precipitation patterns over kerala derived from INSAT 3DR satellite product involving data cleaning, visualization, and reporting.",
      link: "https://www.iitm.ac.in/",
    },
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1661853530/futuralabs_yu0iww.jpg",
      title: "Full Stack Developer",
      company: "Futura Labs",
      desc: "Implemented streamline process management for MERN Stack Development, HTML, CSS, Bootstrap, JavaScript, and MongoDB, leveraging strong design,integration, and intuitive problem-solving skills",
      link: "https://thefuturalabs.com/",
    },
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1754987644/9b3f2d7c-7bab-47f6-b8ed-61dca7d1178e.png",
      title: "MEAN Stack Development Intern",
      company: "ICT Academy of Kerala",
      desc: "Studied web development fundamentals and JavaScript basics to implement projects on the MEAN stack, showcasing practical understanding and proficiency in both domains.",
      link: "https://ictkerala.org/",
    },
  ];

  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="projectContainer__projects">
        {experiences.map((exp, index) => (
          <Projects
            key={index}
            title={`${exp.title} - ${exp.company}`}
            img={exp.img}
            link={exp.link}
            desc={exp.desc}
          />
        ))}
      </div>
    </Element>
  );
}

export default ExperienceContainer;
