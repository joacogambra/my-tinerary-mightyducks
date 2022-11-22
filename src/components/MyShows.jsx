import React from 'react'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import CardUserShows from './CardUserShows'
import { useSelector } from 'react-redux'

export default function MyShows() {
    const shows = useSelector((store) => store.showReducer.shows)
    console.log(shows);
  
    let userid = "636d2cd4a943744050f9ef16"
    let [showDel, setShowDel] = useState([])
    useEffect(() => {
      axios.get(`${BASE_URL}/api/shows?userId=` + userid)
        .then(res => setShowDel(res.data.response))
        .catch(error => console.log(error.message))
      // eslint-disable-next-line
    }, [])
    console.log(showDel);  
    return (
      <div className='myCities'>
        {showDel?.map((i)=>(
              <CardUserShows city={i} name={i.name} key={i._id} image={i.photo[0]} category={i.description} id={i._id} price={i.price}/>))}
      </div>
    )
  }