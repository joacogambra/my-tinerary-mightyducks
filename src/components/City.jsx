import React from 'react'
import { useParams } from 'react-router-dom'
import Details from './Details'
import NotFound from './NotFound'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url'

export default function City() {
   const { id }= useParams()
   let[currentCity, setCurrentCity] = useState([])

    useEffect(() =>{ 
      axios.get(`${BASE_URL}/cities/${id}`)
       .then(res=> setCurrentCity(res.data.response))
       .catch(error=>error.message)
       // eslint-disable-next-line react-hooks/exhaustive-deps
       }, [])
 
    if (currentCity.length === 0) {
        return <NotFound/>
    } else {
    return (
      <div>
          <Details name={currentCity.name} image={currentCity.photo} number={currentCity.population} category="Population"></Details>
      </div>  
  )
}
}