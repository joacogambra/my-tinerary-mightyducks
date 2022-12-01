import React from 'react'
import MyHotels from '../components/MyHotels'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import UserNav from '../components/UserNav'




export default function HotelLayout() {
 
  
  return (
    <>
   
    <HeaderVideo componenttop={<UserNav/> }componentmiddle={<MyHotels/>} />
     
   <Footer></Footer>

   </>
  )
}
