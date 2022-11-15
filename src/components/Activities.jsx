import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url'
import CardActivities from './CardActivities'


export default function Detail() {
   const { id }= useParams()
   let [activity,setActivity] = useState([])

    useEffect(()=>{
        axios.get(`${BASE_URL}/itineraries?citiId=${id}`)
        .then(res => setActivity(res.data.response))
        .catch(error=> console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(activity);

  return (

  <div className='actividades'>
       { activity.map((activity)=>(
      <CardActivities name={activity.name} image={activity.photo[0]} image1={activity.photo[1]} id={activity._id} continente={activity.description} price={activity.price} ></CardActivities>    
       ))
       }
       </div>
)}