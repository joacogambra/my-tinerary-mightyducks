import React from 'react'
import MyHotels from '../components/MyHotels'
import Header from '../components/Header'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'



export default function EditHotel() {


  return (
    <>
    <HeaderVideo componenttop={<Header/>} />
    <MyHotels/>
   <Footer></Footer>
   </>

  )
}
