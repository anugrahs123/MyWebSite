import React from "react";
import { Element } from "react-scroll";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./ProjectContainer.css";

function ProjectContainer() {
  const projects = [
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1754985953/66fd8a87-572d-4831-b540-7ef7fe5f1a80.png",
      title: "Resume Enhancement Service",
      desc: "AI-powered platform to enhance resumes using DWMS data, auto-generate descriptions, and ensure ATS compatibility.",
      tech: [
        "React JS",
        "FastAPI",
        "AWS",
        "Twilio",
        "SendGrid",
        "OpenAI",
        "AI Integration",
        "Material UI",
      ],
      role: "Front End Developer & API integration",
      link: "https://airesume.vijnanakeralam.kerala.gov.in/login",
    },
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1754985582/portfolio/c704b160-22fd-4680-a7a2-538740e23306.png",
      title: "Student Management System",
      desc: "A complete system for managing student data, assessments, and academic performance and a proper RBAC system to support various user roles and stakeholders.",
      tech: ["React", "Material UI", "Node.js", "MongoDB", "Typescript", "AWS"],
      role: "Full Stack Developer",
      link: "https://adarshrehab.org.in/",
    },
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1754985810/16fa3012-ada7-4f00-8230-d0f6e54c74c4.png",
      title: "MovieMate",
      desc: "A personal movie & TV show tracker with episode progress, reviews, and ratings.",
      tech: ["React", "FastAPI", "SQLite", "OpenAI"],
      role: "Full Stack Developer",
      link: "https://moviemate-frontend-gilt.vercel.app/",
    },
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1754986288/bc0bab29-bea8-40af-83c7-2d7cb672fd56.png",
      title: "Authentication Task",
      desc: "A secure login system using the MERN stack with JWT access/refresh token rotation, token blacklisting, and logout functionality.",
      tech: ["React", "Material UI", "Node JS", "MongoDB"],
      role: "Full Stack Developer",
      link: "https://github.com/anugrahs123/Login-Section-Backend/",
    },
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1661852446/carconnect_fwjigv.png",
      title: "Car-Connect",
      desc: "E-commerce app for car accessories & modification services.",
      tech: ["Angular", "Node.js", "MongoDB", "Heroku", "Vercel"],
      role: "Full Stack Developer",
      link: "https://car-connect-frontend.vercel.app/",
    },
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1661852924/libraryapp_nojwuv.png",
      title: "Library Management System",
      desc: "Library website using EJS templates and ExpressJS backend.",
      tech: ["EJS", "Express", "MongoDB"],
      role: "Backend Developer",
      link: "https://library-app123.herokuapp.com/",
    },
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1661858866/e-farm_mhy98g.png",
      title: "E-Farm",
      desc: "Direct Selling App",
      tech: ["React", "Express", "MongoDB"],
      role: "Full Stack Developer",
      link: "https://github.com/anugrahs123/Baithuliza-master",
    },
    {
      img: "https://res.cloudinary.com/dg0vog2t7/image/upload/v1661859095/weather_g0ssyd.png",
      title: "Weather-Update",
      desc: "Weather_checking",
      tech: ["React", "Open Weather Map API"],
      role: "Front End Developer",
      link: "https://lweather-app123.netlify.app/",
    },
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>

      <div className="projectContainer__grid">
        {projects.map((p, index) => (
          <Card key={index} className="projectCard">
            <CardMedia
              component="img"
              height="180"
              image={p.img}
              alt={p.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {p.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {p.desc}
              </Typography>

              <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: 600 }}>
                Role: {p.role}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                sx={{ flexWrap: "wrap", mt: 1 }}
              >
                {p.tech.map((tag, i) => (
                  <Chip key={i} label={tag} size="small" />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                href={p.link}
                target="_blank"
                endIcon={<OpenInNewIcon />}
                sx={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#115293",
                  },
                }}
              >
                View
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          variant="outlined"
          color="secondary"
          href="https://github.com/anugrahs123"
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          View More on GitHub
        </Button>
      </div>
    </Element>
  );
}

export default ProjectContainer;
