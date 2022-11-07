import React from 'react'
import hotels from '../data/hotels'
import { useParams } from 'react-router-dom'
import Details from './Details'
import shows from '../data/shows'


export default function Detail() {
   const { hotel }= useParams()
   console.log(hotel);
  let perfilEncontrado= hotels.find(elemento=> elemento.id=== hotel)
  console.log(perfilEncontrado)
let showsEncontrado = shows.filter(elemento=>elemento.hotelId === hotel )
    console.log(showsEncontrado);
  return (
   
    
    <div className='detail'>
        <Details name={perfilEncontrado.name} image={perfilEncontrado.photo} category="Capacity" number={perfilEncontrado.capacity} ></Details>
        
    </div>
    
  )
}
