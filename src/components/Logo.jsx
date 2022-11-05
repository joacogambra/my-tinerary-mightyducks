import React from 'react'
import CallToAction from './CallToAction'

export default function Logo () {
  return (
    <>
    <div className='logoIndex'>
        <img src='./img/bigLogo.png' alt='MyTinerary'/>
        <div className='links'>
          <CallToAction/>
        </div>
    </div>
    </>
  )
}
