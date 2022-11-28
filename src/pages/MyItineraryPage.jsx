import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import MyItinerary from '../components/MyItinerary'
import UserNav from '../components/UserNav'

export default function MyItineraryPage() {
  return (
    <>
    <HeaderVideo componenttop={<UserNav/>} componentmiddle={<MyItinerary/>}/>
    
    
      <Footer/>     
    </>
  )
}