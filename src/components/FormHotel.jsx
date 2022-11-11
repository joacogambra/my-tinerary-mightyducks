import React from 'react'
import {useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url';


export default function FormHotel() {

  let [form, setForm] = useState({});


let handleChange = (e) => {

  setForm({
    ...form,
   [ e.target.name]: e.target.value,
  })
  console.log(form);
}   
  
let handleSubmit=(e)=>{
  e.preventDefault()
  console.log(e);
  axios.post(`${BASE_URL}/api/hotels/`, form)
    .then(response=>
      console.log(response))
    .catch(error=> console.log(error))
 
}


      return (
        <>
     <form className='sign-in'   >
         
         <h3> Enter the Hotel information</h3>
       <input name= "name"  type="text"  placeholder='Hotel´s Name' onChange={handleChange} required/>
       <input name="photo" type="text"  placeholder='Photo' onChange={handleChange} required/>
       <input name="capacity" type="number"  placeholder='Capacity' onChange={handleChange} required/>
       <input name="cityId" type="text"  placeholder='City Id' onChange={handleChange} required/>
       <input name="userId" type="text"  placeholder='Your Id' onChange={handleChange} required/>

       <button  className=' button login' onClick={handleSubmit} >Add Hotel</button>
       </form>
       

          
        </>
      );
    
}