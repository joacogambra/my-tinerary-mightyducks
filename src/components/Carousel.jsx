import React , {useState, useEffect} from 'react'
import cities from '../data/cities'
import ArrowLeft from './arrows/ArrowLeft'
import ArrowRight from './arrows/ArrowRight'
import Card from './Card'


export default function Carousel() {
  let [numeroCambiar, setNumeroCambiar] = useState(0)
  let [id,setId] = useState(0)

  useEffect( ()=>{
    let idInterval = setInterval(
      ()=>{
        next()
      },
      5000
      )
      setId = (idInterval)
      return () => clearInterval(id)
    },[numeroCambiar])

    function next (){
      if(numeroCambiar<cities.length-1){
        setNumeroCambiar(++numeroCambiar)
      }else{
        setNumeroCambiar(0)
      }
      clearInterval(id)
    }

    function prev (){
      if(numeroCambiar>0){
        setNumeroCambiar(--numeroCambiar)
      }else{
        setNumeroCambiar(cities.length-1)
      }
      clearInterval(id)
    }

  return (
    <div className='carousel'>
      <ArrowLeft direction={prev} estilo='arrowleft'/>
      <Card photo={cities[numeroCambiar].photo}/>
      <ArrowRight direction={prev} estilo='arrowright' />
    </div>
  )
}

