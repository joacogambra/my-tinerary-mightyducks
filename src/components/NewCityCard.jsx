import React from 'react'

export default function NewCityCard() {
    let newCity = JSON.parse(localStorage.getItem('city'))

  return (
    <div class="a-box">
            <div class="img-container">
                <div class="img-inner">
                    <div class="inner-skew">
                        <img src={newCity.foto} alt={newCity.nombre}></img>
                    </div>
                </div>
            </div>
            <div class="text-container">
                <h3>{newCity.nombre}</h3>
                <div>
                    {newCity.continente}
                </div>
                <button className='boton-city'>More</button>
            </div>
        </div>
  )
}
