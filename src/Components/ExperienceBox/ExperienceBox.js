import React from 'react'
import './ExperienceBox.css'

function ExperienceBox({number,title,style}) {


  return (
    <div style={{...style}} className='experience'>
        <h2>{title}</h2>
        <p>{number}</p>
    </div>
  )
}

export default ExperienceBox