import React from 'react'
import {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url';
import { useSelector } from 'react-redux'
import Swal from 'sweetalert';
import {useNavigate} from 'react-router-dom'

export default function FormHotel() {
  let [hotel, setHotel]= useState([])
  let [cityName, setCityName]=useState([])
  let [cityId, setCityId]= useState('')

  const {_id, token} = useSelector((store) => store.userReducer)
  const navigate = useNavigate() 

  useEffect(() => {
    axios.get(`${BASE_URL}/cities`)
        .then(res => setCityName(res.data.response))
        .catch(error => console.log(error.message))
}, [setCityName])



  let name= useRef()
  let photo= useRef()
  let capacity= useRef()



let handleSubmit=(e)=>{
  e.preventDefault()
let form={
  name: name.current.value,
  photo: photo.current.value,
  capacity: capacity.current.value,
  cityId: cityId,
  userId: _id,
}
let headers = {headers: {'Authorization': `Bearer ${token}`}}
  axios.post(`${BASE_URL}/api/hotels/`, form, headers )
    .then(response=>{setHotel(response.data.response);
      if(response.data.success === true){
        Swal({
          title: "Success",
          text: "The Hotel was add succesfully",
           icon: "success",
           timer: 5000,
           confirmButtonText: "Cool"
        })
        
      .then(()=>navigate('/hotels/admin/')) 
        
         
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



 
       return (
        
      
    
     <form className='sign-in'>
         
         <h3> Enter the Hotel information</h3>
       <input name= "name"  type="text"  placeholder='Hotel´s Name' ref={name} required/>
       <input name="photo" type="text"  placeholder='Photo'  ref={photo} required/>
       <input name="capacity" type="number"  placeholder='Capacity'  ref={capacity} required/>
       <select required onChange={((e)=>{setCityId(e.target.value)})}>
                  { cityName?.map((e,key)=><option value={e._id}  key={e._id}>{e.name}</option>) }
                 </select>

       <button  className='button add' onClick={handleSubmit} >Add Hotel</button>
       </form>
   
      
    
    
          
       
      )

    
}