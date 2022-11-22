import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url'
import { useEffect, useState, useRef } from 'react'
import EditCards from './EditCards'
import Swal from 'sweetalert';





export default function MyHotels() {

    let [myHotels, setMyHotels]= useState([])
    let [id, setId]= useState('')
    let [form, setForm] = useState(true)
    let name= useRef()
    let photo= useRef()
    let capacity= useRef()
    let cityId = useRef()
    let userId = useRef()
    
     
    useEffect(()=>{
        let adm= "636d2cd4a943744050f9ef16"
        let query= `${BASE_URL}/api/hotels?userId=${adm}`
        axios.get(query)
         .then(response=>setMyHotels(response.data.response))
         .catch(error=> console.log(error) )
         
     },[])



     let editar= (e) => {
        setId(e.target.id)
        setForm(!form)
        console.log(form)
        
      }

    let borrar=()=>{}
   
     function allCards(array){
        return array?.map((items)=>(
        <EditCards name={items.name} image={items.photo[0]} dato="Capacity" capacity={items.capacity} id={items._id} editar={editar} borrar={borrar}/>

    )) }

    let handleSubmit=(e)=>{
        e.preventDefault()
      let form={
        name: name.current.value,
        photo: photo.current.value,
        capacity: capacity.current.value,
        cityId: cityId.current.value,
        userId: userId.current.value,
      }
        axios.patch(`${BASE_URL}/api/hotels/${id}`, form )
          .then(response=>{setForm(response.data.response);
            if(response.data.success === true){
              Swal({
                title: "Success",
                text: "The Hotel was editted succesfully",
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
      


  return (
    <>
    <h2 className='text-white'>My Hotels</h2>
    {form
    ?(<div className='flex-row wrap gap'>
     {allCards(myHotels)}
     </div>)
     :(
        <form className="sign-in" >
         
         <h3> Enter the Hotel information</h3>
        
                <input name="photo" type="text"  placeholder='Photo'  ref={photo} required className="card__details"/>
                <input name= "name"  type="text"  placeholder="Name" ref={name}  required/>
                <input name="capacity" type="number"  placeholder='Capacity'  ref={capacity} required/>
                <input name="cityId" type="text"  placeholder='City Id'  ref={cityId} required/>
                <input name="userId" type="text"  placeholder='Your Id' ref={userId} required/>
                <button  className='button add' onClick={handleSubmit} > Send Hotel</button>
                <button  className='button add' onClick={()=> { window.location.reload() }}> Cancel </button>
           
    </form>
     )
    }
     </>
  )
}
