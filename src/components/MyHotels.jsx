import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url'
import { useEffect, useState, useRef } from 'react'
import EditCards from './EditCards'
import Swal from 'sweetalert';
// // import ShowCards from './ShowsCards'







export default function MyHotels() {
//form
    let [myHotels, setMyHotels]= useState([])
    // let [myShows, setMyShows]= useState([])
    let [id, setId]= useState('')
    let [form, setForm] = useState(true)
    let name= useRef()
    let photo= useRef()
    let capacity= useRef()
    let cityId = useRef()
    let userId = useRef()
    
    //traer user hotels 
    let adm= "636d2cd4a943744050f9ef16"
    useEffect(()=>{
        let query= `${BASE_URL}/api/hotels?userId=${adm}`
        axios.get(query)
         .then(response=>setMyHotels(response.data.response))
         .catch(error=> console.log(error) )
         
     },[adm])   
    
    
     //onclick editar
     let editar= (e) => {
        setId(e.target.id)
        setForm(!form)
        console.log(form)  
      }

//onclick borrar

let borrar=(e)=>{
    setId(e.target.id);//id
        }
//printcard Hotel
     function allCards(array){
        return array?.map((items)=>(
        <EditCards name={items.name} image={items.photo[0]} dato="Capacity" capacity={items.capacity} id={items._id} editar={editar} borrar={borrar}/>

    )) }

///form datos
    let handleSubmit=(e)=>{
        e.preventDefault()
      let form={
        name: name.current.value,
        photo: photo.current.value,
        capacity: capacity.current.value,
        cityId: cityId.current.value,
        userId: userId.current.value,
      }

     //form alert 
      
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
              
               
            }  
          
          })
          .catch(error=>{
           
            if (error.response.status === 400){
            
            Swal({
              icon: 'error',
              title: 'Check the info you sent:',
              
             })
          }})
        
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
                <input name="capacity" type="number"  placeholder='Capacity/Popullation'  ref={capacity} required/>
                <input name="cityId" type="text"  placeholder='City Id'  ref={cityId} required/>
                <input name="userId" type="text"  placeholder='Your Id' ref={userId} required/>
                <button  className='button add' onClick={handleSubmit} > Update</button>
                <button  className='button add' onClick={()=> { window.location.reload() }}> Cancel </button>
           
    </form>
   
     )
    }
    
    </>
  )
}
