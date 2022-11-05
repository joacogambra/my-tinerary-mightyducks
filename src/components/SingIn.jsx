import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'

export default function SingIn() {
  return (
    <form className='sign-in'>
        <div>
            <h3> Welcome Back!</h3>
            <p> Please Sign In</p>
        </div>
            <div>
            <label>
                <input type="email" name="email" placeholder='example@mail.com'></input>
            </label>
            </div>
            <div>
                <label>
                    <input type="password" name="  password" placeholder='password'/>
                </label>
            </div>
            <button type="submit"> Login</button>
            <div id="gSignInWrapper">
                 <span class="label">Sign in with:</span>
                <div id="customBtn" class="customGPlusSignIn">
                 <span class="icon"></span>
                 <span class="buttonText">Google</span>
            </div>
            </div>
            <div>
                <p> Don't have an account? Just <LinkRouter to='/sign-up'> "Sign Up Here" </LinkRouter></p>
            </div>
        
    </form>
  )
}
