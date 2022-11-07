import React from 'react'
import { useParams } from 'react-router-dom'
import shows from '../data/shows'


export default function Detail() {
   const { id }= useParams()

  
let showsEncontrado = shows.filter(elemento=>elemento.hotelId === id )
    console.log(showsEncontrado);
  return (

<>

       { showsEncontrado.map((showsEncontrado)=>(

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
                <button className='boton-city'key={showsEncontrado.id}>More</button>
                </div>
                </div>
                </div>
       ))
       }
  
    </>
)}