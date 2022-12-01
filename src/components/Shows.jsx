import React from 'react'
import { useParams } from 'react-router-dom'
import Comments from './Comments'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../Api/url'
import ShowCard from './ShowCard'
import { useDispatch, useSelector } from 'react-redux'
import showAction from '../redux/actions/showActions'

export default function Detail() {

   let [Allshows, setAllShows]= useState([])
   const { hotel }= useParams()
  //  const dispatch = useDispatch
  //  let {read}= showAction
  //  const {shows}= useSelector (state=> state.showReducer.shows)

// useEffect(()=>{
//    dispatch(read(id))
// },[])

   
   useEffect(() =>{ 
      
   axios.get(`${BASE_URL}/api/shows?hotelId=${hotel}`)
  .then(response=> setAllShows(response.data.response))
  .catch(error=> console.log(error))
  
  }, [hotel])


  return (

<>    { Allshows.length > 0

      ? ( Allshows.map((shows, key)=>(
        <ShowCard name={shows.name} photo={shows.photo[0]} id={shows._id} description={shows.description}>
          <>
            <div className='insta-price' >
            <p>Price: ${shows.price}</p>
            <p>Date: {shows.date.slice(0,10)}</p>
            </div>
           <div>
            <Comments id={shows._id}/> 
           </div>
           </>
        </ShowCard>
      //  <Cards name={shows.name} image={shows.photo} id={shows._id} key={shows._id} category= "Description" continente={shows.description}  page='show' ></Cards>
      
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