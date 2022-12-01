import React from 'react'


export default function useCardsWithComments( props) {
    let {name, photo, description, id, children}= props
  
  return (
    <div className='instaCard' id={id}>
        <div className='insta-header' >{name}</div>
        <div className='insta-img'> 
            <img src={photo} alt=''/>
        </div>
        <div className='insta-desc'>
            <p> {description}</p>
        </div>
        <div >
         {children}          
        </div>
    </div>
   
  )
}
