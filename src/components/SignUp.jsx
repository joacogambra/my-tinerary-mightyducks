import React from 'react'
import SignGoogle from './SignGoogle'

export default function SignUp() {
    let fullName = React.useRef ()
    let userName = React.useRef ()
    let email = React.useRef ()
    let phone = React.useRef ()
    let pass = React.useRef ()
    let signup = React.useRef ()

    function registration (register){
        register.preventDefault() 
    let registrationdata = {
          fullName: fullName.current.value,
          userName: userName.current.value,
          email: email.current.value,
          phone: phone.current.value,
          pass: pass.current.value,
        } 
    
    localStorage.setItem ("registrationdata",JSON.stringify(registrationdata))
    signup.current.reset()
    }

  return (
      <form action="#" onSubmit= {registration} ref={signup} className='sign-in'  >
      <h3 class="title">Registration</h3>        
            <input ref={fullName} type="text" placeholder="Enter your FullName" required/>                  
            <input ref={userName} type="text" placeholder="Enter your Username" required/>                 
            <input ref={email} type="text" placeholder="Enter your email" required/>                 
            <input ref={phone} type="text" placeholder="Enter your Phone Number" required/>                   
            <input ref={pass} type="password" placeholder="Create your password" required/>                 
            <input type="password" placeholder="Confirm your password" required/>        
        <div class="button login">
          <input type="submit" value="Register"/>
        </div>
      <SignGoogle/>
      </form>

  )
}
