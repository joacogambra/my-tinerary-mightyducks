import React from 'react'
import { Link as LinkRouter} from 'react-router-dom'

export default function Cards(props) {
    let {name, image,continente,category, id, page}= props
  return (

      <div className="card">
                    <img src={image[0]} alt={name} className="img-card "/>
            <div className="card__details">
              <div className="name">
                 <h4> {name}</h4>
                 <p>{`${category}:  ${continente}`}</p>
                <LinkRouter className='card-button'id={id} to={`/${page}/${id}`} >More</LinkRouter>
                 </div>
             
            </div>
        </div>
        


  )
}
