import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import FormCities from '../components/FormCities'

export default function NewCity() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<FormCities/>} />
      <Footer/>     
    </>
  )
}
