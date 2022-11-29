import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import myItinerariesAction from '../redux/actions/myItinerariesAction'
import { BASE_URL } from '../Api/url';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';


export default function FormNewItinerary() {
    const form = useRef();
    const citiId = useRef();
    const name = useRef();
    const photoP = useRef();
    const photoS = useRef();
    const photoT = useRef();
    const description = useRef();
    const price = useRef();
    const duration = useRef();
    // const userId = useRef();


    let [selectors, setSelectors] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/cities`)
            .then((res) => setSelectors(res.data.response))
        // eslint-disable-next-line
    }, []);

    const dispatch = useDispatch()
    const {newItinerary} =  myItinerariesAction
    let { _id } = useSelector(state => state.userReducer)


    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            citiId: citiId.current.value,
            name: name.current.value,
            photo: [photoP.current.value, photoS.current.value, photoT.current.value],
            description: description.current.value,
            price: price.current.value,
            duration: duration.current.value,
            userId: _id,
        };  
        try {
          const res = await dispatch(newItinerary(data));  
          if (res.payload.success) {
            Swal.fire(
              'Created',
              'Your itinerary has been created.',
              'success'
            )
           .then(()=>{window.location.reload()})
          } else {
            console.log(res.payload.message);
          }
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <form className='sign-in form-itinerary' ref={form}>
            <h3>Add a new activity</h3>
            <select name="select" className='selects'>
                {selectors.map((i)=>(<option value={i._id} key={i._id}>{i.name}</option>))}             
            </select>
            <input name='citiId' type="string" placeholder='citiId' ref={citiId} required />
            <input name='name' type="text" placeholder="Name" ref={name} required />
            <input name='photoP' type="url" placeholder="First picture" ref={photoP} required />
            <input name='photoS' type="url" placeholder="Second picture" ref={photoS} required />
            <input name='photoT' type="url" placeholder="Third picture" ref={photoT} required />
            <input name='description' type="text" placeholder="Description" ref={description} required />
            <input name='price' type="number" placeholder="Price" ref={price} required />
            <input name='duration' type="number" placeholder='Duration' ref={duration} required />
            <button className='button add' type='submit' onClick={handleSubmit}>Add activity</button>
        </form>
    )
}
