import React from 'react'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import MyProfile from '../components/MyProfile'
import Footer from '../components/Footer'


export default function Profile() {
    return (
      <>
        <HeaderVideo componenttop={<Header/>}componentmiddle={<MyProfile/>}/>
        <Footer/>
        </>
      )
}