import React from 'react'
import { useState } from "react"
import Inputs from './Inputs'



export default function Details(props) {
  let [comments, setComments] = useState(false)
  let { name, image, category, number } = props
  let show = () => {
    setComments(!comments)
    console.log(comments)
    
   
  }

  return (
          <div className='flex-row'>
          <div className="card-horizontal background">
                   <div className= "card-horizontal-img">
                        <img src={image} alt={name} />
                   </div>
                  <div className="card-horizontal-text">
                        <div className="name">
                             <h4> {name}</h4>
                             <p>{`${category}:  ${number}`}</p>
                        </div>    
                      <div>
                       { comments 
                        ?(<button className='button' onClick={show}> Comments</button>)
                         :(<>
                          <div className='flex-column '>
                           <button className='button' onClick={show}> Hide Comments</button>
                          <input type="text" disabled placeholder='@Ann said: Beautiful!' />
                          <Inputs type="text" name={name} placeholder="Leave a comment..." required />
                      </div>

                    </>)}
                
                  </div>
             
            </div>  
            </div>  
            </div>
    
      )
    }
    
