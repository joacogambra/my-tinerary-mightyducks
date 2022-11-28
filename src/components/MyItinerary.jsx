import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import CardUserItineraries from './CardUserItineraries'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert';

export default function MyItinerary() {

  let [id, setId]= useState('')
  let [form, setForm] = useState(false)

  let name= useRef()
  let photo= useRef()
  let description= useRef()
  let price = useRef()
  let duration = useRef()
  let cityId = useRef()
  let userId = useRef()


    const itineraries = useSelector((store) => store.itineraryReducer.itineraries)


    // let {_id, token} = useSelector(state => state.userReducer)
    let userid = "636d2cd4a943744050f9ef16"
    
    let [itine, setItine] = useState([])
    useEffect(() => {
      axios.get(`${BASE_URL}/itineraries?userId=` + userid)
        .then(res => setItine(res.data.response))
        .catch(error => console.log(error.message))
      // eslint-disable-next-line
    }, [])
    //let { name, image, continente, category, city, price, duration } = props

    ///editar y form
    let editar= (e) => {
      setId(e.target.id)
      setForm(!form)
      
    }

    let handleSubmit=(e)=>{
      e.preventDefault()
    let form={
      name: name.current.value,
      photo: photo.current.value,
      description: description.current.value,
      price: price.current.value,
      duration: duration.current.value,
      cityId: cityId.current.value,
      userId: userId.current.value,
    }
    axios.put(`${BASE_URL}/itineraries/${id}`, form )
    .then(response=>{setForm(response.data.response);
      if(response.data.success === true){
        Swal({
          title: "Success",
          text: "The Hotel was editted succesfully",
           icon: "success",
           timer: 5000,
           confirmButtonText: "Cool"
        })
        
      .then(()=>{window.location.reload()}) 
        
         
      }  
    
    })
    .catch(error=>console.log(error))
  }

    return (
      <>
      {!form ?(<><h2 className='text-white'>My Itineraries</h2>
      <div className='myCities'>      
        {itine?.map((i)=>(
              <CardUserItineraries city={i} name={i.name} key={i._id} image={i.photo[0]} category={i.description} id={i._id} price={i.price} duration={i.duration} editar={editar} _id={i._id} />))}
      </div></>)

      :(<form className="sign-in" >
         
      <h3>Update your Show</h3>
     
             <input name="photo" type="text"  placeholder='Photo'  ref={photo} required   />
             <input name= "name"  type="text"  placeholder="Name" ref={name}  required/>
             <input name="price" type="number"  placeholder='Price'  ref={price} required/>
             <input name="durarion" type="number"  placeholder='Duration'  ref={duration} required/>
             <input name="description" type="text"  placeholder='Description'  ref={description} required/>
             <input name="userId" type="text"  placeholder='Your Id' ref={userId} required/>
             <button  className='button add' onClick={handleSubmit} > Update</button>
             <button  className='button add' onClick={()=> { window.location.reload() }}> Cancel </button>
        
 </form>)
      }
      </>
    )
  }
  