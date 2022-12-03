import React from 'react'
import { useNavigate, useParams } from "react-router";
import {  useRef, useState, useEffect} from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert';

export default function EditShow() {
    let[ show, setShow]= useState(null)
    const {id}  = useParams()


  useEffect(()=>{
   axios.get(`${BASE_URL}/api/shows/${id}` )
    .then(res=>setShow(res.data.response))
    .catch(error=> error.response)

  },[])

    // let [form, setForm] = useState('')
   
    const {_id} = useSelector((store) => store.userReducer)
    let navigate = useNavigate();
    let userid = _id

 
    //form
    let formRef= useRef()
   
    let handleSubmit=(e)=>{
     
        e.preventDefault()
       let form={
          name: formRef.current.elements.name.value,
          photo: [formRef.current.elements.photo.value, formRef.current.elements.photo1.value, formRef.current.elements.photo2.value],
          description: formRef.current.elements.description.value,
          hotelId: show.hotelId,
          userId: userid,
          price: formRef.current.elements.price.value,
          date: formRef.current.elements.date.current?.value || show.date ,
        }
        console.log(form);
      
    axios.patch(`${BASE_URL}/api/shows/${id}`, form )
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


  return (
    <form className="sign-in" ref={formRef} >
           
            <h3> Edit the Show</h3>
          
                  {show && <> <input name="photo" type="text"  placeholder={show.photo[0]}   defaultValue={show.photo[0]} className="card__details"/>
                   <input name="photo1" type="text"  placeholder={show.photo[1] || "Add photos"}   defaultValue={show.photo[1] } className="card__details"/>
                   <input name="photo2" type="text"  placeholder={show.photo[2] || "Add photos"}   defaultValue={show.photo[2] } className="card__details"/>
                   <input name= "name"  type="text"  placeholder={show.name}   defaultValue={show.name}/>
                   <input name= "description"  type="text"  placeholder={show.description}   defaultValue={show.description}/>
                   <input name="price" type="number"  placeholder={show.price}   defaultValue={show.price}/>
                   <input name="date" type="date"  placeholder={show.date}   defaultValue={show.date}/>
                  
                 <button type="submit" className='button add' onClick={handleSubmit} > Update</button>
                   <button  className='button add' onClick={()=> { window.location.reload() }}> Cancel </button>
                   </>}
           
    </form>
  )
}