import React from 'react'
import Arrow from './Arrow'
// import hotel from '../data/hotels'
// import city from '../data/cities'
import citiesAction from '../redux/actions/citiesAction'
import { useEffect, useState} from 'react'
import hotelsActions from '../redux/actions/hotelsActions'
import {useDispatch, useSelector} from 'react-redux'


export default function Carousel() {
  
  let [numero, setNumero]= useState(0)
  let [id, setId]=useState()
  const {getHotels } = hotelsActions
  const {getCities} = citiesAction  
  let hotels= useSelector (state=> state.hotelsReducer.hotels)
  let city = useSelector(store => store.citiesReducer.cities)
  let {  initial} = useSelector (state=> state.hotelsReducer)
  const dispatch = useDispatch()

  useEffect(()=>{

    if (initial){
      dispatch(getHotels())
    }
    dispatch(getCities())
  
      // eslint-disable-next-line    
  },[])


  useEffect(()=>{
  
    let idInterval= setInterval(()=>{
      next()
    },
    6000)
    setId(idInterval)
    return clearInterval(id)
  // eslint-disable-next-line
  }, [numero])

  let next =()=>{
    if (numero < hotels.length -1){
      setNumero(numero+1)
    } else{
      setNumero(0)
    }
  
    clearInterval(id)
  }
  let previous=()=>{
    if(numero > 0){
      setNumero(numero-1)
    } else{
      setNumero( hotels.length -1)
    }clearInterval(id)

  }


  return (
    
     <div className='flex-row wrap gap background carousel '>
         <Arrow direction={next} image="left" ></Arrow>   
     <div className='render'>
    
       {hotels?.length>0 && city?.length>0 
       ?(
        <>
       <div className= "flex-row gap wrap">
        <img src={hotels[numero].photo[0]} alt={hotels.name} className='image card'/>
         <img src={hotels[numero].photo[1]}  alt={hotels.name} className='image card'/>
         </div>   
       <div className='flex-row gap wrap'>
        <img src={city[numero].photo} alt={city.name} className='image card'/>
        <img src={hotels[numero].photo[2]} alt={hotels.name} className='image card'/>
       </div>
       </>):(null)}
      
     </div>
         <Arrow  direction={previous} image="right"></Arrow >
    / </div>
  )
}