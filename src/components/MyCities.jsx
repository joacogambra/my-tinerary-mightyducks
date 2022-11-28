import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import CardUserCities from './CardUserCities'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert';


export default function MyCities() {
  let [form, setForm] = useState(true)
  let [id, setId]= useState('')
  const myCities = useSelector((store) => store.citiesReducer.myCities)
  console.log(myCities);

  let name= useRef()
  let continent= useRef()
  let photo= useRef()
  let population= useRef()
  let userId = useRef()

    let editar= (e) => {
      setId(e.target.id);
      setForm(!form) 
    }

    let handleSubmit=(e)=>{
      e.preventDefault()
    let form={
      name: name.current.value,
      continent:continent.current.value,
      photo: photo.current.value,
      population: population.current.value,
      userId: userId.current.value,
    }
   //form alert 
    
      axios.put(`${BASE_URL}/cities/${id}`, form )
        .then(response=>{setForm(response.data.response);
          if(response.data.success === true){
            Swal({
              title: "Success",
              text: "The city was editted succesfully",
               icon: "success",
               timer: 5000,
               confirmButtonText: "Cool"
            })
            
          .then(()=>{window.location.reload()}) 
            
             
          }  else{
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
  let userid = "636d2cd4a943744050f9ef16"
  //  636d2cd4a943744050f9ef16
  let [cities, setCities] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}/cities?userId=` + userid)
      .then(res => setCities(res.data.response))
      .catch(error => console.log(error.message))
    // eslint-disable-next-line
  }, [])
  console.log(cities);  

  return (
    <>
    <h2 className='text-white'>My Cities</h2>
    {form
    ?(<div className='myCities'>
      {cities?.map((i)=>(
            <CardUserCities city={i} name={i.name} key={i._id} image={i.photo} continente={i.continent} category="Continent" id={i._id} editar={editar} cityid={i._id}/>))}
    </div>)
    :(<form className="sign-in" >
         
    <h3> City Update</h3>
   
           <input name= "name"  type="text"  placeholder="Name" ref={name}  required/>
           <input name= "continent"  type="text"  placeholder="Continent" ref={continent}  required/>
           <input name="photo" type="text"  placeholder='Photo'  ref={photo} required className="card__details"/>
           <input name="population" type="number"  placeholder='Popullation'  ref={population} required/>
           <input name="userId" type="text"  placeholder='Your Id' ref={userId} required/>
           <button  className='button add' onClick={handleSubmit} > Update</button>
           <button  className='button add' onClick={()=> { window.location.reload() }}> Cancel </button>
      
    </form>
    )
}
  </>
  )
  
}