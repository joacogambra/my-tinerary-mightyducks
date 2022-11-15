import React from 'react'
import SignGoogle from './SignGoogle'
import Inputs from './Inputs'
import {Link as LinkRouter} from 'react-router-dom'
import {useRef} from 'react'


export default function SingIn() {   
    let email = useRef ()
    let password = useRef ()
    let signin= useRef()
 

    function login (login){
        login.preventDefault() 
        let registrationdata = {
          email: email.current.value,
          password: password.current.value,
        } 
    
    localStorage.setItem ("registrationdata",JSON.stringify(registrationdata))
    signin.current.reset()
    }



  return (
    <form className='sign-in'onSubmit={login} ref={signin}>
     
            <h3> Welcome Back!</h3>
            <p> Please Sign In</p>
            <Inputs dato={email} placeholder="example@mail.com" type="email"/>  
            <Inputs dato={password} placeholder="Password" type="password"/>
            <input type="submit" className='button' value="Log In"></input>

             <SignGoogle/>
            <div>
                <p> Don't have an account? Just <LinkRouter to='/sign-up'> "Sign Up Here" </LinkRouter></p>
            </div>
        
    </form>
  )
}