import React from 'react'
import CallToAction from './CallToAction'

import {Link as LinkRouter} from 'react-router-dom'

export default function NotFound() {
  return (
    
      <div className="logoIndex">
        <p> Page not found... </p>
        <div className='toaction'>
          <button class=" button links">
          <LinkRouter to="/home" > Go Back HomePage</LinkRouter>
          </button>
          <CallToAction/>  
          </div>
      </div>

  )
}
