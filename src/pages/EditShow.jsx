import React from 'react'
import EditShow from '../components/EditShow'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function Edit() {


  return (
    <>
   
    <HeaderVideo componenttop={<Header/>} componentmiddle={ <EditShow/>}/>

   <Footer></Footer>
   </>

  )
}
