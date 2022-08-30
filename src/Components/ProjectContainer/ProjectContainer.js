import React from 'react'
import Projects from '../Projects/Projects'
import {Element} from 'react-scroll'
import './ProjectContainer.css'

function ProjectContainer() {
    const project=[
        {
            img:'https://res.cloudinary.com/dg0vog2t7/image/upload/v1661852446/carconnect_fwjigv.png',
            title:"Car-Connect",
             desc:'E-commerce-App for car accessories and providing modification services by a expert mechanic ',
             link:'https://car-connect-frontend.vercel.app/'

        },
        {
            img:'https://res.cloudinary.com/dg0vog2t7/image/upload/v1661852924/libraryapp_nojwuv.png',
            title:"Library Management System",
             desc:'A demo ejs template used website created on expressJS',
             link:'https://library-app123.herokuapp.com/'
        },
        {
            img:'https://res.cloudinary.com/dg0vog2t7/image/upload/v1661858866/e-farm_mhy98g.png',
            title:"E-Farm",
             desc:'Direct Selling App',
             link:'https://github.com/anugrahs123/Baithuliza-master'
        },
        {
            img:'https://res.cloudinary.com/dg0vog2t7/image/upload/v1661859095/weather_g0ssyd.png',
            title:"Weather-Update",
             desc:'Weather_checking',
             link:'https://lweather-app123.netlify.app/'
        },
       
    ]
  return (


    <Element className='projectContainer' id='projects'>

        <h1>Projects</h1>
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
  )
}

export default ProjectContainer