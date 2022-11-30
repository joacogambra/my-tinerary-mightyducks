import React from 'react'
import { useParams } from "react-router";
import { useRef } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert';
import { useState, useEffect } from 'react';

export default function EditItinerary() {
  let itiId = useParams();
  const { _id } = useSelector((store) => store.userReducer)
  let userid = _id

  //form
  let name = useRef()
  let description = useRef()
  let price = useRef()
  let duration = useRef()
  let citiId = useRef()
  const photoP = useRef();
  const photoS = useRef();
  const photoT = useRef();

  let {token} = useSelector(state => state.userReducer)
  let headers = { headers: { Authorization: `Bearer ${token}` } }
  let handleSubmit = (e) => {
    e.preventDefault()
    let form = {
      name: name.current.value,
      photo: [photoP.current.value, photoS.current.value, photoT.current.value],
      description: description.current.value,
      price: price.current.value,
      duration: duration.current.value,
      citiId: citiId.current.value,
      userId: userid
    }
    axios.put(`${BASE_URL}/itineraries/${itiId.id}`, form, headers)
      .then(response => {
        console.log(response.data.response);
        if (response.data.success === true) {
          Swal({
            title: "Success",
            text: "The Itinerary was editted succesfully",
            icon: "success",
            timer: 5000,
            confirmButtonText: "Cool"
          })
            .then(() => { window.location.reload() })
        } else {
          let error = response.data.message.join(",\n ")

          console.log(error)
          Swal({
            icon: 'error',
            title: 'Check the info you sent:',
            text: (`${error}`),

          })
        }

      })
      .catch(error => {
        let message = error.response.data.message.join(",\n ")

        console.log(error)
        Swal({
          icon: 'error',
          title: 'Check the info you sent:',
          text: (`${message}`),

        })
      }
      )
  }
  let [itine, setItine] = useState([])
  useEffect( () => {
      axios.get(`${BASE_URL}/itineraries?userId=` + userid)
        .then(res => setItine(res.data.response))
        .catch(error => console.log(error.message))
      // eslint-disable-next-line
    }, [])
    console.log(itine);
    // let valueDefault = itine[0]
    // console.log(valueDefault);
    // console.log(valueDefault.name);
    
  return (
    <form className="sign-in" >

      <h3>Update your Show</h3>

      <input name='citiId' type="string" placeholder='citiId' ref={citiId} required />
      <input name='name' type="text" placeholder="Name"  ref={name} required />
      <input name='photoP' type="url" placeholder="First picture"  ref={photoP} required />
      <input name='photoS' type="url" placeholder="Second picture"  ref={photoS} required />
      <input name='photoT' type="url" placeholder="Third picture"  ref={photoT} required />
      <input name="price" type="number" placeholder='Price'  ref={price} required />
      <input name="durarion" type="number" placeholder='Duration'  ref={duration} required />
      <input name="description" type="text" placeholder='Description'  ref={description} required />
      <button className='button add' onClick={handleSubmit} > Update</button>
      <button className='button add' onClick={() => { window.location.reload() }}> Cancel </button>

    </form>
  )
}
