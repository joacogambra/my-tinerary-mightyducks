import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import MyShows from '../components/MyShows'

export default function MyShowsPage() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<MyShows/>}/>
    
    
      <Footer/>     
    </>
  )
}
