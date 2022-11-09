import React from 'react'

export default function Inputs(props) {
    let {dato,type,placeholder}= props
  return (
            <label>
                <input type={type} name={dato} placeholder={placeholder} required  ref={dato}></input>
            </label>
  )
}