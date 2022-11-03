import React from 'react'
import ScrollTop from './ScrollTop'

export default function Footer() { 
  return (
    <footer>
      <div className='footer'> 
        <h3>Contact</h3>     
        <h3>About Us</h3>
        <div className='fila'>
          <h3>Explore</h3>
          <a href='#'>Cities</a>
          <a href='#'>Hotels</a>
        </div>
        <ScrollTop/>
      </div> 
      <div className='us'>
        <p>My Tinerary © 2022 by</p>
        <a href='https://github.com/joacogambra' target="_blank">Laila, Jalil <img src='./img/github.png' className='github' alt='github'></img></a>
        <a href='https://github.com/joacogambra' target="_blank">Gambra, Joaquin <img src='./img/github.png' className='github' alt='github'></img></a>
      </div>
    </footer>
  )
}
