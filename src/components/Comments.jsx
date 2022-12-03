import React from 'react'
import { useState, useEffect } from 'react'
import commentActions from '../redux/actions/commentActions'
import { useDispatch, useSelector } from 'react-redux'
import CreateComment from './CreateComment'
import Swal from 'sweetalert2'

 export default function Comments(props) {
  let {id, value}=props
    let [visible, setVisible]= useState(false)
    let [options, setOptions]= useState(false)
    const hideWhenVisible = {display: visible ? 'none' : ''}
    const showWhenVisible = {display: visible ? '' : 'none'}
    const hideOpt = {display: options ? 'none' : ''}
    const showOpt = {display: options ? '' : 'none'}
   
    const dispatch = useDispatch()
    let {getComments, erase, edit}= commentActions
    let comments= useSelector(state=>state.commentReducer)
    let { _id, name, token, } = useSelector(state=>state.userReducer)
   

useEffect(()=>{

   dispatch(getComments(id))
}, [])

let handleDelete =async(e)=>{ 
    let commentId= (e.target.name)

   let confirmation= await Swal.fire({
    title: 'Do you want to delete it?',
    showCancelButton: true,
    confirmButtonText: 'Yess!',
    showLoaderOnConfirm: true,
    
  })
  if (confirmation.isConfirmed){
    let response= await dispatch(erase({commentId, id, token})).unwrap()
          if (response.success=== false) {
          
             Swal.fire({
              icon: 'error',
              title: 'We could not delete it',
              
             })
          }  else{
            Swal.fire({
              title: `Post delete!`,
             
            })
          }
        }
       
  }
  
  let handleEdit=async(e)=>{
    let commentId=(e.target.name)
  
    Swal.fire({
      title: 'Edit your comment',
      html: `<input type="text" id="comment" class="swal2-input">`,
      confirmButtonText: 'Send',
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: () => {
        const comment = Swal.getPopup().querySelector('#comment').value
        
        if (!comment || comment.length<3) {
          Swal.showValidationMessage(`Send a comment of at least 3 characters`)
          
        }
        else{
          
      
       
          dispatch(edit({comment: comment, commentId: commentId , id: id, token: token}))
        }
      } 

})
}

  return (
   
   <>
    <div className='insta-desc' style={hideWhenVisible} >
    <img src='/img/comment.PNG' alt='show comments' onClick={()=> setVisible(true)}></img>
    </div>
    <div className='insta-desc' style={showWhenVisible}>
          <div>
          <img src='/img/comment.PNG' alt='show comments' onClick={()=> setVisible(false)}></img>
          </div>
          
          <div className='comments-box'>
          { comments[id]?.map(function (id, key) {
            let isUser= _id=== (id.userId?._id || id.userId )
            
           
            return <div className={isUser? 'user-logged': 'comments'} >
              <div className='comments-info' key={id._id}>
                <div className='comments-user'>
                  <img src={id.photo} alt={id.userId?.name} />
                  <p><span className='user-name'> {id.userId?.name|| name} </span>said: </p>
                </div>
                
                <p> {id.updatedAt?.slice(0, 10)}</p>  
              </div>            
              <div className='user-options'>
                <p>{id.comment} </p>   
                {isUser ?(<img src="/img/options.png" alt="options" onClick={()=> setOptions(true)} style={hideOpt} />)
                  :(null)
                 }
                 {options && isUser
                        ?(<div onClick={()=> setOptions(false)} className="icon-option" style={showOpt} >
                        <img src='/img/change.png' alt='edit' onClick={handleEdit} name={id._id} />
                       <img src='/img/borrar.png' alt='delete'  onClick={handleDelete} name={id._id} />
                        </div>)
                        :(null)

                      }
              </div>
              
            </div>
          })
        
        }
        <CreateComment value={value} id={id}/>
      </div>
    </div>
    </>
  )
}
