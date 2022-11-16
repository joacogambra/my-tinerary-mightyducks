import React , {useState, useEffect} from 'react'
import Arrow from './Arrow'
import axios from 'axios'
import { BASE_URL } from '../Api/url'



export default function Carousel() {
  let [hotels, setHotels]= useState([])
  let [cities, setCities]= useState([])

  
  useEffect(() =>{ 
    axios.get(`${BASE_URL}/api/hotels/`)
   .then(response=> setHotels(response.data.response))
   .catch(error=> console.log(error))
   axios.get(`${BASE_URL}/cities/`)
   .then(response=> setCities(response.data.response))
   .catch(error=> console.log(error))
   }, [])
 
 
 
  let photo2 = hotels.map(photos => photos.photo[0])
  let photo3= hotels.map(photos => photos.photo[2])
  let photos= cities.map(photos => photos.photo)
  
 
    let [numero, setNumero]= useState(0)
    let [selectedImage, setSelectedImage]= useState(photos[0])
    let [selectedImage2, setSelectedImage2]= useState(photo2[0])
    let [selectedImageb, setSelectedImageb]= useState(photos[6])
    let [selectedImagec, setSelectedImagec]= useState(photo3[0])
    let [id, setId]= useState(0)
    let [id2, setId2]= useState(0)


    useEffect(
        ()=>{
          let idInterval=  setInterval(
               () => {
                    next()
                           },
                    8000
                 ) 
                 setId(idInterval)
                 return clearInterval(id)
                 //eslint-disable-next-line
        },[selectedImage])
        useEffect(
          ()=>{
            let idInterval=  setInterval(
                 () => {
                      next()
                             },
                      8000
                   ) 
                   setId2(idInterval)
                   return clearInterval(id2)
                   //eslint-disable-next-line
          },[selectedImage2])
    
  
    function previous (){
        let nextIndex= numero > 0 ? numero -1 : photos.length -1
        setSelectedImage(photos[nextIndex])
        setSelectedImageb(photos[nextIndex+1])
        setSelectedImage2(photo2[nextIndex])
        setSelectedImagec (photo3[nextIndex])
        setNumero(nextIndex)
        clearInterval(id)
    }

   function next (){
 
        let nextIndex= numero < photos.length ? numero +1 : 0
        setSelectedImage(photos[nextIndex])
        setSelectedImage2(photo2[nextIndex])
        setSelectedImageb(photos[nextIndex+1])
        setSelectedImagec (photo3[nextIndex])
        setNumero(nextIndex)
        clearInterval(id)
    }

  return (
    <div className='flex-row wrap gap background carousel '>
        <Arrow direction={next} image="left" ></Arrow>   
    <div className='render'>
      
        <div className= "flex-row gap wrap">
        <img src={selectedImage} alt=" " className='image card'/>
        <img src={selectedImageb}  alt=" " className='image card'/>
        </div>   
      <div className='flex-row gap wrap'>
       <img src={selectedImage2} alt=" " className='image card'/>
       <img src={selectedImagec} alt=" " className='image card'/>
      </div>
      
    </div>
        <Arrow  direction={previous} image="right"></Arrow >
    </div>
  )
}