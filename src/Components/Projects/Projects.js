import React, { useState } from 'react'
import './Projects.css'
function Projects({img,title,desc,link}) {
    

    const [show,setShow]=useState(false)
  return (

    <a href={link} target='_blank'>
    <div onMouseEnter={()=>setShow(true)}  onMouseLeave={()=>setShow(false)} className='project'>

 {
           show?  (<div className='project__Content'> 
                  <h4 style={{color:'black'}}>{title}</h4>
                  <p>{desc}</p>
                 </div>
                 ):
           
           (<img src={img}/>)
 }

    </div>
    </a>
  )
}

export default Projects