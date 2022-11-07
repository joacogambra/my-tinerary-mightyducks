import React from 'react'
import { useState } from "react"
import Inputs from './Inputs'
export default function DetailCity(props) {
  let [comments, setComments] = useState(false)
  let { name, image, population } = props
  let show = () => {
    setComments(!comments)
   
  }
  return (
    <div class="a-box">
      <div class="img-container correccion">
        <div class="img-inner ">
          <div class="inner-skew">
            <img src={image} alt={name} className="img-card" />
          </div>
        </div>
      </div>
      <div class="text-container">
        <h3>{name}</h3>
        <p>Population: {population}</p>   
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
  )
}
