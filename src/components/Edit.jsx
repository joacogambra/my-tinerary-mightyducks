import { BASE_URL } from '../Api/url'
import { useParams } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import EditCards from './EditCards'


export default function Edit() {
    let {id}= useParams()
   let [shows, setShows]= useState([])
   let [hotel, setHotel]= useState([]) 

   let name= useRef()
   let photo= useRef()
   let capacity= useRef()
   let cityId = useRef()
   let userId = useRef()
    
  console.log(id)
  
    useEffect(()=>{
      
        let query= `${BASE_URL}/api/hotels/${id}`
        axios.get(query)
         .then(response=>setHotel(response.data.response))
         .catch(error=> console.log(error) )
         

    },[id])
      
    useEffect(()=>{
        axios.get(`${BASE_URL}/api/shows?hotelId=${hotel._id}`)
         .then(response=>setShows(response.data.response))
         .catch(error=> console.log(error) )
         return (setShows)

    },[setShows, hotel])
    

    let handleSubmit=(e)=>{
        e.preventDefault()
      let form={
        name: name.current.value,
        photo: photo.current.value,
        capacity: capacity.current.value,
        cityId: cityId.current.value,
        userId: userId.current.value,
      }
  
  


function allCards(array){
    return array?.map((items)=>(
    <EditCards name={items.name} image={items.photo[0]} dato="Capacity" capacity={items.capacity} id={items._id}/>

)) }

return (
    <>
     <div className='flex-row wrap gap'>
     <form className="card" >
           
           <h3> Enter the Hotel information</h3>
           <div className="card">
                  <input name="photo" type="text"  placeholder='Photo'  ref={photo} required className="card__details"/>
              <div className="card_details"></div>
                  <input name= "name"  type="text"  placeholder='Hotel´s Name' ref={name} className="name"  required/>
                  <input name="capacity" type="number"  placeholder='Capacity'  ref={capacity} required/>
                  <input name="cityId" type="text"  placeholder='City Id'  ref={cityId} required/>
                  <input name="userId" type="text"  placeholder='Your Id' ref={userId} required/>
              </div>
                  <button  className='button add' onClick={handleSubmit} > Send Hotel</button>
                  <button  className='button add'  > Cancel </button>
         
      </form>
     </div>
    <h2 className='text-white'>My shows</h2>
    <div className='flex-row wrap gap'>
     {allCards(shows)}
     </div>
    
     </>
  )
  }
}
