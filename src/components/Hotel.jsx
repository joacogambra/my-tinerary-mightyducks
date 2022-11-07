import React from 'react'
import hotels from '../data/hotels'
import { useParams } from 'react-router-dom'
import Details from './Details'
import shows from '../data/shows'


export default function Detail() {
   const { id }= useParams()

  let perfilEncontrado= hotels.find(elemento=> elemento.id=== id)
  console.log(perfilEncontrado)
let showsEncontrado = shows.filter(elemento=>elemento.hotelId === id )
    console.log(showsEncontrado);
  return (
   
    
    <div className='detail'>
        <Details name={perfilEncontrado.name} image={perfilEncontrado.photo} category="Capacity" number={perfilEncontrado.capacity} ></Details>
        
    </div>
    
  )
}
