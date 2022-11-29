import React from 'react'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'

export default function UserNav() {

    let [user, setUser]= useState({})
    let [dropDownOcultar, setdropDownOcultar] = useState(false)
    let { name, photo, role, logged}= useSelector(state=>state.userReducer)
    console.log(role);
    useEffect(()=>{
      
      if(logged===true){
        setUser({
          name: name,
          photo: photo,
          logged: logged,
          role: role
        })
    
  }
// eslint-disable-next-line  
},[logged])

let logProfile=[
    {linkTo: "/my-profile", name: "Profile"},
    {linkTo: "/", name: "Log Out"},
    {linkTo: '/my-shows', name: 'My Shows'},
    {linkTo: '/my-itineraries', name: 'My Itineraries'},
]

let admProfile=
logProfile.concat([
    {linkTo: '/my-cities', name: 'My Cities'},
    {linkTo: '/hotels/admin/', name: 'My Hotels'},
    
])

let [profile,SetProfile]= useState(logProfile)

useEffect(()=>{
  if (role === 'adm' ){
    SetProfile(admProfile)
  }
  else{

    SetProfile(logProfile)
  }

  // eslint-disable-next-line  
},[user, role])

console.log(role)
let dropDown=()=>{
  setdropDownOcultar(!dropDownOcultar)
}



  return (
    <nav  className='user-nav'>

{ dropDownOcultar  ?
     ( 
     <><div className="drop-down">
    <img src="/img/MT_Logo_1.png" alt="logo" className='logo' onClick={dropDown}/>
    
    
    <div className='drop-down-nav'>
      
      <LinkRouter to='/home'>Home</LinkRouter>
      <LinkRouter to='/cities'>Cities</LinkRouter>
      <LinkRouter to='/hotels'>Hotels</LinkRouter>
      { role=== 'adm'
      ?(<>
      <LinkRouter to='/new-city'>New City</LinkRouter>
      <LinkRouter to='/new-hotel'>New Hotel</LinkRouter>
      </>)
      :(null)
      }  
     </div>
     </div>
     </>)
     :(<img src="/img/MT_Logo_1.png" alt="logo" className='logo ' onClick={dropDown}/> ) 
     
    }
    
       
       { profile.map((item,key) => {
              return <LinkRouter to={item.linkTo} key={item.name} >{item.name}</LinkRouter>})}      
        <img src={ photo ? photo: '/img/image.png'} alt="user" className="user-image logged"/>
        
    </nav>
  )
}
