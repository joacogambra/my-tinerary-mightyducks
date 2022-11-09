import React from 'react'
import cities from '../data/cities'
import { useParams } from 'react-router-dom'
import Details from './Details'
import NotFound from './NotFound'

export default function City() {
   const { id }= useParams()

    let currentCity= cities.find(elemento=> elemento.id=== id)
    if (currentCity === undefined) {
      return <NotFound/>
     } else {
      

  return (
    <div>
        <Details name={currentCity.name} image={currentCity.photo} number={currentCity.population} category="Population"></Details>
    </div>
    
  )
}
}