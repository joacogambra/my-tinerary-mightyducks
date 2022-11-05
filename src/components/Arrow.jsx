import React from 'react'

export default function Arrow(props) {
    let {direction, image}= props
  
    return (
        
       < button onClick={direction} className="button"> <img src={`img/${image}.png`} alt='arrow ' className={`arrow ${image}`} ></img> </button>
    )
}