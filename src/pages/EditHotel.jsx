import React from 'react'
import Edit from '../components/Edit'
import Header from '../components/Header'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'



export default function EditHotel() {


  return (
    <>
    <HeaderVideo componenttop={<Header/>} />
    <Edit/>
   <Footer></Footer>
   </>

  )
}
