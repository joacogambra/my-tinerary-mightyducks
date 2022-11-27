import React from 'react'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Home2 from '../layouts/Home2'
import Carousel from '../components/Carousel'
// import UserNav from '../components/UserNav'
export default function home() {
  
 
  return (
    
    <Home2>

          <HeaderVideo componenttop={<Header></Header>} componentmiddle={<Logo/>}/>        
         <Carousel></Carousel>       
         <Footer></Footer>      
        </Home2>
 

  )
}