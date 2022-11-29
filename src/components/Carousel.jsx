import React , {useState, useEffect} from 'react'
import Arrow from './Arrow'
// import axios from 'axios'
// import { BASE_URL } from '../Api/url'
import { useDispatch, useSelector } from 'react-redux'
import carouselActions from '../redux/actions/carouselActions'



export default function Carousel() {

 let photo = useSelector(state=>state.carouselReducer.photos)
 let dispatch= useDispatch()
 const {imgCarousel}= carouselActions
  // let [hotels, setHotels]= useState([])
  // let [cities, setCities]= useState([])

  
  useEffect(() =>{ 
    if (photo.length===0){
      
      dispatch(imgCarousel())
    }

   }, [imgCarousel, dispatch,photo])
 

   let photo2 = photo.slice(0,6)
   let photo3= photo.slice(6,12)
   let photos= photo.slice(12,24)

 
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
                    4000
                 ) 
                 setId(idInterval)
                 return clearInterval(id)
                 //eslint-disable-next-line
        },[selectedImage,selectedImageb])
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
          },[selectedImage2,selectedImagec])
    
  
    function previous (){
        let nextIndex= numero > 0 ? numero -1 : photos.length -1
        setSelectedImage(photos[nextIndex+1])
        setSelectedImageb(photos[nextIndex])
        setSelectedImage2(photo2[nextIndex])
        setSelectedImagec (photo3[nextIndex])
        setNumero(nextIndex)
        clearInterval(id)
    }

   function next (){
 
        let nextIndex= numero < photos.length ? numero +1 : 0
        setSelectedImage(photos[nextIndex+1])
        setSelectedImage2(photo2[nextIndex])
        setSelectedImageb(photos[nextIndex])
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