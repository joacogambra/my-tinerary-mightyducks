import React from 'react'
import showAction from '../redux/actions/showAction'
import Swal from 'sweetalert'
import { useDispatch } from "react-redux";
import { Link as LinkRouter} from 'react-router-dom'
import { useNavigate } from "react-router"

export default function CardUserShows(props) {
    let { name, image, category, price,  cardid } = props
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const { deleteOneShow } = showAction

    
    
    
    function deleteShow(e) {
      let id= e.target.value
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
          navigate(`/my-shows`)
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
            <LinkRouter to={`/my-shows/${cardid}`} className="button">Edit</LinkRouter>
          </div> 
           
        </div>
        
      </div>
      

    </>
  )}