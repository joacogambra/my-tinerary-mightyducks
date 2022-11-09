import React from 'react'
import hotels from '../data/hotels'
import { useParams } from 'react-router-dom'
import Details from './Details'
import NotFound from './NotFound'


export default function Detail() {

   const { hotel }= useParams()


     let found= hotels.find(elemento=> elemento.id=== hotel) 
      
     if (found === undefined) {
      return <NotFound/>
     } else {
      
    
  return (
 

         <div>
        <Details name={found.name} image={found.photo[0]} category="Capacity" number={found.capacity} ></Details>
        
        </div>
        
     
      
    
  )
}
}
