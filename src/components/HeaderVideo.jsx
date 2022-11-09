import React from 'react'


export default function HeaderVideo(props) {
  let {componenttop, componentmiddle}=props
  return (
    <>

            {componenttop}
        
           <div className="video-wrapper">
                 <video autoPlay loop muted poster='img/sunset-570881_960_720.webp' >
                  
                 <source src="/backVideo.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
        

       
        <div className="header">
            {componentmiddle}
  </div>
  </div>

</> 
    
  )
}
