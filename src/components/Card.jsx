import React from 'react'

export default function Card(props) {
    let {photo} = props
  return (
    <img src={photo} className='image' alt='city'/>
  )
}
