import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url';


export default function FormHotel() {

  let [form, setForm] = useState({});

  console.log(form);
  useEffect(()=>{
    axios.post(`${BASE_URL}/hotels/`, form)
    .then(response=>
      console.log(response))
    .catch(error=> console.log(error))

  },[form])


let handleChange = (e) => {
  setForm({
    ...form,
   [ e.target.name]: e.target.value,
  })
}   
  
let handleSubmit=(e)=>{
  e.preventDefault()
 
}


      return (
        <>
     <form className='sign-in' onSubmit={handleSubmit} >
         
         <h3> Enter the Hotel information</h3>
       <input name= "name"  type="text"  placeholder='Hotel´s Name' onChange={handleChange}/>
       <input name="photo" type="text"  placeholder='Photo' onChange={handleChange}/>
       <input name="capacity" type="number"  placeholder='Capacity' onChange={handleChange}/>
       <input name="cityId" type="text"  placeholder='City Id' onChange={handleChange}/>
       <input name="userId" type="text"  placeholder='Your Id' onChange={handleChange}/>

       <button  className=' button login'>Add Hotel</button>
       </form>
       

          
        </>
      );
    
}