import React from 'react'
import Arrow from './Arrow'
import hotel from '../data/hotels'
import city from '../data/cities'
import { useEffect, useState} from 'react'



export default function Carousel() {
  let [numero, setNumero]= useState(0)
  let [id, setId]=useState()

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
    if (numero < hotel.length -1){
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
      setNumero( hotel.length -1)
    }clearInterval(id)

  }


  return (
    
     <div className='flex-row wrap gap background carousel '>
         <Arrow direction={next} image="left" ></Arrow>   
     <div className='render'>
      
        <div className= "flex-row gap wrap">
        <img src={hotel[numero].photo[0]} alt={hotel.name} className='image card'/>
         <img src={hotel[numero].photo[1]}  alt={hotel.name} className='image card'/>
         </div>   
       <div className='flex-row gap wrap'>
        <img src={city[numero].photo} alt={city.name} className='image card'/>
        <img src={hotel[numero].photo[2]} alt={hotel.name} className='image card'/>
       </div>
      
     </div>
         <Arrow  direction={previous} image="right"></Arrow >
    / </div>
  )
}