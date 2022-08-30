import React from 'react'
import {Element} from 'react-scroll'
import {IconButton} from '@mui/material';
import {Facebook,Instagram,Twitter,GitHub,LinkedIn} from '@mui/icons-material'
import './Contact.css'

function Contact() {
  return (
    <Element id='contact'  className='contact'>
<h1>Contact</h1>
<div className='conatact__container'>
    <p>
        Email:<span>anugrahsasikumar@gmail.com</span>
    </p>
    <p>
        Phone:<span>+91-9526777078</span>
    </p>

    <div className='contact__icon'>
        <a href='https://www.facebook.com/' target='_blank'>

            <IconButton>
                <Facebook/>
                
            </IconButton>
        </a>
        <a href='https://www.instagram.com/_anugrah_s_/' target='_blank'>

            <IconButton>
                
                <Instagram/>
               

            </IconButton>
        </a>
        <a href='https://twitter.com/' target='_blank'>

            <IconButton>
                
                <Twitter/>

            </IconButton>
        </a>
        <a href='https://www.linkedin.com/in/anugrah-s-5aaa1a211/' target='_blank'>

            <IconButton>
                
                <LinkedIn/>

            </IconButton>
        </a>
        <a href='https://github.com/anugrahs123/' target='_blank'>

            <IconButton>
                
                <GitHub/>

            </IconButton>
        </a>
       
    </div>
</div>

    </Element>
  )
}

export default Contact