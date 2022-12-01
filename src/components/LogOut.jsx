import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import userActions from '../redux/actions/userActions';

export default function LogOut() {

let { signOut } = userActions
let { token, } = useSelector(state => state.userReducer)
let dispatch = useDispatch()
    
function logOut() {
        Swal.fire({
          title: 'Are you sure want logged out?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#252525',
          cancelButtonColor: '#252525',
          confirmButtonText: 'Log out'
        }).then(async (result) => {
          if (result.isConfirmed) {
             dispatch(signOut(token));
            Swal.fire(
              'Logged out succesfally',
              'Come back soon',
              'success'
            )
            .then(()=>{window.location='/home'})
          }
        })
      }

  return (
    <p onClick={()=>logOut()} className='user-nav'>
    LogOut </p>  
  )
}
