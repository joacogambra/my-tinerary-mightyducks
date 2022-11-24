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
        <img src="/img/MT_Logo_1.png" alt="logo" className='logo' onClick={dropDown}/>
        
        
        <div className='drop-down-nav'>
          <LinkRouter to='/home'>Home</LinkRouter>
         <LinkRouter to='/cities'>Cities</LinkRouter>
         <LinkRouter to='/hotels'>Hotels</LinkRouter>
         <LinkRouter to='/new-city'>New City</LinkRouter>
          <LinkRouter to='/new-hotel'>New Hotel</LinkRouter>
        
         </div>
         </div>
         </>
         ): 
         <img src="/img/MT_Logo_1.png" alt="logo" className='logo' onClick={dropDown}/>
        }
         { mostrarOcultar ?
         (<>
         <div className='drop-down'>
          <img src="/img/image.png" alt="user" className="user-image" onClick={hide}/>


            <div className='drop-down-nav w-50' >
              <LinkRouter to='/sign-in'> SignIn</LinkRouter>
              <LinkRouter to='/sign-up'>SignUp</LinkRouter>
              <LinkRouter to='/my-cities'>My Cities</LinkRouter>
              <LinkRouter to='/hotels/admin/'>My Hotels</LinkRouter>
              <LinkRouter to='/my-shows'>My Shows</LinkRouter>
              <LinkRouter to='/my-itineraries'>My Itineraries</LinkRouter>
              
         </div>
        </div>
         </>
         ): 
         <img src="/img/image.png" alt="user" className="user-image" onClick={hide}/>
        }
        </nav>

  )
}
