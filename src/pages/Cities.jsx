import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import CardCities from '../components/CardCities'



export default function Cities() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<CardCities/>}/>
    
    
      <Footer/>     
    </>
  )
}