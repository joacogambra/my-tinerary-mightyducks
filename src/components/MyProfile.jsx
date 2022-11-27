import React from 'react'
import { useEffect, useState, useRef } from 'react'
import Swal from 'sweetalert2'
import { useSelector} from 'react-redux'
import axios from 'axios';
import { BASE_URL } from '../Api/url'
import {useNavigate} from 'react-router-dom'



export default function Profile() {
  const navigate = useNavigate() 
  let [user, setUser]= useState('')
  let [form, setForm] = useState(true)
  let { _id } = useSelector(state=>state.userReducer)
  useEffect(()=>{
    let query= `${BASE_URL}/api/auth/me/${_id}`
        axios.get(query)
         .then(response=>setUser(response.data.response)) 
         .catch(error=> console.log(error) )
  },[_id])

  // /edit
  let name= useRef()
  let lastName= useRef()
  let photo= useRef()
  let email= useRef()
  let age= useRef()


  let handleEdit=(e)=>{
 
      setForm(!form)
    
  }


  let handleSubmit=(e)=>{
    e.preventDefault()
    let form={
      name: name.current.value,
      photo: photo.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      age: age.current.value,
    }
    

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        .then(()=>navigate('/my-profile')) 
        
        axios.patch(`${BASE_URL}/api/auth/me/${_id}`, form )
       .then(response=>{console.log(response)
        if (response.data.success === false){
          let error = response.data.message.join( ",\n ")
          console.log(response.data.success)
          new Swal({
            icon: 'error',
            title: 'Check the info you sent:',
            text: (`${  error }`),
            
           })
          }
          
        }) 
      .catch(error=>{
        console.log(error); 
      if (error){
       new  Swal({
          icon: 'error',
          title: 'Check the info you sent:',
          text: (`${  error }`),
          
         })
      
          }
  })
}     
      else if (result.isDenied) {
        Swal.fire('Changes are not saved') 
      }
    })
  }

  // console.log(name.current.value)
   return(

    <div className='sign-in'>
       <div>
         <img src={user.photo} alt="Your pic" className='profile-img' />
        </div>
  {form
      ?(
        <>
         <section>
         <h3>{user.name}</h3>
         <p>Your email:  {user.email}</p>
         <p>Age:  {user.age}</p>      
       </section>

     <button className='button' onClick={handleEdit}>Edit</button>
        </>
         )

        :( 
          <>
          <input name= "name"  type="text"  placeholder={user.name}  defaultValue={user.name}  className='profile-text' ref={name} />
          <input name="lastName"  type="text"  placeholder={user.lastName} defaultValue={user.lastName}  className='profile-text' ref={lastName} />
          <input name="Age" type="number"  placeholder={user.age}  defaultValue={user.age} className='profile-text' ref={age}  />
          <input name="Email" type="text"  placeholder={user.email} defaultValue={user.email} className='profile-text' ref={email} />
          <input name="Photo" type="text"  placeholder={user.photo} defaultValue={user.photo}  className='profile-text' ref={photo} />
          <div className='flex-row gap'>          
          <button className='button' onClick={handleSubmit}>Save</button>
          </div>
          </>
        )
        }
      </div>
   )
      }
