import React from 'react';
import {Link as LinkRouter} from 'react-router-dom'


export default function CallToAction() {
  return (
    <>
        <div className='toaction'>
        <LinkRouter to='/cities'>Explore The Cities</LinkRouter>
         <LinkRouter to='/hotels'>Discover the Hotels</LinkRouter>
         </div>
         </>
  )
}
