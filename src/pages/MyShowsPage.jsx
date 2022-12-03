import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import MyShows from '../components/MyShows'
import Header from '../components/Header'

export default function MyShowsPage() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<MyShows/>}/>
    
    
      <Footer/>     
    </>
  )
}
