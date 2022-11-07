import React from 'react'
import { useParams } from 'react-router-dom'
import shows from '../data/shows'


export default function Detail() {
   const { hotel }= useParams()
console.log(hotel)  
let showsEncontrado = shows.filter(elemento=>elemento.hotelId === hotel )
    console.log(showsEncontrado);
  return (

<>

       { showsEncontrado.map((showsEncontrado, key)=>(

        <div class="a-box details">
            <div class="img-container correccion ">
                <div class="img-inner">
                 <div class="inner-skew">
                  <img src={showsEncontrado.photo} alt={showsEncontrado.name} className="img-card"/>
                </div>
                </div>
                 </div>
                <div class="text-container">
                 <h3> {showsEncontrado.name}</h3>
                   <div>
                <button className='boton-city' id={showsEncontrado.id} key={showsEncontrado.id}>More</button>
                </div>
                </div>
                </div>
       ))
       }
  
    </>
)}