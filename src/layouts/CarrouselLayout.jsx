import React from 'react'
import Carousel from '../components/Carousel'
import cities from "../data/cities"
import hotels from "../components/Hotels"



export default function CarouselLayout() {
   
  return (
    <>
  <div className='carousel'>
    <Carousel array= {cities} number1= "0" number2="6"></Carousel>
    
    </div>
    </>
  )
}