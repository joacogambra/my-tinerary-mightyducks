import React from 'react'
import Activities from '../components/Activities'
// import City from '../components/City'
import Header from '../components/Header'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'


export default function CityLayout() {
  return (
      <>
      <HeaderVideo componenttop={<Header/>} componentmiddle={<Activities/>} />
      <div className='flex-row grow gap evenly'>
      </div>
      <Footer/>
   
      </>
  )
}


