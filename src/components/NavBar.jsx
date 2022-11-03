import React from 'react'
import { useState } from 'react'

export default function NavBar() {

    let [mostrarOcultar, setMostrarOcultar]= useState(false)
    let hide = ()=>{
      setMostrarOcultar(!mostrarOcultar)
    }
  return (
    
        <nav className='navBar'>
        <img src="./img/logo.png" alt="logo" className='logo'/>
         <a href='/'> Home</a>
         <a href="/cities"> Cities</a>
         <a href="/hotels"> Hotels</a>
         { mostrarOcultar ?
         (<>
         <div className='drop-down'>
            <img src="./img/image.png" alt="user" className="user-image" onClick={hide}/>
             <a href='/'> SignIn</a>
             <a href='/'>SignUp</a>
         </div>
         </>
         ): 
         <img src="./img/image.png" alt="user" className="user-image" onClick={hide}/>
        }
        </nav>

  )
}
