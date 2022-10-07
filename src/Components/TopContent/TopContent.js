import React from 'react'
import {Link} from 'react-scroll'
import '../TopContent/TopContent.css'
import Typical from 'react-typical'

function TopContent() {
  const steps = [
    'ReactJS Developer', 2000,
    'Angular Developer', 2000,
    'NodeJS Developer', 2000,
    'Full-Stack-Developer ', 2000,
   
  ];
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('./../Image/ANUGRAH RESUME.pdf').then(response => {
      console.log("res",response);
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'RESUME.pdf';
            alink.click();
        })
    })
  }
  return (
    <div className='topContent'>
  
        <div className='topContent__Container'>
        <div className="user"></div>
            <h1>Anugrah S</h1>
            

            <p>I'm <span className='span-1'> <Typical wrapper="span" steps={steps} loop={100} className={'caca'} /></span></p>

            <a>
                <button className='topContent__downloadButton' onClick={onButtonClick}>Download CV</button>
            </a>

            <a href="https://wa.me/919526777078"
            target="_blank"
            >
                <button className='topContent__workButton' >Join with me</button>
            </a>

        </div>
    
    </div>
  )
}

export default TopContent