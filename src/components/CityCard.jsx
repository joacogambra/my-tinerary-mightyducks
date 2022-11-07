import React from 'react'


export default function CityCard(props) {
    let cities = props.cities
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
                <button className='boton-city'>More</button>
            </div>
        </div>
    )
}
