import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url'
import { useEffect, useState, useRef } from 'react'
import EditCards from './EditCards'
import Swal from 'sweetalert';
import { useDispatch, useSelector } from "react-redux";
import hotelsActions from '../redux/actions/hotelsActions'
import {useNavigate} from 'react-router-dom'
import { current } from '@reduxjs/toolkit'

export default function MyHotels() {

  const dispatch = useDispatch()
  const { deleteHotel} = hotelsActions
  const navigate = useNavigate() 
  let { _id, token} = useSelector(state=>state.userReducer)


//form

    let [myHotels, setMyHotels]= useState([])
    let [id, setId]= useState('')
    let [form, setForm] = useState(true)
    let name= useRef()
    let photo= useRef()
    let capacity= useRef()

    useEffect(()=>{
  
        let query= `${BASE_URL}/api/hotels?userId=${_id}`
        axios.get(query)
         .then(response=>setMyHotels(response.data.response))
         .catch(error=> console.log(error) )
     },[_id, token])   
    
    
     let editar= (e) => {
        setId(e.target.value)
        setForm(!form) 
      }

  console.log(myHotels);
 function filtrado(array, id){
    let edit= array.filter(e=>e._id === id)
   
    return edit[0]
 }

//onclick borrar

let borrar=(e)=>{
  setId(e.target.value)
    let id= e.target.value
    dispatch(deleteHotel({id}))
      Swal({
        title: 'Are you sure?',
        text: "you want to delete this hotel?",
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          Swal("Poof! Hotel file has been deleted!", {
            icon: "success",
          })
        .then(window.location.reload() )
        } else {
          Swal("Your Hotel  is safe!");
        }
      });
    }

  
//printcard Hotel
     function allCards(array){
        return array?.map((items)=>(
        <EditCards name={items.name} image={items.photo[0]} dato="Capacity" capacity={items.capacity} id={items._id} editar={editar} borrar={borrar} hotel_id={items.hotelId}/>

    )) }
///form datos

  let editHotel= filtrado(myHotels, id)
  console.log(editHotel);
     
    let handleSubmit=(e)=>{
        e.preventDefault()
       
       
      let form={
        name: name.current.value || name.defaultValue, 
        photo: photo.current.value || photo.defaulValue,
        capacity: capacity.current.value || capacity.defaulValue,
        cityId: editHotel.cityId,
        userId: _id,
      }

     //form alert 
        let headers = { headers: { Authorization: `Bearer ${token}` } }
        axios.patch(`${BASE_URL}/api/hotels/${id}`, form , headers)
          .then(response=>{setForm(response.data.response);
            if(response.data.success === true){
              Swal({
                title: "Success",
                text: "The Hotel was editted succesfully",
                 icon: "success",
                 timer: 5000,
                 confirmButtonText: "Cool"
              })
              .then(()=>navigate(`/hotel/${response.data.response?._id}`))
            // .then(()=>{window.location=`/hotel/${response.data.response?._id}`}) 
                             
            }  
          
          })
          .catch(error=>{
           
            if (error.response.status === 400){
            
            Swal({
              icon: 'error',

              title: 'Check the info you sent:',})
          }
        
        })
    
      }

  return (
    <>
    <h2 className='text-white'>My Hotels</h2>
    {form
    ?(<div className='flex-row wrap gap'>
     {allCards(myHotels)}
     </div>)
     :(
    
        <form className="sign-in" >
        
         <h3> Enter the Hotel information</h3>
        
                <input name="photo" type="text"  placeholder={editHotel.photo} defaultValue={editHotel.photo}  ref={photo}  className="card__details"/>
                <input name= "name"  type="text"  placeholder={editHotel.name} ref={name} defaultValue={editHotel.name} />
                <input name="capacity" type="number"  placeholder={editHotel.capacity} defaultValue={editHotel.capacity} ref={capacity} />
                <button  className='button add' onClick={handleSubmit} type="submit" > Update</button>
                <button  className='button add' onClick={() => navigate(-1)}> Cancel </button>
           
    </form>
   
     )
    }
    
    </>
  )
}
