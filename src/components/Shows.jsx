import React from 'react'
import { useParams } from 'react-router-dom'
import shows from '../data/shows'
import Cards from './Cards'


export default function Detail() {
   const { hotel }= useParams()
console.log(hotel)  
let showsEncontrado = shows.filter(elemento=>elemento.hotelId === hotel )
    console.log(showsEncontrado);
  return (

<>

       { showsEncontrado.map((showsEncontrado, key)=>(
         
       <Cards name={showsEncontrado.name} image={showsEncontrado.photo} id={showsEncontrado.id} category= "Description" continente={showsEncontrado.description} ></Cards>
      
       ))
       }
  
    </>
)}