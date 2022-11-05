import React from 'react'
import ScrollTop from './ScrollTop'
import { Link as LinkRouter } from 'react-router-dom'

export default function Footer() { 
  return (
    <footer>
        <div className='fila'>
          <h3>Explore:</h3>  
         <LinkRouter to='/cities'>Cities</LinkRouter>
         <LinkRouter to='/hotels'>Hotels</LinkRouter>
        </div>     
      <div className='us'>
        <p>My Tinerary © 2022 by</p>
        <a href='https://github.com/joacogambra' rel="noreferrer" target="_blank"> Laila, Jalil <img src='./img/github.png' className='github' alt='github'></img></a>
        <a href='https://github.com/joacogambra'rel="noreferrer" target="_blank">Gambra, Joaquin <img src='./img/github.png' className='github' alt='github'></img></a>
      </div>
      <ScrollTop/>
    </footer>
  )
}
