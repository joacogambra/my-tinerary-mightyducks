import React from 'react'

export default function Cards(props) {
    let {name, image,continente,category, id}= props
  return (

      <div class="a-box details">
           <div class="img-container correccion">
              <div class="img-inner">
                <div class="inner-skew">
                    <img src={image} alt={name} className="img-card "/>
                 </div>
                </div>
              </div>
            <div class="text-container">
                 <h3> {name}</h3>
              <div>
                {`${category}:${continente}`}
              </div>
              <div>
                <button className='boton-city'id={id}>More</button>
            </div>
        </div>
        </div>


  )
}
