import React from 'react'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import CardUserShows from './CardUserShows'
import { useSelector, useDispatch } from 'react-redux'
import showActions from '../redux/actions/showActions'
import { Link as LinkRouter } from 'react-router-dom'

export default function MyShows() {
    let { read }= showActions
    const dispatch= useDispatch()
    const {_id} = useSelector((store) => store.userReducer)
//traer
    let userid = _id
    let [showDel, setShowDel] = useState([])
    useEffect(() => {
      axios.get(`${BASE_URL}/api/shows?userId=` + userid)
        .then(res => {setShowDel(res.data.response)
                      dispatch(read(res.data.response))})
        .catch(error => console.log(error.message))
      // eslint-disable-next-line
    }, [])
      
 

///add a shows
    console.log(showDel)
 
    return (
      <>
      <LinkRouter to="/new-show" className="button">Add a Show</LinkRouter>
      
    
     <div className='flex-row gap wrap'>

        {showDel?.map((i)=>(
              <CardUserShows name={i.name} key={i._id} image={i.photo[0]} category={i.description} id={i._id} price={i.price} cardid={i._id}/>))}
      </div>
      
      </>
   
    )
}
 
