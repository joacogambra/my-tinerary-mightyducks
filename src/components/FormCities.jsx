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
        <div className='formAdminMain'>
            <div className='formAdminContainer'>
                <form className='formAdmin' action="">
                    <div className='inpFormContainer'>
                        <label htmlFor="">id</label>
                        <input name='id' className='inpFormAdmin' onChange={readInput} type="text" />
                    </div>

                    <div className='inpFormContainer'>
                        <label htmlFor="">name</label>
                        <input name='nombre' className='inpFormAdmin' onChange={readInput} type="text" />
                    </div>

                    <div className='inpFormContainer'>
                        <label htmlFor="">continent</label>
                        <input name='continente' className='inpFormAdmin' onChange={readInput} type="text" />
                    </div>

                    <div className='inpFormContainer'>
                        <label htmlFor="">photo</label>
                        <input name='foto' className='inpFormAdmin' onChange={readInput} type="text" />
                    </div>

                    <div className='inpFormContainer'>
                        <label htmlFor="">population</label>
                        <input name='poblacion' className='inpFormAdmin' onChange={readInput} type="text" />
                    </div>

                    <div className='inpFormContainer'>
                        <label htmlFor="">userAdmin</label>
                        <input name='userAdmin' className='inpFormAdmin' onChange={readInput} type="text" />
                    </div>
                </form>
                <div className='btnContainer'>
                    <button className='btnFormAdmin' onClick={() => ValidateInfo()}>Agregar Ciudad</button>
                </div>
            </div>
        </div>
    )
}
