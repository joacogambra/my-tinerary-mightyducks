import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url'
import Swal from 'sweetalert'
import { useSelector } from 'react-redux'

export default function NewReaction() {
    let[reaction, setReaction] = useState([])
    let name = useRef()
    let icon = useRef()
    let iconBack = useRef()
    let itineraryId = useRef()
    let { _id } = useSelector(state => state.userReducer)

    let handleSubmit = (e) =>{
        e.preventDefault()
        let form = {
            name: name.current.value,
            icon: icon.current.value,
            iconBack: iconBack.current.value,
            itineraryId: itineraryId.current.value,
            userId: _id
        }
        axios.post(`${BASE_URL}/reactions`, form)
        .then(response => {
            setReaction(response.data.response);
            if (response.data.success === true) {
                Swal({
                    title: "Success",
                    text: "The Reaction was add succesfully",
                    icon: "success",
                    timer: 4000,
                    confirmButtonText: "Cool"
                })   
                .then(()=>{window.location.reload()})            
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
        .catch(error => console.log(error))
    }
    console.log(reaction)

  return (
    <form className='sign-in'>
    <h2>Create a new reaction</h2>
    <h3> Enter the Reaction information</h3>
    <input name='name' type="text" placeholder="Name" ref={name} required />
    <input name='icon' type="text" placeholder="icon" ref={icon} required />
    <input name='iconBack' type="iconBack" placeholder="iconBack"ref={iconBack} required />
    <input name='itineraryId' type="text" placeholder='itineraryId' ref={itineraryId} required />
    <button className='button add' type='submit' onClick={handleSubmit}>Add City</button>
</form>
  )
}
