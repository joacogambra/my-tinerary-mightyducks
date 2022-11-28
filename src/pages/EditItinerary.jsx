import React from 'react'
import EditItinerary from '../components/EditItinerary'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import UserNav from '../components/UserNav'


export default function EditHotel() {


  return (
    <>
    <HeaderVideo componenttop={<UserNav/>} componentmiddle={<EditItinerary/>}/>
    
   <Footer></Footer>
   </>

  )
}
