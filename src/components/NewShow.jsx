import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import Swal from 'sweetalert';
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function NewShow() {
  let [hotelsName, setHotelsName]=useState([])
  let [form, setForm] = useState({})
  let [hotelid, setHotelid]= useState('')
  const {_id} = useSelector((store) => store.userReducer)
  const navigate = useNavigate() 

  useEffect(() => {
    axios.get(`${BASE_URL}/api/shows`)
        .then(res => setHotelsName(res.data.response))
        .catch(error => console.log(error.message))
}, [])



//form
let Showname= useRef()
let photo= useRef()
let description= useRef()
let price= useRef()
let date= useRef()

//form datos
let handleSubmit=(e)=>{
  
  e.preventDefault()
  setForm({
    name: Showname.current.value,
    photo: photo.current.value,
    description: description.current.value,
    userId: _id,
    price: price.current.value,
    date: date.current.value,
    hotelId: hotelid
  }) 
 
}
axios.post(`${BASE_URL}/api/shows/`, form)
.then(response=>{console.log(response.data.response);
  if(response.data.success === true){
    Swal({
      title: "Success",
      text: "The Show was add succesfully",
       icon: "success",
       timer: 5000,
       confirmButtonText: "Cool"
    })   
    .then(()=>navigate('/my-shows'))
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


  return (
    <form className="sign-in" >
           
            <h3> New Show</h3>
          
                   <input name="photo" type="text"  placeholder='Photo'  ref={photo} required className="card__details"/>
                   <input name= "name"  type="text"  placeholder="Name" ref={Showname}  required/>
                   <input name= "description"  type="text"  placeholder="description" ref={description}  required/>
                   <input name="price" type="number"  placeholder='Price'  ref={price} required/>
                 <input name="date" type="date"  placeholder='Date'  ref={date} required/>
                 <select required onChange={((e)=>{setHotelid(e.target.value)})}>
                  { hotelsName?.map((e,key)=><option value={e._id}  key={e._id}>{e.name}</option>) }
                 </select>

                 <button  className='button add' onClick={handleSubmit} > Save</button>
                   <button  className='button add' onClick={()=>navigate(`/my-shows`)}> Cancel </button>
           
    </form>
  )
}
