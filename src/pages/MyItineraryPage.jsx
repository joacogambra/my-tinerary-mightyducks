import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import MyItinerary from '../components/MyItinerary'
import Header from '../components/Header'


export default function MyItineraryPage() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<MyItinerary/>}/>
    
      <Footer/>     
    </>
  )
}