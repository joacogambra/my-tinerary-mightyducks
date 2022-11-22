import React from 'react'


export default function EditCards(props) {
    let {name, image,dato,capacity,id,editar,borrar}= props
  return (
    <div className="card" key={id}>
        <img src={image} alt={name} className="img-card "/>
<div className="card__details">
  <div className="name">
     <h4> {name}</h4>
     <p>{dato}: {capacity}</p>
     </div>
</div>
<div className='flex-row gap'>
<button className='button' id={id} onClick={editar}>Edit</button>
<button className='button' id={id} onClick={borrar} >Delete</button>
</div>
</div>

  )
}
