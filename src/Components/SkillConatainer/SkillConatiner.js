import React from "react";
import { Element } from "react-scroll";
import { LinearProgress } from "@mui/material";
import {
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFastapi,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaUsers, FaLightbulb, FaComments } from "react-icons/fa";
import "../SkillConatainer/SkillContainer.css";

function SkillConatiner() {
  const skills = [
    { name: "ReactJS", icon: <SiReact color="#61DBFB" />, level: 90 },
    { name: "Angular", icon: <SiAngular color="#DD0031" />, level: 75 },
    { name: "NodeJS", icon: <SiNodedotjs color="#68A063" />, level: 90 },
    { name: "ExpressJS", icon: <SiExpress color="#fff" />, level: 90 },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" />, level: 90 },
    { name: "FastAPI", icon: <SiFastapi color="#009688" />, level: 60 },
    { name: "AWS", icon: <FaAws color="#FF9900" />, level: 70 },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, level: 80 },
  ];

  const softSkills = [
    { name: "   Teamwork", icon: <FaUsers color="#4CAF50" /> },
    { name: "   Problem Solving", icon: <FaLightbulb color="#FFC107" /> },
    { name: "   Communication", icon: <FaComments color="#2196F3" /> },
  ];

  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer__text">
        <h2>Skill Set</h2>

        {/* Technical Skills */}
        {skills.map((skill, index) => (
          <div className="skillContainer__skillSet" key={index}>
            <h5 className="skillContainer__label">
              {skill.icon} <span>{skill.name}</span>
            </h5>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              className="skillContainer__slider"
            />
          </div>
        ))}

        <h2>Soft Skills</h2>
        <div className="skillContainer__softSkills">
          {softSkills.map((skill, index) => (
            <div className="softSkill" key={index}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default SkillConatiner;
