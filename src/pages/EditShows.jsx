import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import FormShows from '../components/FormShows'

export default function EditShows() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<FormShows/>}/>
    
      <Footer/>     
    </>
  )
}
