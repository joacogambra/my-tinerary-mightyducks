import React from 'react'


export default function HeaderVideo(props) {
  let {componenttop, componentmiddle}=props
  return (
    <div className='hero'>
        {componenttop}
        
        <video muted autoPlay loop>
            <source src="./backVideo.mp4" type="video/mp4"></source>
           
        </video>
       
        <div className='capa'>
        
        </div>
        {componentmiddle}
      
    </div>
    
  )
}
