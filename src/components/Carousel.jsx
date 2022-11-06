import React , {useState, useEffect} from 'react'
import cities from '../data/cities'
import hotels from '../data/hotels'
import Arrow from './Arrow'



export default function Carousel(props) {
 
  let hoteles = hotels.map(photos => photos.photo[0])
  console.log(hoteles);
  function slice(array1,  number1, number2) {
    let pic= array1.slice(number1,number2)
    let photos= pic.map(photos => photos.photo)
    return photos
  }

  let photos= (slice(cities, 0,6)).concat(hoteles.slice(0,6))
  console.log(photos)
  let photo2= (slice(cities, 6,13)).concat(hoteles.slice(6,13))
  console.log(photo2)
    
    // let halfArray2= hotels.slice(0,6)
    
    // let hotelsArray = halfArray2.map(photos => photos.photo[0])
    // let photos= photo1.concat(hotelsArray)
    
    // let otherHotel= hotels.slice(6,13)
    // let hotelHalf = otherHotel.map(photos => photos.photo[0])
 
    let [numero, setNumero]= useState(0)
    let [selectedImage, setSelectedImage]= useState(photos[0])
    let [selectedImage2, setSelectedImage2]= useState(photo2[0])
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
        setSelectedImage2(photo2[nextIndex])
        setNumero(nextIndex)
        clearInterval(id)
    }

   function next (){
 
        let nextIndex= numero < photos.length ? numero +1 : 0
        setSelectedImage(photos[nextIndex])
        setSelectedImage2(photo2[nextIndex])
        setNumero(nextIndex)
        clearInterval(id)
    }
  

  return (
    <div className='container'>
        <Arrow direction={next} image="left" ></Arrow>   
    <div className='carousel'>
      
        <div className='cards'>
        <img src={selectedImage}  alt="photos" className='image'/>
        
        </div>   
      <div className='cards'>
       <img src={selectedImage2} alt="photos" className='image'/>
        
      </div>
      
    </div>
        <Arrow  direction={previous} image="right"></Arrow >
    </div>
  )
}