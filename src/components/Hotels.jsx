import React from 'react'
import { useState, useRef, useEffect} from 'react'
import Select from './Select'
import Cards from './Cards'
import hotelsActions from '../redux/actions/hotelsActions'
import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert';






export default function Hotels() {
   
   const {getHotels,filter } = hotelsActions
   let hotels= useSelector (state=> state.hotelsReducer.hotels)
   let { order, text, hotelsfiltrado } = useSelector (state=> state.hotelsReducer)
  // console.log(hotels)

  const dispatch = useDispatch()
  
  useEffect(()=>{
    if (order=== "" || text === ""){
      dispatch(getHotels())
    }
  
    // dispatch(value({busqueda, orden}))
      // eslint-disable-next-line react-hooks/exhaustive-deps
     
  },[])

// console.log(hotels)

//BUSQUEDA X TEXT
let search = useRef()

 function filtrar(){
      dispatch(filter({
        text: search.current.value,
        order: order,
      })
      )   
 } 

 function sortBy(e){
   
     dispatch(filter({
      text : text,
      order: e.target.value
     }))
  } 
 
console.log(hotelsfiltrado);


  // function search(e){
  //  setBusqueda(e.target.value)
  //   //  dispatch(value(value(e.target.value)))
  //  let query= `${BASE_URL}/api/hotels?name=${e.target.value}&order=${orden}`
  //  axios.get(query)
  //   .then(response=> setHotelsSearch(response.data.response))
  //   .catch(error=> {
  //     if (error.status === 404){
  //       Swal({
  //         icon: 'error',
  //         title: 'Check the info you sent:',
  //         text: (`${  busqueda } has no results`),
          
  //        })
  //        return []
  // }}
  //    )
  // }


// console.log(hotelsSearch);
// let render=()=>{
//     if(filter.lengh===0){
//       Swal({
//           icon: 'error',
//           title: 'Check the info you sent:',
//           text: (`${  text } has no results`),
          
//          })

//       return hotels
//     }
//     else{
//       return filter
//     }
    
// }

function printCards(array){

  return array.map((items)=>(
     <Cards key={items._id} name={items.name} image={items.photo[0]} continente={items.capacity} category="Capacity" id={items._id} page="hotel"></Cards>
     
  ))
 }

  return (
    <>
  
  <div className='input-nav'  >
  
    <input type="text" placeholder='Search...'  onKeyUp={filtrar} ref={search}/>
   <Select value1="asc" value2="desc" onchange={sortBy}  ></Select>  
      </div>
     <div className='background flex-row wrap gap'> 
     
        { printCards(hotelsfiltrado)  }
         {/* : ( 
          <div className="card" >
             <img src="/img/lost.png" alt="NotFound"/>
             <div className="card__details">
              <div className="name">
             <h4>The search for "{busqueda}"... didn't bring any result</h4>
             <div className='button' onClick={()=> { window.location.reload() }}> Go Back</div>
              </div>
              </div>
          </div>
          ) */}
     {/* } */}
      </div>
           
     
 
     

      </>
  ) 
 }