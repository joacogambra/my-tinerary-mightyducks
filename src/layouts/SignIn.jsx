import React from 'react'
import HeaderVideo from '../components/HeaderVideo'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SingIn from '../components/SingIn'


export default function SignIn() {
  return (
    <>
    <HeaderVideo componenttop={<Header/>} componentmiddle={<SingIn/>} ></HeaderVideo>
    
    <Footer/>
    </>
  )
}
