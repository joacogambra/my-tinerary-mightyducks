import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import SignUp from '../components/SignUp'

export default function SignUpLayout() {
  return (
    <>
      <HeaderVideo componenttop={<Header/>} componentmiddle={<SignUp/>} />
      <Footer/>
    </>
  )
}

