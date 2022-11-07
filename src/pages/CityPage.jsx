import React from 'react'
import CityLayout from '../layouts/CityLayout'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CityPage() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<CityLayout/>}/>
      <Footer/>
      </>
    
  )
}
