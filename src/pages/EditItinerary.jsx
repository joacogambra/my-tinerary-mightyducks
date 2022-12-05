import React from 'react'
import EditItinerary from '../components/EditItinerary'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function EditHotel() {


  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<EditItinerary/>}/>
    
   <Footer></Footer>
   </>

  )
}
