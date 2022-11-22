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
    
//traer
    let userid = "636d2cd4a943744050f9ef16"
    let [showDel, setShowDel] = useState([])
    useEffect(() => {
      axios.get(`${BASE_URL}/api/shows?userId=` + userid)
        .then(res => setShowDel(res.data.response))
        .catch(error => console.log(error.message))
      // eslint-disable-next-line
    }, [])
    // console.log(showDel);  
//form
    let name= useRef()
    let photo= useRef()
    let description= useRef()
    let price= useRef()
    let date= useRef()
    let hotelId = useRef()
    let userId = useRef()
    
    let editar= (e) => {
      setId(e.target.value)
      setForm(!form)
      console.log(e.target.id)
    }
   
  //form datos
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
    

   
      axios.patch(`${BASE_URL}/api/shows/${id}`, form )
       .then(response=>{console.log(response.data.response)
        setForm(response.data.response)
        if(response.data.success === true){
          Swal({
            title: "Success",
            text: "The Show was editted succesfully",
             icon: "success",
             timer: 5000,
             confirmButtonText: "Cool"
          })
          
        .then(()=> { window.location.reload() }) 
        }
      })
      .catch(error=>{
          console.log(error); 
        if (error.response.status === 400){
        Swal({
          icon: 'error',
          title: 'Check the info you sent:',})
        } 
    })
  }   

 
    return (
      <>
      {form
      ?(<div className='myCities'>
        {showDel?.map((i)=>(
              <CardUserShows name={i.name} key={i._id} image={i.photo[0]} category={i.description} id={i._id} price={i.price} editar={editar} cardid={i._id}/>))}
      </div>)
      :( <form className="sign-in" >
     
            <h3> Edit the Show</h3>
          
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
 

