import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import FormHotel from '../components/FormHotel'
import Header from '../components/Header'

export default function formHotel() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<FormHotel/>}/>
    
      <Footer/>     
    </>
  )
}
