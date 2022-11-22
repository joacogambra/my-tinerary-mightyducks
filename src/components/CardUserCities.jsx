import React from 'react'
import myCitiesAction from '../redux/actions/myCitiesAction'
import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";

export default function CardUserCities(props) {
  let { name, image, continente, category, city  } = props

  const dispatch = useDispatch()
  const { deleteOneCity } = myCitiesAction

  function deleteCity() {
    Swal.fire({
      title: 'Are you sure?',
      text: "you want to delete the city?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your city has been deleted.',
          'success'
        )
        .then(()=>{window.location.reload()})
        dispatch(deleteOneCity({ id: city._id }));
      }
    })
  }
  return (
    <div className="card">
      <img src={image} alt={name} className="img-card " />
      <div className="card__details">
        <div className="name">
          <h4> {name}</h4>
          <p>{`${category}:  ${continente}`}</p>
          <button className='button' onClick={deleteCity}>Delete</button>
        <button className='button' >Edit</button>
        </div>
      </div>
    </div>
  )
}