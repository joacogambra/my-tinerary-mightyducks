import React from 'react'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import CardUserItineraries from './CardUserItineraries'
import { useSelector } from 'react-redux'
import FormNewItinerary from '../components/FormNewItinerary'
export default function MyItinerary() {

  // let [id, setId]= useState('')
  const {_id} = useSelector((store) => store.userReducer)
  let userid = _id

    const itineraries = useSelector((store) => store.itineraryReducer.itineraries)
  
    console.log(itineraries);
    // let userid = "636d2cd4a943744050f9ef16"
    //  636d2cd4a943744050f9ef16
    let [itine, setItine] = useState([])
    useEffect(() => {
      axios.get(`${BASE_URL}/itineraries?userId=` + userid)
        .then(res => setItine(res.data.response))
        .catch(error => console.log(error.message))
      // eslint-disable-next-line
    }, [])

    //let { name, image, continente, category, city, price, duration } = props
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
  