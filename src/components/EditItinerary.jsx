import React from 'react'
import { useNavigate, useParams } from "react-router";
import { useState, useRef } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert';

export default function EditItinerary() {
    let itiId  = useParams();
    const {_id} = useSelector((store) => store.userReducer)
    let navigate = useNavigate();
    let userid = _id

  //form
  let name= useRef()
  let photo= useRef()
  let description= useRef()
  let price = useRef()
  let duration = useRef()
  let cityId = useRef()
 

  let handleSubmit=(e)=>{
    e.preventDefault()
  let form={
    name: name.current.value,
    photo: photo.current.value,
    description: description.current.value,
    price: price.current.value,
    duration: duration.current.value,
    cityId: cityId.current.value,
    userId: userid
  }
  axios.put(`${BASE_URL}/itineraries/${itiId.id}`, form )
  .then(response=>{console.log(response.data.response);
    if(response.data.success === true){
      Swal({
        title: "Success",
        text: "The Hotel was editted succesfully",
         icon: "success",
         timer: 5000,
         confirmButtonText: "Cool"
      })
      
      navigate(`/my-itineraries`)     
    }  else{
      let error = response.data.message.join( ",\n ")
    
        console.log(error)
      Swal({
        icon: 'error',
        title: 'Check the info you sent:',
        text: (`${  error }`),
        
       })
    }
    navigate(`/my-shows`)
  }) 
  .catch(error=>{
    let message = error.response.data.message.join( ",\n ")
    
        console.log(error)
      Swal({
        icon: 'error',
        title: 'Check the info you sent:',
        text: (`${  message }`),
        
       })
    }
  )
  navigate(`/my-shows`)
}

  return (
    <form className="sign-in" >
         
      <h3>Update your Show</h3>
     
             <input name="photo" type="text"  placeholder='Photo'  ref={photo} required   />
             <input name= "name"  type="text"  placeholder="Name" ref={name}  required/>
             <input name="price" type="number"  placeholder='Price'  ref={price} required/>
             <input name="durarion" type="number"  placeholder='Duration'  ref={duration} required/>
             <input name="description" type="text"  placeholder='Description'  ref={description} required/>
             <button  className='button add' onClick={handleSubmit} > Update</button>
             <button  className='button add' onClick={()=> { window.location.reload() }}> Cancel </button>
        
 </form>
  )
}
