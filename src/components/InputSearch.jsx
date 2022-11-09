import React from 'react'

export default function InputSearch(props) {
    let {setchange} = props
  return (
    <input type="text" placeholder='Search...'  onChange={(e)=>{(setchange(e.target.value))}}/>
  )
}
