import React from 'react'
import { useParams } from 'react-router-dom'
import ShowCard from './ShowCard'
import NotFound from './NotFound'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url'


export default function Detail() {
  let [hotels, setHotels]= useState([])
  const { hotel }= useParams()


  useEffect(() =>{ 
 
    axios.get(`${BASE_URL}/api/hotels/${hotel}`)
   .then(response=> setHotels(response.data.response))
   .catch(error=> console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
   
   }, [setHotels, hotel])



    //  let found= hotels.find(elemento=> elemento.id=== hotel) 
      
     if (hotels.length === 0) {
      return <NotFound/>
     } else {
      
    
  return (
 

      
        <ShowCard name={hotels.name} photo={hotels.photo[0]} id={hotels._id} description={hotels.description}>
          <>
            <div className='insta-price' >
            <p>Capacity: {hotels.capacity}</p>
            </div>         
           </>
        </ShowCard>            
    
  )
}
}