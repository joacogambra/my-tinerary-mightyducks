import React from 'react';
import { Link as LinkRouter } from 'react-router-dom'


export default function CallToAction() {
  return (
    <>
      <div className='toaction'>
          <LinkRouter to='/cities' className="button">Explore The Cities</LinkRouter>
          <LinkRouter to='/hotels' className="button">Discover the Hotels</LinkRouter>
      </div>
    </>
  )
}
