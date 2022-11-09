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
        <div>
            <h3> Welcome Back!</h3>
            <p> Please Sign In</p>
        </div>
            <div>
            <Inputs dato={email} placeholder="example@mail.com" type="email"/>
            </div>
            <div>
            <Inputs dato={password} placeholder="Password" type="password"/>
            </div>
            <button type="submit" className='button login'> Login</button>
             <SignGoogle/>
            <div>
                <p> Don't have an account? Just <LinkRouter to='/sign-up'> "Sign Up Here" </LinkRouter></p>
            </div>
        
    </form>
  )
}