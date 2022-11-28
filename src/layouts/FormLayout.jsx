import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import FormHotel from '../components/FormHotel'
import UserNav from '../components/UserNav'

export default function formHotel() {
  return (
    <>
    <HeaderVideo componenttop={<UserNav/>} componentmiddle={<FormHotel/>}/>
    
      <Footer/>     
    </>
  )
}
