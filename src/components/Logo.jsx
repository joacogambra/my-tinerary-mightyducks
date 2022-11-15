import React from 'react'
import CallToAction from './CallToAction'

export default function Logo () {
  return (
    <>
    <div className='flex-row logo-home '>
      
        <img src='./img/bigLogo.png' alt='MyTinerary'/>
      
          <div className='text-white'> 
        <p>Twenty years from now..</p>
        <p>You wil be more disapointed by the things you didn't do</p>
        <p> So throw off the bowlines</p>
        <p> Sail away from the harbor</p>
        <p> Catch the trade winds in your sails</p>
        <p>EXPLORE...</p>
        <p>DREAM...</p>
        <p>DISCOVER...</p>
        </div>
        <div>
          <CallToAction/>
        </div>
    </div>
    </>
  )
}
