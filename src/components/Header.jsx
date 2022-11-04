import React from 'react'
import { useState } from 'react'

export default function Header() {
    let [dropDownOcultar, setdropDownOcultar] = useState(false)
    let [mostrarOcultar, setMostrarOcultar]= useState(false)
    let hide = ()=>{
      setMostrarOcultar(!mostrarOcultar)
    }
    let dropDown=()=>{
      setdropDownOcultar(!dropDownOcultar)
    }
  return (
    
        <nav className='navBar'>
          { dropDownOcultar  ?
         ( 
         <><div className="drop-down">
        <img src="./img/logo.png" alt="logo" className='logo' onClick={dropDown}/>
        
        </div>
        <div className='drop-down-nav'>
         <a href='/'> Home</a>
         <a href="/cities"> Cities</a>
         <a href="/hotels"> Hotels</a>
         </div>
         </>
         ): 
         <img src="./img/logo.png" alt="logo" className='logo' onClick={dropDown}/>
        }
         { mostrarOcultar ?
         (<>
         <div className='drop-down'>
          <img src="./img/image.png" alt="user" className="user-image" onClick={hide}/>
            <div className='drop-menu'>
             <a href='/'> SignIn</a>
             <a href='/'>SignUp</a>
             </div>
         </div>
         </>
         ): 
         <img src="./img/image.png" alt="user" className="user-image" onClick={hide}/>
        }
        </nav>

  )
}
