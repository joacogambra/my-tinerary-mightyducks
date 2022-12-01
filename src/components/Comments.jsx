import React from 'react'
import { useState, useEffect } from 'react'
import commentActions from '../redux/actions/commentActions'
import { useDispatch, useSelector } from 'react-redux'
import CreateComment from './CreateComment'

 export default function Comments({id}) {
    let [visible, setVisible]= useState(false)
    let [userComment, setUserComment]= useState(false)
    const hideWhenVisible = {display: visible ? 'none' : ''}
    const showWhenVisible = {display: visible ? '' : 'none'} 
    const dispatch = useDispatch()
    let {getComments}= commentActions
    let comments= useSelector(state=>state.commentReducer)
    let { _id, name } = useSelector(state=>state.userReducer)
console.log(_id);
useEffect(()=>{
 
    dispatch(getComments(id))
  
// eslint-disable-next-line  
}, [])



 
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
            let isUser= _id=== (id.userId._id || id.userId )

            return <div className={isUser? 'user-logged': 'comments'}>
              <div className='comments-info'>
                <div className='comments-user'>
                  <img src={id.photo} alt={id.userId.name} />
                  <p><span className='user-name'> {id.userId.name|| name} </span>said: </p>
                </div>
                
                <p> {id.updatedAt.slice(0, 10)}</p>  
              </div>            
              <div className='user-options'>
                <p>{id.comment} </p>   
                {isUser ?(<img src="/img/options.png" alt="options"></img>)
                  :(null)}
              </div>
              
            </div>
          })
        }
        <CreateComment id={id}/>
      </div>
    </div>
    </>
  )
}
