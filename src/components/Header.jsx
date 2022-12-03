import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import {  useSelector } from 'react-redux';
import LogOut from './LogOut'


export default function Header() {
  let [dropDownOcultar, setdropDownOcultar] = useState(false)
  let [mostrarOcultar, setMostrarOcultar] = useState(false)
  let [user, setUser] = useState({})
  let { name, photo, _id, role, logged } = useSelector(state => state.userReducer)

  useEffect(() => {
    if (logged === true) {
      setUser({
        name: name,
        photo: photo,
        logged: logged,
        role: role,
        _id: _id
      })
    }
    // eslint-disable-next-line  
  }, [])


  let hide = () => {
    setMostrarOcultar(!mostrarOcultar)
  }
  let dropDown = () => {
    setdropDownOcultar(!dropDownOcultar)
  }

  let initialProfile = [
    { linkTo: "/sign-in", name: "Sign In" },
    { linkTo: "/sign-up", name: "Sign Up" }
  ]
  let [profile, SetProfile] = useState(initialProfile)

  let logProfile = [
    { linkTo: "/my-profile", name: "Profile" },
    { linkTo: '/my-shows', name: 'My Shows' },
    { linkTo: '/my-itineraries', name: 'My Itineraries' },
    { linkTo: '/my-reactions', name: 'My Reactions' },
  ]

  let adminProfile =
    logProfile.concat([
      { linkTo: '/my-cities', name: 'My Cities' },
      { linkTo: '/hotels/admin/', name: 'My Hotels' },

    ])

  useEffect(() => {

    if (logged === true) {
      SetProfile(logProfile)
      if (role === 'admin') {
        SetProfile(adminProfile)
      }
    }
    else {
      SetProfile(initialProfile)
    }
    // eslint-disable-next-line  
  }, [user, logged, role])

  return (

    <nav className='navBar'>

      {dropDownOcultar ?
        (
          <><div className="drop-down">
            <img src="/img/MT_Logo_1.png" alt="logo" className='logo' onClick={dropDown} />


            <div className='drop-down-nav'>

              <LinkRouter to='/home'>Home</LinkRouter>
              <LinkRouter to='/cities'>Cities</LinkRouter>
              <LinkRouter to='/hotels'>Hotels</LinkRouter>
              {role === 'admin'
                ? (<>
                  <LinkRouter to='/new-city'>New City</LinkRouter>
                  <LinkRouter to='/new-hotel'>New Hotel</LinkRouter>
                </>)
                : (null)
              }
            </div>
          </div>
          </>)
        : (<img src="/img/MT_Logo_1.png" alt="logo" className='logo ' onClick={dropDown} />)

      }

      {mostrarOcultar ?
        (<div className='drop-down'>
          <img src={photo ? photo : '/img/image.png'} alt="user" className="user-image dropDown logged" onClick={hide} />

          <div className='drop-down-nav w-50' >
            {profile.map((item, key) => {
              return <LinkRouter to={item.linkTo} key={item.name} >{item.name}</LinkRouter>
            })}
            {logged === true ? (
              <LogOut/>      
            ) : null}
          </div>
        </div>)
        : (<img src={photo ? photo : '/img/image.png'} alt="user" className="user-image dropDown logged" onClick={hide} />)

      }

    </nav>
  )
}