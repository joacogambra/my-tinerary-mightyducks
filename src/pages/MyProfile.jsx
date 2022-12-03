
import React from 'react'
import HeaderVideo from '../components/HeaderVideo'
import UserNav from '../components/UserNav'
import MyProfile from '../components/MyProfile'
import Footer from '../components/Footer'


export default function Profile() {
    return (
      <>
        <HeaderVideo componenttop={<UserNav/>} componentmiddle={<MyProfile/>}/>
        <Footer/>
        </>
      )
}