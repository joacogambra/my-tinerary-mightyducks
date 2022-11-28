import React from 'react'
import EditShow from '../components/EditShow'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import UserNav from '../components/UserNav'


export default function EditHotel() {


  return (
    <>
    <HeaderVideo componenttop={<UserNav/>} />
    <EditShow/>
   <Footer></Footer>
   </>

  )
}
