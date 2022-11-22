import React from 'react'
import myItinerariesAction from '../redux/actions/myItinerariesAction'
import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";

export default function CardUserItineraries(props) {
    let { name, image, category, city, price, duration } = props

    const dispatch = useDispatch()
    const { deleteOneItinerary } = myItinerariesAction
  
    function deleteItinerary() {
      Swal.fire({
        title: 'Are you sure?',
        text: "you want to delete this activity?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your itinerary has been deleted.',
            'success'
          )
          .then(()=>{window.location.reload()})
          dispatch(deleteOneItinerary({ id: city._id }));
        }
      })
    }
    return (
      <div className="card">
        <img src={image} alt={name} className="img-card " />
        <div className="card__details">
          <div className="name">
            <h4> {name}</h4>
            <p>{`${category}`}</p>
            <p>Price:$ {`${price}`}</p>
            <p>Duration:$ {`${duration}`}</p>
            <button className='button' onClick={deleteItinerary}>Delete</button>
          <button className='button' >Edit</button>
          </div>
        </div>
      </div>
    )
  }