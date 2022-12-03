import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url'
import CardActivities from './CardActivities'
// import ShowCard from './ShowCard'
// import Comments from './Comments'

export default function Detail(props) {
   const { id }= useParams()
   let [activities,setActivity] = useState([])

    useEffect(()=>{
        axios.get(`${BASE_URL}/itineraries?citiId=${id}`)
        .then(res => setActivity(res.data.response))
        .catch(error=> console.log(error))
        // eslint-disable-next-line
    }, [])
  
  return ( 
    <div className='flex-row gap'>

   {     activities.map((activity)=>(
              <CardActivities name={activity.name}  image={activity.photo[0]} image1={activity.photo[1]} id={activity._id} continente={activity.description} price={activity.price} itinerary={activity} key={activity.name}  value='itineraryId'>
        

              </CardActivities>



        ))}
        </div>
      //   activities.map((activity)=>(
      //      <ShowCard name={activity.name} photo={activity.photo[0]} id={activity._id} description={activity.description} value='itineraryId'>
      //      <>
      //        <div className='insta-price' >
      //        <p>Price: ${activity.price}</p>
      //        <p>Duration: {activity.duration}hs</p>
      //        </div>
      //       <div>
      //        { <Comments id={activity._id} value='itineraryId'/>   }
      //       </div>
      //       </>
      //    </ShowCard>
  
      //  ))
)}