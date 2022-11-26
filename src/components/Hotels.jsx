import React from 'react'
import { useRef, useEffect} from 'react'

import Cards from './Cards'
import hotelsActions from '../redux/actions/hotelsActions'
import {useDispatch, useSelector} from 'react-redux'




export default function Hotels() {
   
   const {getHotels,filter } = hotelsActions
   let hotels= useSelector (state=> state.hotelsReducer.hotels)
   let { order, text, hotelsfiltrado , filtros} = useSelector (state=> state.hotelsReducer)
  

  const dispatch = useDispatch()
  
  useEffect(()=>{
    if (filtros.order=== "" || filtros.text === "" || hotelsfiltrado===[]){
      dispatch(getHotels())
  } else if (!filtros.order || !filtros.text){
      
  }else {
      dispatch(filter(hotelsfiltrado))
  }
      // eslint-disable-next-line    
  },[])

console.log(filtros);
//BUSQUEDA X TEXT
let search = useRef()

 function filtrar(){
      dispatch(filter({
        text: search.current.value,
        order: order,
      })
      )   
 } 

 function sortBy(e,text){
   
     dispatch(filter({
      text : search.current.value,
      order: e.target.value
     }))
  } 
 

function printCards(array){

  return array.map((items)=>(
     <Cards key={items._id} name={items.name} image={items.photo[0]} continente={items.capacity} category="Capacity" id={items._id} page="hotel"></Cards>
     
  ))
 }

  return (
    <>
  
  <div className='input-nav'  >
  
    <input type="text" placeholder='Search...' defaultValue={filtros.text} onKeyUp={filtrar} ref={search}/>
    <select defaultValue={filtros.order} onChange={(e)=>{sortBy(e,text)}}>
        <option value="DEFAULT" disabled>SortBy:</option>
        <option value={"asc"} >Ascending</option>
        <option value={"desc"}>Descending</option>
      </select>
   
      </div>
     <div className='background flex-row wrap gap'> 
     {hotels?.length > 0
        ?( printCards(hotels))
        :(
          <div className="card" >
             <img src="/img/lost.png" alt="NotFound"/>
             <div className="card__details">
              <div className="name">
             <h4>The search for "{text}"... didn't bring any result</h4>
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