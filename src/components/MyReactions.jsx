import React from 'react'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import actionForReaction from '../redux/actions/actionForReaction'
import { useDispatch } from 'react-redux'

export default function MyReactions() {
    const {_id} = useSelector((store) => store.userReducer)
    let userid = _id
    let [likes, setLikes] = useState([])  
    let { token } = useSelector(state => state.userReducer)
    
    useEffect(() => {
      let headers = { headers: { Authorization: `Bearer ${token}`}}
      axios.get(`${BASE_URL}/reactions?userId=` + userid, headers)
          .then(res => setLikes(res.data.response))
          .catch(error => console.log(error.message))
          // eslint-disable-next-line
  }, [])

    let {deleteReaction} = actionForReaction
    let dispatch = useDispatch()
    function deleteLike(e) {
        let id= e.target.value
        Swal.fire({
          title: 'Are you sure?',
          text: "you want to delete the reaction?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#303030',
          cancelButtonColor: '#252525',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your reaction has been deleted.',
              'success'
            )
            .then(()=>{window.location.reload()})
            dispatch(deleteReaction({ id: id }));
          }
        })
      }
      
  return (
    <div className='containter-myreactions'>
    {likes?.map((i)=>(
        <div className="card">
        <h4>Itinerary:{i.itineraryId.name}</h4>
        <img src={i.itineraryId.photo[0]} alt={i.name} className="img-card "/>
        <div>
          <h4>Reaction:{i.name}</h4>
          <img src={i.icon} alt='reaction'></img>
        </div>     
            <button onClick={deleteLike} className='deleteLike'>Delete</button>     
        </div>
       ))}</div>
  )
}
