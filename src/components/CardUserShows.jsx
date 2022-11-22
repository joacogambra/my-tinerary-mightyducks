import React from 'react'
import showAction from '../redux/actions/showAction'
import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";

export default function CardUserShows(props) {
    let { name, image, category, city, price } = props

    const dispatch = useDispatch()
    const { deleteOneShow } = showAction
  
    function deleteShow() {
      Swal.fire({
        title: 'Are you sure?',
        text: "you want to delete this show?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your show has been deleted.',
            'success'
          )
          .then(()=>{window.location.reload()})
          dispatch(deleteOneShow({ id: city._id }));
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
            <button className='button' onClick={deleteShow}>Delete</button>
          <button className='button' >Edit</button>
          </div>
        </div>
      </div>
    )
  }