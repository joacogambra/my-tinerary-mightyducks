import React from 'react'
import SignGoogle from './SignGoogle'
import {Link as LinkRouter} from 'react-router-dom'
import {useRef} from 'react'


export default function SingIn() {   
    let email = useRef ()
    let password = useRef ()
   
 

    function login (login){
        login.preventDefault() 
        let registrationdata = {
          email: email.current.value,
          password: password.current.value,
        } 
   
    localStorage.setItem ("registrationdata",JSON.stringify(registrationdata))
    
    }



  return (
    <form className='sign-in'>
     
            <h3> Welcome Back!</h3>
            <p> Please Sign In</p>
            <input name="email" placeholder="example@mail.com" type="email" ref={email}/>  
            <input dato="password" placeholder="Password" type="password" ref={password}/>
            <input type="submit" className='button' value="Log In" onClick={login}/>

             <SignGoogle/>
            <div>
                <p> Don't have an account? Just <LinkRouter to='/sign-up'> "Sign Up Here" </LinkRouter></p>
            </div>
        
    </form>
  )
}