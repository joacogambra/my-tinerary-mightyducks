import React from 'react';
import { Link as LinkRouter } from 'react-router-dom'


export default function CallToAction() {
  return (
    <>
      <div className='toaction'>
        <button className="button links">
          <LinkRouter to='/cities'>Explore The Cities</LinkRouter>
        </button >
        <button className="button links">
          <LinkRouter to='/hotels'>Discover the Hotels</LinkRouter>
        </button>
      </div>
    </>
  )
}
