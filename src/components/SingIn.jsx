import React from 'react'
import SignGoogle from './SignGoogle'
import {Link as LinkRouter} from 'react-router-dom'
import {useRef} from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions'
import axios from 'axios'
import { BASE_URL } from "../Api/url";
import Swal from 'sweetalert';
import {useNavigate} from 'react-router-dom'

export default function SingIn() {   

let dispatch= useDispatch()
let {signIn}= userActions
let email = useRef ()
let password = useRef ()
const navigate = useNavigate()   


function login (login){
  login.preventDefault() 
  let registrationdata = {
    email: email.current.value,
    password: password.current.value,
  } 
// let user= Array.from(registrationdata)
 axios.post(`${BASE_URL}/api/auth/sign-in`, registrationdata ) 
 .then(response=> {
    if (response.data.success=== true){
      dispatch(signIn(response.data))
      return Swal({
         title: (`${ response.data.message}`),
         icon: "success",
         timer: 4000,
        })
    .then(()=>navigate('/home')) 
      }
    else{
      let message = response.data.message.join( ",\n ")
    Swal({
      icon: 'error',
      title: 'Check the info you sent:',
      text: (`${ message }`),
      
     })
    }
})
 .catch(error=> {
  console.log(error.response.data.message);
  
  let message = error.response.data.message
  Swal({
    icon: 'error',
    title: 'Check the info you sent:',
    text: (`${ message }`),
    
   })
  })


// localStorage.setItem ("registrationdata",JSON.stringify(registrationdata))

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