import React from 'react'
import CallToAction from './CallToAction'

import {Link as LinkRouter} from 'react-router-dom'

export default function NotFound() {
  return (
    
      <div className='flex-row logo-home '>
        <img src='/img/404.png' alt='NotFound' className='fourcerofour'></img>
        <div className='toaction '>
          <button className=" button links">
          <LinkRouter to="/home" > Go Back HomePage</LinkRouter>
          <CallToAction/>  
          </button>
          </div>
      </div>

  )
}
