import React from 'react'
import {Element} from 'react-scroll'
import skil from './../Image/mern&mean.jpg'
import { LinearProgress } from '@mui/material';
import '../SkillConatainer/SkillContainer.css'

function SkillConatiner() {
  return (
    <Element className='skillContainer' id='skills'>

        <div className='skillContainer__image'>

            <img src={skil} alt=''  />
        </div>
        <div className='skillContainer__text'>
          <h2>SKILLSET</h2>

          <div className='skillContainer__skillSet'>
           <h5>ReactJS</h5> 
           <div className='skillContainer__slider  skillContainer__slider1'>
             <LinearProgress variant='determinate' value={90}/>

           </div>
          </div>
          <div className='skillContainer__skillSet'>
           <h5>Angular</h5> 
           <div className='skillContainer__slider  skillContainer__slider4'>
             <LinearProgress variant='determinate' value={75}/>

           </div>
          </div>
          <div className='skillContainer__skillSet'>
           <h5>NodeJS</h5> 
           <div className='skillContainer__slider  skillContainer__slider2'>
             <LinearProgress variant='determinate' value={90}/>

           </div>
          </div>
          <div className='skillContainer__skillSet'>
           <h5>ExpressJS</h5> 
           <div className='skillContainer__slider  skillContainer__slider3'>
             <LinearProgress variant='determinate' value={80}/>

           </div>
          </div>
          
          <div className='skillContainer__skillSet'>
           <h5>MongoDB</h5> 
           <div className='skillContainer__slider  skillContainer__slider5'>
             <LinearProgress variant='determinate' value={90}/>

           </div>
          </div>
         
        </div>

    </Element>
  )
}

export default SkillConatiner