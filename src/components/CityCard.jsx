import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'


export default function CityCard(props) {
    let cities = props.cities
    let page = props
   
    return (
        <div class="a-box">
            <div class="img-container">
                <div class="img-inner">
                    <div class="inner-skew">
                        <img src={cities.photo}  alt={cities.name} />
                    </div>
                </div>
            </div>
            <div class="text-container">
                <h3>{cities.name}</h3>
                <div>
                    {cities.continent}
                </div>
                <LinkRouter className='boton-city'id={cities.id} to={`/city/${cities.id}`} >More</LinkRouter>
            </div>
            </div>
           
    )
}
