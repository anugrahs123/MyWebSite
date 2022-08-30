import React from "react";
import ExperienceBox from "../ExperienceBox/ExperienceBox";
import {Element} from 'react-scroll'
import './ExperlienceContainer.css'
import Projects from "../Projects/Projects";

function ExperienceContainer() {
  const project=[
    {
      img:'data:image/png;base64,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',
      title:"MEAN-STACK-DEVELOPER",
       desc:'Completed an internship in MEAN fullstack web development',
       link:'https://ictkerala.org/'
  },
    {
        img:'https://res.cloudinary.com/dg0vog2t7/image/upload/v1661853530/futuralabs_yu0iww.jpg',
        title:"MERN-STACK-DEVELOPER",
         desc:'Provicient in deploying Websites and worked as a full-stack developer',
         link:'https://thefuturalabs.com/'

    },
   
   
]
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
          
    <Element className='projectContainer' id='projects'>

<div className='projectContainer__projects'>

    {
        project.map((projects)=>{
            return(
                <Projects title={projects.title} 
                img={projects.img}
                 link={projects.link} 
                 desc={projects.desc}  />
            )
        })
    }


</div>
</Element>
      <div className="experienceContainer__info">
        <ExperienceBox  number="+10" title='Clients' style={{backgroundColor:' #005AA7'}}/>
        <ExperienceBox  number="20+" title='Projects'/>
        <ExperienceBox  number="500+" title='Students'/>
      </div>
  
    </Element>
    
  );
}

export default ExperienceContainer;
