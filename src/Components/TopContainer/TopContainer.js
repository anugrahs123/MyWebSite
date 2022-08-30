import React from 'react'
import {Element} from 'react-scroll'
import TopContent from '../TopContent/TopContent'
import '../TopContainer/TopContainer.css'
function TopContainer() {
  return (

    <Element name='about' className='topContainer responsive'>
    <TopContent/>

    </Element>
  )
}

export default TopContainer