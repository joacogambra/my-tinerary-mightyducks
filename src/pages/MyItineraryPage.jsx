import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import MyItinerary from '../components/MyItinerary'
import FormNewItinerary from '../components/FormNewItinerary'

export default function MyItineraryPage() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<MyItinerary/>}/>
    <FormNewItinerary/>
    
      <Footer/>     
    </>
  )
}