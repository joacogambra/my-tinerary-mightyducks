import React from 'react'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import CardUserItineraries from './CardUserItineraries'
import { useSelector } from 'react-redux'
import FormNewItinerary from '../components/FormNewItinerary'
export default function MyItinerary() {

  const {_id} = useSelector((store) => store.userReducer)
  let userid = _id

    let [itine, setItine] = useState([])
    useEffect(() => {
      axios.get(`${BASE_URL}/itineraries?userId=` + userid)
        .then(res => setItine(res.data.response))
        .catch(error => console.log(error.message))
      // eslint-disable-next-line
    }, [])

  return (

      <>
      <div className='myCities'>      
        {itine?.map((i)=>(
              <CardUserItineraries city={i} name={i.name} key={i._id} image={i.photo[0]} category={i.description} id={i._id} price={i.price} duration={i.duration}  _id={i._id} />))}
    </div>
      <FormNewItinerary/>
      </>

    
  
    )
  }
  