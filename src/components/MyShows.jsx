import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import CardUserShows from './CardUserShows'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert';

export default function MyShows() {
    const shows = useSelector((store) => store.showReducer.shows)
    console.log(shows);
    let [id, setId]= useState('')
    let [form, setForm] = useState(true)
    
    let name= useRef()
    let photo= useRef()
    let description= useRef()
    let price= useRef()
    let date= useRef()
    let hotelId = useRef()
    let userId = useRef()

    useEffect(()=>{
      axios.patch(`${BASE_URL}/shows/${id}`, form )
       .then(response=>console.log(response.data.response))
       .catch(error=> console.log(error) )
       
   },[id, form])   



    let editar= (e) => {
      setId(e.target.id)
      setForm(!form)
      console.log(form)  
    }
    let handleSubmit=(e)=>{
      e.preventDefault()
    let form={
      name: name.current.value,
      photo: photo.current.value,
      description: description.current.value,
      hotelId: hotelId.current.value,
      userId: userId.current.value,
      price: price.current.value,
      date: date.current.value,
    }
  }

    let userid = "636d2cd4a943744050f9ef16"
    let [showDel, setShowDel] = useState([])
    useEffect(() => {
      axios.get(`${BASE_URL}/api/shows?userId=` + userid)
        .then(res => setShowDel(res.data.response))
        .catch(error => console.log(error.message))
      // eslint-disable-next-line
    }, [])
    console.log(showDel);  
    return (
      <>
      {form
      ?(<div className='myCities'>
        {showDel?.map((i)=>(
              <CardUserShows city={i} name={i.name} key={i._id} image={i.photo[0]} category={i.description} id={i._id} price={i.price} editar={editar}/>))}
      </div>)
      :( <form className="sign-in" >
     
            <h3> Enter the Hotel information</h3>
          
                   <input name="photo" type="text"  placeholder='Photo'  ref={photo} required className="card__details"/>
                   <input name= "name"  type="text"  placeholder="Name" ref={name}  required/>
                   <input name= "description"  type="text"  placeholder="description" ref={description}  required/>
                   <input name="price" type="number"  placeholder='Price'  ref={price} required/>
                 <input name="date" type="date"  placeholder='Date'  ref={date} required/>
                   <input name="hotelId" type="text"  placeholder='Hotel Id'  ref={hotelId} required/>
                   <input name="userId" type="text"  placeholder='Your Id' ref={userId} required/>
                 <button  className='button add' onClick={handleSubmit} > Update</button>
                   <button  className='button add' onClick={()=> { window.location.reload() }}> Cancel </button>
           
    </form>)
}
    </>
    )
}
 

