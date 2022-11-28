import React from 'react'
import MyHotels from '../components/MyHotels'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import UserNav from '../components/UserNav'


export default function EditHotel() {


  return (
    <>
    <HeaderVideo componenttop={<UserNav/>} />
    <MyHotels/>
   <Footer></Footer>
   </>

  )
}
