import React from 'react'
import { useNavigate, useParams } from "react-router";
import {  useRef } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert';

export default function EditShow() {

    const showId  = useParams()

    // let [form, setForm] = useState('')
    const {shows} = useSelector((store) => store.showReducer)
    const {_id} = useSelector((store) => store.userReducer)
    let navigate = useNavigate();
    let userid = _id

    function filtrado(array, id){
      let edit= array.filter(e=>e._id === id)
     
      return edit[0]
   }
   let show= filtrado(shows,showId.id)

   console.log(show);


    //form
    let name= useRef()
    let photo= useRef()
    let photo1= useRef()
    let photo2= useRef()
    let description= useRef()
    let price= useRef()
    let date= useRef()

    let handleSubmit=(e)=>{
     
        e.preventDefault()
       let form={
          name: name.current.value || name.defaultValue,
          photo: [photo.current.value, photo1.current.value, photo2.current.value]|| photo.defaulValue,
          description: description.current.value || description.defaulValue,
          hotelId: show.hotelId,
          userId: userid,
          price: price.current.value || price.defaulValue,
          date: date.current.value || price.defaulValue,
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
        
      })
      .catch(error=>{
      
        
            console.log(error)
          Swal({
            icon: 'error',
            title: 'Check the info you sent:',
            text: (''),
            
           })
        }
      )
      
    }
  console.log(name)

  return (
    <form className="sign-in" >
           
            <h3> Edit the Show</h3>
          
                   <input name="photo" type="text"  placeholder={show.photo[0]}  ref={photo} defaulValue={show.photo[0]} className="card__details"/>
                   <input name="photo1" type="text"  placeholder={show.photo[1] || "Add photos"}  ref={photo2} defaulValue={show.photo[1]} className="card__details"/>
                   <input name="photo2" type="text"  placeholder={show.photo[2] || "Add photos"}  ref={photo2} defaulValue={show.photo[2]} className="card__details"/>
                   <input name= "name"  type="text"  placeholder={show.name} ref={name}  defaulValue={show.name}/>
                   <input name= "description"  type="text"  placeholder={show.description} ref={description}  defaulValue={show.description}/>
                   <input name="price" type="number"  placeholder={show.price}  ref={price} defaulValue={show.price}/>
                   <input name="date" type="date"  placeholder={show.date}  ref={date} defaulValue={show.date}/>
                  
                 <button type="submit" className='button add' onClick={handleSubmit} > Update</button>
                   <button  className='button add' onClick={()=> { window.location.reload() }}> Cancel </button>
           
    </form>
  )
}