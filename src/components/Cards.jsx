import React from 'react'

export default function Cards(props) {
    let {name, image,continente,category}= props
  return (

      <div class="a-box">
           <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                    <img src={image} alt={name} className="img-card"/>
                 </div>
                </div>
              </div>
            <div class="text-container">
                 <h3> {name}</h3>
              <div>
                {`${category}:${continente}`}
              </div>
        </div>
        </div>


  )
}
