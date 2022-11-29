import React from 'react'
import SignGoogle from './SignGoogle'
import Swal from 'sweetalert2'
import { BASE_URL } from '../Api/url'
import axios from 'axios'

export default function SignUp() {
  let name = React.useRef()
  let lastName = React.useRef()
  let age = React.useRef()
  let photo = React.useRef()
  let email = React.useRef()
  let password = React.useRef()
  let signup = React.useRef()

  async function registration(register) {
    register.preventDefault()
    let registrationdata = {
      name: name.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
      photo: photo.current.value,
      email: email.current.value,
      password: password.current.value,
    }
    
    await axios.post(`${BASE_URL}/api/auth/sign-up`, registrationdata)
      .then((res) => {
        try{
          if(res.data.success){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Please check your email and verified your account',
              showConfirmButton: false,
              timer: 3500
            })
          }else{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: res.data.message,
              showConfirmButton: false,
              timer: 3500
            })
          }
        }catch(error){
         console.log(error.message);
        }
      })
  }


  return (
    <form action="#" onSubmit={registration} ref={signup} className='sign-in'>
      <h3 className="title">Registration</h3>
      <input ref={name} type="text" placeholder="Enter your first name" required />
      <input ref={lastName} type="text" placeholder="Enter your last name" required />
      <input ref={age} type="number" placeholder="Enter your age" required />
      <input ref={photo} type="text" placeholder="Enter photo link" required />
      <input ref={email} type="text" placeholder="Enter your email" required />
      <input ref={password} type="password" placeholder="Create your password" required />
      <input type="submit" value="Register" className="button" />

      <SignGoogle />
    </form>

  )
}
