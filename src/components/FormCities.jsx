import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Api/url'

export default function FormCities() {

    const [addCity, setAddCity] = useState({})

    const readInput = (e) => {
        const value = e.target.value
        const prop = e.target.name
        setAddCity({
            ...addCity,
            [prop]: value
        })
    }

    let [cities, setCities]= useState([])
    const validateInfo = async () => {
        axios.post(`${BASE_URL}/cities`, addCity)
        //.then(res=> console.log(res.data.response))
        .then(res=> setCities(res.data.response))
        .catch(error=> error.message)
    }
    console.log(cities);

    return (                  
            <form className='sign-in' action="">
                <h3> Enter the City information</h3>                                                        
                    <input name='name' onChange={readInput} type="text" placeholder="Name" required/>                        
                    <input name='continent' onChange={readInput} type="text" placeholder="Continent" required/>                                          
                    <input name='photo' onChange={readInput} type="text" placeholder="Photo" required/>                                  
                    <input name='population' onChange={readInput} type="text" placeholder='Population' required/>                                        
                    <input name='userId' onChange={readInput} type="text" placeholder='UserAdmin' required/>                               
                    <button className=' button login' onClick={() => validateInfo()}>Add City</button>
            </form>            
    )
}
