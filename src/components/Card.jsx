import React from 'react'

export default function Card(props) {
    let {photo} = props
  return (
    <img src={`img/${photo}.png`} className='image' alt='city'/>
  )
}