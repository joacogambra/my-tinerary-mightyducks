import React from 'react'
import { useState} from 'react'
import InputSearch from './InputSearch'
import Select from './Select'
import Cards from './Cards'
import axios from 'axios'
import { BASE_URL } from '../Api/url';
import { useEffect } from 'react'


export default function Hotels() {
  let [hotels, setHotels]= useState([])
  let [busqueda, setBusqueda]= useState('')
  let [orden, setOrden]= useState('')

useEffect(() =>{ 
 
   axios.get(`${BASE_URL}/api/hotels/`)
  .then(response=> setHotels(response.data.response))
  .catch(error=> console.log(error))
  
  }, [])


  function search(e){
   setBusqueda(e.target.value)
   let query= `${BASE_URL}/api/hotels?name=${e.target.value}&order=${orden}`
   axios.get(query)
   .then(response=> setHotels(response.data.response))
   .catch(error=> console.log(error))
}

 function sortBy(e){
   setOrden(e.target.value)
   let query= `${BASE_URL}/api/hotels?name=${busqueda}&order=${e.target.value}`
   axios.get(query)
   .then(response=> setHotels(response.data.response))
   .catch(error=> console.log(error))
   
 }




  function printCards(array){
   return array.map((items)=>(
      <Cards key={items._id} name={items.name} image={items.photo} continente={items.capacity} category="Capacity" id={items._id} page="hotel"></Cards>
   ))
  }

  return (
   <>
   <div className='flex-column '>
    <div className='input-nav'  >
    <InputSearch setchange={search} dato="search" type="text" placeholder="search"/>
    <Select value1="asc" value2="desc" onchange={sortBy}  ></Select>
      </div>
      <div className='background flex-row wrap gap'>
         {printCards(hotels)}  
      </div>
      </div>
      </>
  )
}
