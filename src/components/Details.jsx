import React from 'react'

export default function Details(props) {
    let {name, image, category, number} = props
   
  return (
    
<div class="a-box details">
<div class="img-container correccion ">
   <div class="img-inner ">
     <div class="inner-skew">
         <img src={image} alt={name} className="img-card "/>
      </div>
     </div>
   </div>
 <div class="text-container">
      <h3> {name}</h3>
   <div>
     {`${category}:${number}`}
   </div>
<button className='button'> Comments</button>
</div>
</div>

  )
}
