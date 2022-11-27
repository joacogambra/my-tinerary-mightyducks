import React from 'react'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
export default function UserNav() {

    let [user, setUser]= useState({})
    let { name, photo,   role, logged}= useSelector(state=>state.userReducer)
  

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
},[])

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
},[user, logged, role])


  return (
    <nav  className='user-nav'>

            <img src="/img/MT_Logo_1.png" alt="logo" className='logo'/>
       
       { profile.map((item,key) => {
              return <LinkRouter to={item.linkTo} key={item.name} >{item.name}</LinkRouter>})}      
        <img src={ photo ? photo: '/img/image.png'} alt="user" className="user-image logged"/>
        
    </nav>
  )
}
