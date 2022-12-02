import React from 'react'
import { useRef, useState } from 'react'
import commentActions from '../redux/actions/commentActions'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
// import { useEffect } from 'react'


export default function CreateComment(props) {
  let {value, id}=props
  // let [form, setForm]= useState({})
  let {create, success}= commentActions
  let { token} = useSelector(state=>state.userReducer)
  const dispatch = useDispatch()
  let post= useRef()
  

  let handleSubmit=async(e)=>{
    e.preventDefault()
 
    
    let comment= post.current.value
   
  
    let str= comment

    if (post.current.value ==="" || str.length < 3){   
      Swal.fire('Write your comment of at least 3 characters')
    }else{ 
    //  setForm(form)
     let confirmation= await Swal.fire({
      title: 'Do you want to post it?',
      showCancelButton: true,
      confirmButtonText: 'Send!',
      showLoaderOnConfirm: true,
      
      // allowOutsideClick: () => !Swal.isLoading()
    })
    if (confirmation.isConfirmed){
    
      await dispatch(create({comment, value, id, token})).unwrap()
            if (success=== false) {
          
               Swal.fire({
                icon: 'error',
                title: 'Post can not be sent, try again',
                
               })
            }  else{
              Swal.fire({
                title: `Post Sent!`,
               
              })
            }
          }
         
    }
  }

  
  return (
     <form className='comments'>  
        <textarea className='input-comment' type="text" minLength={3} placeholder='Leave a comment...' ref={post} required />
        <div className='icon-comment'>
        <button type="submit" onClick={handleSubmit}><img src='/img/plane.png' alt='send'/></button>
        <button type="reset"><img src='/img/reset.png' alt='reset'/></button>
        </div>
     </form>
  )
}
