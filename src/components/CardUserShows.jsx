import React from 'react'
import showAction from '../redux/actions/showAction'
import Swal from 'sweetalert'
import { useDispatch } from "react-redux";


export default function CardUserShows(props) {
    let { name, image, category, price, editar, cardid } = props

    const dispatch = useDispatch()
    const { deleteOneShow } = showAction

    
    
    
    function deleteShow(e) {
      let id= e.target.velue
      Swal({
        title: 'Are you sure?',
        text: "you want to delete this show?",
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          Swal("Poof! show file has been deleted!", {
            icon: "success",
          })
          .then(()=>{window.location.reload()})
          dispatch(deleteOneShow({id: id}))
        } else {
          Swal("Your show  is safe!");
        }
      })
    }
    return (
      <>
      
      <div className="card">
        <img src={image} alt={name} className="img-card " />
        <div className="card__details">
          <div className="name">
            <h4> {name}</h4>
            <p className='textflow'>{`${category}`}</p>
          </div>
            <p className='price'>Price:$ {`${price}`}</p>
          <div className='flex-row gap'>
            <button className='button' value={cardid} onClick={deleteShow}>Delete</button>
            <button className='button' value={cardid} onClick={editar}>Edit</button>
          </div> 
           
        </div>
        
      </div>
      

    </>
  )}