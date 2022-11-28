import React from 'react'
import { useNavigate, useParams } from "react-router";
import { useState, useEffect, useRef } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert';

export default function EditShow() {

    const showId  = useParams()

    // let [form, setForm] = useState('')
    const {_id} = useSelector((store) => store.userReducer)
    let navigate = useNavigate();
    let userid = _id
  console.log(showId)
    //form
    let name= useRef()
    let photo= useRef()
    let description= useRef()
    let price= useRef()
    let date= useRef()
    let hotelId = useRef()

    let handleSubmit=(e)=>{
        e.preventDefault()
       let form={
          name: name.current.value,
          photo: photo.current.value,
          description: description.current.value,
          hotelId: hotelId.current.value,
          userId: userid,
          price: price.current.value,
          date: date.current.value,
        }
        console.log(form);
      
    axios.patch(`${BASE_URL}/api/shows/${showId.id}`, form )
       .then(response=>{console.log(response.data.response)
        if(response.data.success === true){
          Swal({
            title: "Success",
            text: "The Show was editted succesfully",
             icon: "success",
             timer: 5000,
             confirmButtonText: "Cool"
          })
          navigate(`/my-shows`)
        } else{
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
        // let message = error.data.message.join( ",\n ")
        
            console.log(error)
          Swal({
            icon: 'error',
            title: 'Check the info you sent:',
            text: (''),
            
           })
        }
      )
      navigate(`/my-shows`)
    }
  

  return (
    <form className="sign-in" >
           
            <h3> Edit the Show</h3>
          
                   <input name="photo" type="text"  placeholder='Photo'  ref={photo} required className="card__details"/>
                   <input name= "name"  type="text"  placeholder="Name" ref={name}  required/>
                   <input name= "description"  type="text"  placeholder="description" ref={description}  required/>
                   <input name="price" type="number"  placeholder='Price'  ref={price} required/>
                   <input name="date" type="date"  placeholder='Date'  ref={date} required/>
                   <input name="hotelId" type="text"  placeholder='Hotel Id'  ref={hotelId} required/>
                 <button  className='button add' onClick={handleSubmit} > Update</button>
                   <button  className='button add' onClick={()=> { window.location.reload() }}> Cancel </button>
           
    </form>
  )
}
