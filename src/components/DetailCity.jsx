import React from 'react'

export default function DetailCity(props) {
  let { name, image, population } = props

  return (
    <div class="a-box">
      <div class="img-container correccion">
        <div class="img-inner ">
          <div class="inner-skew">
            <img src={image} alt={name} className="img-card" />
          </div>
        </div>
      </div>
      <div class="text-container">
        <h3>{name}</h3>
        <p>Population: {population}</p>   
      </div>
    </div>
  )
}
