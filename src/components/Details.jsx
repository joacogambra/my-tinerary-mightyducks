import React from 'react'
import { useState } from "react"
import Inputs from './Inputs'


export default function Details(props) {
  let [comments, setComments] = useState(false)
  let { name, image, category, number } = props
  let show = () => {
    setComments(!comments)
   
  }

  return (

    <div className="a-box details">
      <div className="img-container correccion ">
        <div className="img-inner ">
          <div className="inner-skew">
            <img src={image} alt={name} className="img-card " />
          </div>
        </div>
      </div>
      <div className="text-container">
         <h3> {name}</h3>
        {`${category}:${number}`}
         <div>
        </div>    
        <div>
         { show 
              ?(<button className='button' onClick={show}> Comments</button>)
              :(<>
                <div>
                  <input type="text" disabled placeholder='Beautiful!' />
                  <Inputs type="text" name={name} placeholder="Leave a comment..." required />
                </div>
                <button className='button' onClick={show}> Hide Comments</button>

              </>)}
              </div>
      </div>
      </div>
      )

}
