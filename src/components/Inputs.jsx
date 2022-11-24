import React from 'react'

export default function Inputs(props) {
    let {dato,type,placeholder}= props
  return (
    
        
                <input type={type} name={dato} placeholder={placeholder} ref={dato}  required ></input>
            

  )
}