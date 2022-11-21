import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url'
import Swal from 'sweetalert'
// import { useDispatch } from 'react-redux'
// import newCityAction from '../redux/actions/newCityAction'

export default function FormCities() {
    // let form = useRef()
    // let dispatch = useDispatch()
    // let {newCity} = newCityAction

    // async function newCityForm(event){
    //     event.preventDefault()
    //     let data = {}
    //     Array.from(form.current).forEach(input =>{
    //         if(input.name==='name'){
    //             data[input.name] = input.value.trim()
    //         }
    //     })
    //     try{
    //         let res = await dispatch(newCity(data))
    //         if(res.payload.success){
    //             alert('ciudad creada')
    //         }else{
    //             alert('error al crear')
    //         }
    //     }catch(error){
    //         console.log(error.message);
    //     }
    // }
    let [city, setCity] = useState([])

    let name = useRef()
    let continent = useRef()
    let photo = useRef()
    let population = useRef()
    let userId = useRef()


    let handleSubmit = (e) => {
        e.preventDefault()
        let form = {
            name: name.current.value,
            photo: photo.current.value,
            continent: continent.current.value,
            population: population.current.value,
            userId: userId.current.value,
        }
        axios.post(`${BASE_URL}/cities`, form)
            .then(response => {
                setCity(response.data.response);
                if (response.data.success === true) {
                    Swal({
                        title: "Success",
                        text: "The City was add succesfully",
                        icon: "success",
                        timer: 5000,
                        confirmButtonText: "Cool"
                    })
                        // .then(() => { window.location = `/cities/${response.data.response?._id}` })
                        .then(() => { window.location = `/cities`})
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
   console.log(city);

    return (
        <form className='sign-in'>
            <h3> Enter the City information</h3>
            <input name='name' type="text" placeholder="Name" ref={name} required />
            <input name='continent' type="text" placeholder="Continent" ref={continent} required />
            <input name='photo' type="text" placeholder="Photo"ref={photo} required />
            <input name='population' type="text" placeholder='Population' ref={population} required />
            <input name='userId' type="text" placeholder='UserAdmin' ref={userId} required />
            <button className='button add' type='submit' onClick={handleSubmit}>Add City</button>
        </form>
    )
}
