import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import NewShow from '../components/NewShow'
import UserNav from '../components/UserNav'

export default function New() {


  return (
    <>
   
    <HeaderVideo componenttop={<UserNav/>}  componentmiddle={<NewShow/>}/>
   
   
      <Footer/>     
    </>
  )
}
