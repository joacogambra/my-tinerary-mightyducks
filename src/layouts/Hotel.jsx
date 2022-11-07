import React from 'react'
import Hotel from '../components/Hotel'
import Shows from '../components/Shows'
import Header from '../components/Header'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'



export default function HotelLayout() {
  return (
    <>
    <div className='render'>
    <HeaderVideo componenttop=<Header/> componentmiddle=<Hotel/> />
    <div className='grow hotels'>
    <Shows></Shows>
    </div>
   <Footer></Footer>
   </div>
   </>
  )
}
