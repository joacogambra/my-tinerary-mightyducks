import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions/userActions';
import Swal from 'sweetalert2';


export default function Header() {
  let [dropDownOcultar, setdropDownOcultar] = useState(false)
  let [mostrarOcultar, setMostrarOcultar]= useState(false)
  let [user, setUser]= useState({})
  
  ///login
  
  let { name, photo,   role, logged, token}= useSelector(state=>state.userReducer)
  let {signOut} = userActions
  let dispatch = useDispatch()
  
  async function cerrarSesion(event){
    let res = await dispatch(signOut(token))
    console.log(res);
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'question',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     dispatch(signOut(token))
    //       Swal.fire(
    //       'LogOut',
    //       'logout',
    //       'success'
    //     )
    //   }
    // })
  }
  
  

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


let hide = ()=>{
  setMostrarOcultar(!mostrarOcultar)
}
let dropDown=()=>{
  setdropDownOcultar(!dropDownOcultar)
}

let initialProfile= [
  {linkTo:"/sign-in", name: "Sign In"},
  {linkTo: "/sign-up", name: "Sign Up"}
]
let [profile,SetProfile]= useState(initialProfile)

let logProfile=[
  {linkTo: "/profile", name: "Profile"},
  {linkTo: "/", name: "Log Out"},
  {linkTo: '/my-shows', name: 'My Shows'},
  {linkTo: '/my-itineraries', name: 'My Itineraries'},
]

let admProfile=
  logProfile.concat([
    {linkTo: '/my-cities', name: 'My Cities'},
    {linkTo: '/hotels/admin/', name: 'My Hotels'},
    
  ])


useEffect(()=>{

if (logged === true){
    SetProfile(logProfile)
 if (role === 'adm' ){
           SetProfile(admProfile)
        }}
  else{
    SetProfile(initialProfile)
  }
  // eslint-disable-next-line  
},[user, logged, role])

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
    
     { mostrarOcultar ?
    (<div className='drop-down'>
      <img src={ photo ? photo : '/img/image.png'} alt="user" className="user-image dropDown logged" onClick={hide}/>
       
    <div className='drop-down-nav w-50' >
        {profile.map((item,key) => {
              return <LinkRouter to={item.linkTo} key={item.name} >{item.name}</LinkRouter>})}
     </div>
    </div>)
    :(<img src={ photo ? photo: '/img/image.png'} alt="user" className="user-image dropDown logged" onClick={hide}/>) 
       
    }

    </nav>
)
}