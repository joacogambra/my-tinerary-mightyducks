import React from 'react'
import { useParams } from 'react-router-dom'
import activities from '../data/activities'


export default function Detail() {
   const { id }= useParams()

let currentActivity = activities.filter(elemento=>elemento.citiId === id )
  return (

<>
       { currentActivity.map((currentActivity)=>(

        <div class="a-box details">
            <div class="img-container correccion">
                <div class="img-inner">
                 <div class="inner-skew">
                  <img src={currentActivity.photo[0]} alt={currentActivity.name} className="img-card"/>
                </div>
                </div>
                 </div>
                <div class="text-container">
                 <h3> {currentActivity.name}</h3>
                 <p>{currentActivity.description}</p>
                   <div>
                <button className='boton-city'key={currentActivity.id}>More</button>
                </div>
                </div>
                </div>
       ))
       }
    </>
)}