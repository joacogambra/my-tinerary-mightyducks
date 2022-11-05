import React from 'react'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Home1 from '../layouts/Home1'
import Carousel from '../components/Carousel'
export default function home() {
  return (
    
    <Home1>
        
         <HeaderVideo componenttop=<Header></Header> componentmiddle=<Logo/>/>
         <div className='backcolor'>
         <Carousel></Carousel>
         </div>
         <Footer></Footer>
       
        </Home1>
   
  )
}
