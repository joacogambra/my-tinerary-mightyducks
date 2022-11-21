import React from 'react'
import {useState, useRef } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url';

import Swal from 'sweetalert';

export default function FormHotel() {
  let [hotel, setHotel]= useState([])
 
  let name= useRef()
  let photo= useRef()
  let capacity= useRef()
  let cityId = useRef()
  let userId = useRef()
   
  
let handleSubmit=(e)=>{
  e.preventDefault()
let form={
  name: name.current.value,
  photo: photo.current.value,
  capacity: capacity.current.value,
  cityId: cityId.current.value,
  userId: userId.current.value,
}
  axios.post(`${BASE_URL}/api/hotels/`, form )
    .then(response=>{setHotel(response.data.response);
      if(response.data.success === true){
        Swal({
          title: "Success",
          text: "The Hotel was add succesfully",
           icon: "success",
           timer: 5000,
           confirmButtonText: "Cool"
        })
        
      .then(()=>{window.location=`/hotel/${response.data.response?._id}`}) 
        
         
      } else{
        let error = response.data.message.join( ",\n ")
      
          console.log(error)
        Swal({
          icon: 'error',
          title: 'Check the info you sent:',
          text: (`${  error }`),
          
         })
      }
    
    })
    .catch(error=>console.log(error))
  
  }

  console.log(hotel);
 
       return (
        
      
    
     <form className='sign-in'>
         
         <h3> Enter the Hotel information</h3>
       <input name= "name"  type="text"  placeholder='Hotel´s Name' ref={name} required/>
       <input name="photo" type="text"  placeholder='Photo'  ref={photo} required/>
       <input name="capacity" type="number"  placeholder='Capacity'  ref={capacity} required/>
       <input name="cityId" type="text"  placeholder='City Id'  ref={cityId} required/>
       <input name="userId" type="text"  placeholder='Your Id' ref={userId} required/>

       <button  className='button add' onClick={handleSubmit} >Add Hotel</button>
       </form>
   
      
    
    
          
       
      )

    
}