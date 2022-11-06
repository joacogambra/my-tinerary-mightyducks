import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hotels from '../components/Hotels'
import React from 'react'
import Phrases from '../components/Phrases'

export default function HotelsLayout() {
  return (
   <>
   <div className='render'>
    <HeaderVideo componenttop=<Header/> componentmiddle=<Phrases></Phrases>/>
    <div className='grow'>
    <Hotels></Hotels>
    </div>
   <Footer></Footer>
   </div>
   </> 
  )
}
