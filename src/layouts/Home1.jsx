import React from 'react'
import Header from '../components/Header'
import HeaderVideo from '../components/HeaderVideo'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

export default function Home1() {
  return (
    <HeaderVideo componenttop={<Header/>} componentmiddle={<Logo></Logo>} componentfotter={<Carousel/>}>
    <Footer/> 
    </HeaderVideo>
  )
}
