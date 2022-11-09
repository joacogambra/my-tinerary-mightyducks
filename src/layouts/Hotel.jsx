import React from 'react'
import Hotel from '../components/Hotel'
import Shows from '../components/Shows'
import Header from '../components/Header'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'



export default function HotelLayout() {
  return (
    <>
   
    <HeaderVideo componenttop=<Header/> componentmiddle=<Hotel/> />
      <div className='flex-row grow gap evenly'>
      <Shows></Shows>
      </div>
   <Footer></Footer>

   </>
  )
}
