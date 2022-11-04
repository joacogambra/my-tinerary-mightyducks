import React from 'react'
import CallToAction from './CallToAction'

import {Link as LinkRouter} from 'react-router-dom'

export default function NotFound() {
  return (
    
      <div className="logoIndex">
        <p> Page under construction... </p>
        <div className='toaction'>
          <button class=" button links">
          <LinkRouter to="/index" > Go Back HomePage</LinkRouter>
          </button>
          <CallToAction/>  
          </div>
      </div>

  )
}
