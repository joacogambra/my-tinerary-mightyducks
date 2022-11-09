import React from 'react'

export default function ScrollTop() {

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <img src='./img/scroll.png' className='scroll' alt='scroll to top' onClick={scrollUp}></img>
  )
}
