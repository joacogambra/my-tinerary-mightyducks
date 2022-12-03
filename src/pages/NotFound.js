import React from 'react'
import NoFoundLayout from '../layouts/NotFoundLayout'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import NotFound from '../components/NotFound'
import Footer from '../components/Footer'



export default function PageNotFound() {
  return (
        <NoFoundLayout>
         <HeaderVideo componenttop={<Header></Header>} componentmiddle={<NotFound/>}/>
         <Footer></Footer>
        </NoFoundLayout>
  )
}
