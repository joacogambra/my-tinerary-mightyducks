import React from 'react'
import { useRef, useEffect, useState} from 'react'
import Cards from './Cards'
import hotelsActions from '../redux/actions/hotelsActions'
import {useDispatch, useSelector} from 'react-redux'




export default function Hotels() {
   let [sort, setSort]= useState('desc')
   let [word, setWord]= useState()
  const {getHotels,filter } = hotelsActions
  let hotels= useSelector (state=> state.hotelsReducer.hotels)
  let { order, text, hotelsfiltrado} = useSelector (state=> state.hotelsReducer)
 

 const dispatch = useDispatch()
 
 useEffect(()=>{
   if (order=== "" || text === "" || hotelsfiltrado===[]){
     dispatch(getHotels())
 } else {
     dispatch(filter(hotelsfiltrado))
 }
     // eslint-disable-next-line    
 },[])


//BUSQUEDA X TEXT
let search = useRef()

function filtrar(){
  setWord(search.current.value)
     dispatch(filter({
       text: word,
       order: sort
     })
     )   
} 

function sortBy(e){
  setSort(e.target.value)
    dispatch(filter({
     text : word,
     order: sort
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
  
    <input type="text" placeholder='Search...'  onKeyUp={filtrar} ref={search}/>
    <select  onChange={(e)=>{sortBy(e,text)}}>
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