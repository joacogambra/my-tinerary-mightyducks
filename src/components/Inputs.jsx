import React from 'react'

export default function Inputs(props) {
    let {dato,type,placeholder,listener}= props
  return (
    
        
                <input type={type} name={dato} placeholder={placeholder} onChange={listener}  required ></input>
            

  )
}