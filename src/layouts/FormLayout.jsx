import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import FormHotel from '../components/FormHotel'

export default function formHotel() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<FormHotel/>}/>
    
      <Footer/>     
    </>
  )
}
