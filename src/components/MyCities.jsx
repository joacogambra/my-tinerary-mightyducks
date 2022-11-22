import React from 'react'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import CardUserCities from './CardUserCities'
import { useSelector } from 'react-redux'

export default function MyCities() {

  const myCities = useSelector((store) => store.citiesReducer.myCities)
  console.log(myCities);
  // const dispatch = useDispatch()

  let userid = "636d2cd4a943744050f9ef16"
  //  636d2cd4a943744050f9ef16
  let [cities, setCities] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}/cities?userId=` + userid)
      .then(res => setCities(res.data.response))
      .catch(error => console.log(error.message))
    // eslint-disable-next-line
  }, [])
  console.log(cities);  

  return (
    <div className='myCities'>
      {cities?.map((i)=>(
            <CardUserCities city={i} name={i.name} key={i._id} image={i.photo} continente={i.continent} category="Continent" id={i._id}/>))}
    </div>
  )
}
