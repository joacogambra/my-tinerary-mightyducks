import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function FormCities() {
    const navigate = useNavigate();

    const [addCity, setAddCity] = useState([{
        id: '',
        nombre: '',
        continente: '',
        foto: '',
        poblacion: '',
        userAdmin: '',

    }])

    const readInput = (e) => {
        const value = e.target.value
        const prop = e.target.name
        setAddCity({
            ...addCity,
            [prop]: value
        })
    }

    const ValidateInfo = async () => {
        localStorage.setItem('city', JSON.stringify(addCity))
        alert('Ciudad agregada')

        // if (addCity[0].id === '' || addCity[0].nombre === '' || addCity[0].continente === '' || addCity[0].foto === '' || addCity[0].poblacion === '' || addCity[0].userAdmin === '') {
        //     alert('Deberas completar los campos')
        // }
        // else {
        //     localStorage.setItem('city', JSON.stringify(addCity))
        //     alert('Ciudad agregada')
        // }
    }

    return (
        
           
                <form className='sign-in' action="">
                    <h3> Enter the City information</h3>
        

                         <label htmlFor="">
                        <input name='id'  onChange={readInput} type="text" placeholder='Id' />
                    </label>
    
                        <label htmlFor=""></label>
                        <input name='nombre' onChange={readInput} type="text" placeholder="Name" />

                        <label htmlFor=""></label>
                        <input name='continente'  onChange={readInput} type="text" placeholder="Continent" />
                     
                        <label htmlFor=""></label>
                        <input name='foto'  onChange={readInput} type="text" placeholder="Photo" />
            
                        <label htmlFor=""></label>
                        <input name='poblacion'  onChange={readInput} type="text" placeholder='Population' />
                   
                        <label htmlFor=""></label>
                        <input name='userAdmin' onChange={readInput} type="text" placeholder='UserAdmin' />
                  
                <div>
                    <button className=' button login' onClick={() => ValidateInfo()}>Add City</button>
                </div>
                </form>
         
       
    )
}
