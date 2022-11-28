import React from 'react'
import { useRef, useEffect} from 'react'
import Cards from './Cards'
import hotelsActions from '../redux/actions/hotelsActions'
import {useDispatch, useSelector} from 'react-redux'




export default function Hotels() {
   
   const {getHotels,filter } = hotelsActions
   let hotels= useSelector (state=> state.hotelsReducer.hotels)
   let { order, text } = useSelector (state=> state.hotelsReducer)
  console.log(text);

  const dispatch = useDispatch()
  
  useEffect(()=>{
    if (order=== "" || text === ""){
      console.log("estoy en el if")
      dispatch(getHotels())
  } else if(!order || !text) {
    console.log("else");
      dispatch(filter())
  } else{
    dispatch(filter())
    console.log("no encontrado")
      if (filter.success=== false){
           dispatch(filter())
        }
  }
      // eslint-disable-next-line    
  },[order, text])


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
     {hotels.length>0
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