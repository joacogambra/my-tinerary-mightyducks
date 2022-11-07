import React from 'react'
import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'


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
        <img src="./img/MT_Logo_1.png" alt="logo" className='logo' onClick={dropDown}/>
        
        </div>
        <div className='drop-down-nav'>
          <LinkRouter to='/home'>Home</LinkRouter>
         <LinkRouter to='/cities'>Cities</LinkRouter>
         <LinkRouter to='/hotels'>Hotels</LinkRouter>
        
         </div>
         </>
         ): 
         <img src="./img/MT_Logo_1.png" alt="logo" className='logo' onClick={dropDown}/>
        }
         { mostrarOcultar ?
         (<>
         <div className='drop-down'>
          <img src="./img/image.png" alt="user" className="user-image" onClick={hide}/>
            <div className='drop-menu'>
              <LinkRouter to='/sign-in'> SignIn</LinkRouter>
             <LinkRouter to='/sing-up'>SignUp</LinkRouter>
             </div>
         </div>
         </>
         ): 
         <img src="./img/image.png" alt="user" className="user-image" onClick={hide}/>
        }
        </nav>

  )
}
