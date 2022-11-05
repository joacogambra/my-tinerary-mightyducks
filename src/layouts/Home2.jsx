import React from 'react'

export default function Home2(props) {
  console.log(props.children)
  return (
   
    <div className='grow'> {props.children}</div>
    
  )
}
