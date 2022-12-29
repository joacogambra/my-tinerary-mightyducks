import React from 'react'
import Footer from '../components/Footer'
import HeaderVideo from '../components/HeaderVideo'
import Header from '../components/Header'
import MyReactions from '../components/MyReactions'


export default function MyLikes() {
    return (
        <>
        <HeaderVideo componenttop={<Header/>} componentmiddle={<MyReactions/>}/> <Footer/>     
        </>
      )
}
