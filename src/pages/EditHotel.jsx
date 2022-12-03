import React from 'react'
import MyHotels from '../components/MyHotels'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function EditHotel() {


  return (
    <>
    <HeaderVideo componenttop={<Header/>} />
    <MyHotels/>
   <Footer></Footer>
   </>

  )
}
