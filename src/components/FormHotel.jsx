import React from 'react'
import {useRef} from 'react'
import Inputs from './Inputs'

export default function FormHotel() {
    let id = useRef ()
    let name = useRef ()
    let photo = useRef ()
    let capacity = useRef ()
    let cityId = useRef ()
    
    
    const onButtonClick = () => {
        
        let newHotel= {
        name: name.current.value,
        id:id.current.value,
        photo:photo.current.value,
        capacity:capacity.current.value,
        cityId:cityId.current.value,
    }
    localStorage.setItem("newHotel", JSON.stringify(newHotel))
      };

      
      return (
        <>
        <div className='sign-in'>
            <h3> Enter the Hotel information</h3>
          <input ref={name} type="text"  placeholder='Name'/>
          <input ref={id} type="text"  placeholder='Id'/>
          <input ref={photo} type="text"  placeholder='Photo'/>
          <input ref={capacity} type="text"  placeholder='Capacity'/>
          <input ref={cityId} type="text"  placeholder='CityId'/>

          <button onClick={onButtonClick} className='login'>Add Hotel</button>
          </div>
        </>
      );
    
}
