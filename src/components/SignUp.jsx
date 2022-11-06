import React from 'react'
import { json } from 'react-router-dom'

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
    <div className='container-signup'>
    <div class="signup">
    <div class="title">Registration</div>
    <div class="content">
      <form action="#" onSubmit= {registration} ref={signup} >
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input ref={fullName} type="text" placeholder="Enter your name" required/>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input ref={userName} type="text" placeholder="Enter your username" required/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input ref={email} type="text" placeholder="Enter your email" required/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input ref={phone} type="text" placeholder="Enter your number" required/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input ref={pass} type="password" placeholder="Enter your password" required/>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" placeholder="Confirm your password" required/>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Register"/>
        </div>
        <div class="button">
          <input value="Register with Google"/>
        </div>
      </form>
    </div>
</div>
</div>
  )
}
