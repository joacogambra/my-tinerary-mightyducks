import React from 'react'
import cities from '../data/cities'
import { useParams } from 'react-router-dom'
import DetailCity from './DetailCity'

export default function City() {
   const { id }= useParams()

    let currentCity= cities.find(elemento=> elemento.id=== id)

  return (
    <div className='detail citylayout'>
        <DetailCity name={currentCity.name} image={currentCity.photo} population={currentCity.population} ></DetailCity>
    </div>
    
  )
}
