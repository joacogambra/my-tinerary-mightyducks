import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import MyCities from '../components/MyCities'

export default function MyCitiesPage() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<MyCities/>}/>
    
    
      <Footer/>     
    </>
  )
}