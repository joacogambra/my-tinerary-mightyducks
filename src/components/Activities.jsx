import React from 'react'
import { useParams } from 'react-router-dom'
import activities from '../data/activities'
import Cards from './Cards'


export default function Detail() {
   const { id }= useParams()

let currentActivity = activities.filter(elemento=>elemento.citiId === id )
  return (

<>
       { currentActivity.map((currentActivity)=>(

<Cards name={currentActivity.name} image={currentActivity.photo[1]} id={currentActivity.id} category= "Description" continente={currentActivity.description} ></Cards>
      
       ))
       }
    </>
)}