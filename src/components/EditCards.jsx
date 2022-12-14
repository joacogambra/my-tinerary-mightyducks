import React from 'react'


export default function EditCards(props) {
    let {name, image,dato,capacity,id,editar,borrar, hotel_id}= props
  return (
    <div className="card" key={hotel_id}>
        <img src={image} alt={name} className="img-card "/>
<div className="card__details">
  <div className="name">
     <h4> {name}</h4>
     <p>{dato}: {capacity}</p>
     </div>
</div>
<div className='flex-row gap'>

<button className='button' value={id} onClick={editar}>Edit</button>
<button className='button' value={id} onClick={borrar} >Delete</button>
</div>
</div>

  )
}
