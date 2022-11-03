import React from 'react'
import Header from './Header'
import Logo from './Logo'

export default function HeaderVideo() {
  return (
    <div className='hero'>
        <Header> </Header>
        
        <video muted autoPlay loop>
            <source src="./backVideo.mp4" type="video/mp4"></source>
           
        </video>
       
        <div className='capa'>
        
        </div>
        <Logo> </Logo>
    </div>
    
  )
}
