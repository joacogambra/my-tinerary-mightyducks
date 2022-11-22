import React from 'react'
import MyHotels from '../components/MyHotels'
import Header from '../components/Header'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'




export default function HotelLayout() {
  return (
    <>
   
    <HeaderVideo componenttop={<Header/> }componentmiddle={<MyHotels/>} />
     
   <Footer></Footer>

   </>
  )
}
