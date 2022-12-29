import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import NewShow from '../components/NewShow'
import Header from '../components/Header'
export default function New() {


  return (
    <>
   
    <HeaderVideo componenttop={<Header/>}  componentmiddle={<NewShow/>}/>
   
   
      <Footer/>     
    </>
  )
}
