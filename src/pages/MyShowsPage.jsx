import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import MyShows from '../components/MyShows'
import UserNav from '../components/UserNav'

export default function MyShowsPage() {
  return (
    <>
    <HeaderVideo componenttop={<UserNav/>} componentmiddle={<MyShows/>}/>
    
    
      <Footer/>     
    </>
  )
}
