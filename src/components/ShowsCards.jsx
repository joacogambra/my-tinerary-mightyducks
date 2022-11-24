import React from 'react'
import { Link as LinkRouter} from 'react-router-dom'
export default function ShowsCards(props) {
    let {name, image,precio,description,id,editar,borrar,dato, date,page}= props
    return (
      <div className="card" key={id}>
          <img src={image} alt={name} className="img-card "/>
  <div className="card__details">
    <div className="name">
       <h4> {name}</h4>
       <p> {description}</p>
       <p> $ {precio}</p>
        <p>{dato}: {date} </p>
       </div>
  </div>
  <div className='flex-row gap'>
  <LinkRouter className='button' id={id} to={`/${page}/editShows/${id}`} onClick={editar}>Edit</LinkRouter>
  <button className='button' id={id} onClick={borrar} >Delete</button>
  </div>
  </div>
    )
}
