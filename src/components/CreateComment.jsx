import React from 'react'
import { useRef, useState } from 'react'
import commentActions from '../redux/actions/commentActions'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
// import { useEffect } from 'react'


export default function CreateComment({id}) {
  let [form, setForm]= useState({})
  let {create, success}= commentActions
  let { token} = useSelector(state=>state.userReducer)
  const dispatch = useDispatch()

  let comment= useRef()

  let handleSubmit=async(e)=>{
    e.preventDefault()
    
    let form={
      comment: comment.current.value,
      
    }
    let str= comment.current.value

    if (comment.current.value ==="" || str.length < 3){   
      Swal.fire('Write your comment of at least 3 characters')
    }else{ 
     setForm(form)
     let confirmation= await Swal.fire({
      title: 'Do you want to post it?',
      showCancelButton: true,
      confirmButtonText: 'Send!',
      showLoaderOnConfirm: true,
      
      // allowOutsideClick: () => !Swal.isLoading()
    })
    if (confirmation.isConfirmed){
      let response= await dispatch(create({form ,id, token})).unwrap()
            if (response.success=== false) {
              console.log("entro al if")
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
        <textarea className='input-comment' type="text" minLength={3} placeholder='Leave a comment...' ref={comment} required />
        <div className='icon-comment'>
        <button type="submit" onClick={handleSubmit}><img src='/img/plane.png' alt='send'/></button>
        <button type="reset"><img src='/img/reset.png' alt='reset'/></button>
        </div>
     </form>
  )
}
