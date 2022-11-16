import React from 'react'
import { useParams } from 'react-router-dom'
import Cards from './Cards'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../Api/url'

export default function Detail() {
   let [shows, setShows]= useState([])
   const { hotel }= useParams()
   console.log(hotel);
   
   useEffect(() =>{ 
      
   axios.get(`${BASE_URL}/api/shows?hotelId=${hotel}`)
  .then(response=> setShows(response.data.response))
  .catch(error=> console.log(error))
  
  }, [])


  return (

<>    { shows.length > 0

      ? ( shows.map((shows, key)=>(
         
       <Cards name={shows.name} image={shows.photo} id={shows._id} key={shows._id} category= "Description" continente={shows.description} ></Cards>
      
       ))
       )
       : ( 
         <div className="card">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKzviPWMWwzK3PI1DtqoAeQ6Wym9c9g8Mv-M8X3Oaka6oMjzMvBrcZMKbHv8tTF059mw&usqp=CAU" alt="not_available" className="img-card "/>
            <div className="name">
               <h3>This Hotel doesn't have shows available yet...</h3>
            </div>

         </div>
       )
      }
    </>
)}