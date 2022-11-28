import React from 'react'
import EditShow from '../components/EditShow'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import UserNav from '../components/UserNav'


export default function Edit() {


  return (
    <>
   
    <HeaderVideo componenttop={<UserNav/>} componentmiddle={ <EditShow/>}/>

   <Footer></Footer>
   </>

  )
}
