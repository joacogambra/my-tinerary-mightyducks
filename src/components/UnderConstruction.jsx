import React from 'react'

import {Link as LinkRouter} from 'react-router-dom'

export default function UnderConstruction() {
  return (
    
      <div className="logoIndex">
        <p> Page under construction... please come back later </p>
          <LinkRouter to="/index" class="no-deco"> Go Back HomePage</LinkRouter>
      </div>

  )
}
