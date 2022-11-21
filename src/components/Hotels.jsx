import React from 'react'
import { useState} from 'react'
import InputSearch from './InputSearch'
import Select from './Select'
import Cards from './Cards'
import axios from 'axios'
import { BASE_URL } from '../Api/url';
import { useEffect } from 'react'
import hotelsActions from '../redux/actions/hotelsActions'
import {useDispatch, useSelector} from 'react-redux'
import swal from 'sweetalert';






export default function Hotels() {
  let [busqueda, setBusqueda]= useState('')
  let [orden, setOrden]= useState('')
  
   const {getHotels, value} = hotelsActions
  let hotels= useSelector (state=> state.hotelsReducer.hotels)
  console.log(hotels)

  const dispatch = useDispatch()
  let [hotelsSearch, setHotelsSearch] = useState([...hotels])

 
  useEffect(()=>{
    
     dispatch(getHotels())
   
    // dispatch(value({busqueda, orden}))
      // eslint-disable-next-line react-hooks/exhaustive-deps
     
  },[dispatch,getHotels])

console.log(hotels)
  

  // useEffect(() =>{ 
    
    //    axios.get(`${BASE_URL}/api/hotels/`)
    //   .then(response=> setHotels(response.data.response))
    //   .catch(error=> console.log(error))
    
    //   }, [])
    
  
  function search(e){
   setBusqueda(e.target.value)
    //  dispatch(value(value(e.target.value)))
   let query= `${BASE_URL}/api/hotels?name=${e.target.value}&order=${orden}`
   axios.get(query)
    .then(response=> setHotelsSearch(response.data.response))
    .catch(error=> console.log(error) )
  }

 function sortBy(e){
   setOrden(e.target.value)
  //  dispatch(value(orden(e.target.value)))
   let query= `${BASE_URL}/api/hotels?name=${busqueda}&order=${e.target.value}`
   axios.get(query)
    .then(response=> setHotelsSearch(response.data.response))
   .catch(error=>{ 
    console.log(error)})
   
 }

console.log(hotelsSearch);


function printCards(array){

  return array.map((items)=>(
     <Cards key={items._id} name={items.name} image={items.photo[0]} continente={items.capacity} category="Capacity" id={items._id} page="hotel"></Cards>
     
  ))
 }

  return (
    <>
  
  <div className='input-nav'  >
     <InputSearch setchange={search} dato="search" type="text" placeholder="search"/>
    <Select value1="asc" value2="desc" onchange={sortBy}  ></Select>  
      </div>
     <div className='background flex-row wrap gap'> 
     { hotelsSearch.length > 0
        ?( printCards(hotelsSearch)  )
         : ( 
          <div className="card" >
             <img src="/img/lost.png" alt="NotFound"/>
             <div className="card__details">
              <div className="name">
             <h4>The search for "{busqueda}"... didn't bring any result</h4>
             <div className='button' onClick={()=> { window.location.reload() }}> Go Back</div>
              </div>
              </div>
          </div>
          )
     }
      </div>
           
     
 
     

      </>
  ) 
 }
