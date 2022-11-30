import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import NewReaction from '../components/NewReaction'

export default function ReactionsCreat() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<NewReaction/>}/>
    
    
      <Footer/>     
    </>
  )
}
