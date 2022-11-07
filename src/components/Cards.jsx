import React from 'react'
import { Link as LinkRouter} from 'react-router-dom'

export default function Cards(props) {
    let {name, image,continente,category, id, page}= props
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

              </div>
                {`${category}:${continente}`}
              <div>
                <LinkRouter className='boton-city'id={id} to={`/${page}/${id}`} >More</LinkRouter>
            </div>
        </div>
        


  )
}
