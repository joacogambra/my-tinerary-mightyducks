import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function Optionspost(id) {

    let [visible, setVisible]= useState(false)
    const hideWhenVisible = {display: visible ? 'none' : ''}
    const showWhenVisible = {display: visible ? '' : 'none'} 
    let { _id,  } = useSelector(state=>state.userReducer)
    let isUser= _id=== (id.userId._id || id.userId )




  return (
     <div className='user-options' style={hideWhenVisible}>
                <p>{id.comment} </p>   
                {isUser ?(
                    <>
                         <img src="/img/options.png" alt="options" style={hideWhenVisible} onClick={()=> setVisible(true)}></img>
                                <div style={showWhenVisible}  onClick={()=> setVisible(false)}>
                                    <img src='/img/change.png' alt='edit'/>
                                    <img src='/img/borrar.png' alt='delete' onClick={()=> setVisible(true)}/>
                                </div>
                        </>)

                  :(null)}
              </div>
  )
}
