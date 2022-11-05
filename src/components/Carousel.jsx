import React , {useState, useEffect} from 'react'
import cities from '../data/cities'
import hotels from '../data/hotels'
import Arrow from './Arrow'



export default function Carousel() {

    
    let halfArray= cities.slice(0,6)
    let halfArray2= hotels.slice(0,6)
    let photo1= halfArray.map(photos => photos.photo) 
    let hotelsArray = halfArray2.map(photos => photos.photo[0])
    let photos= photo1.concat(hotelsArray)

   
    let [numero, setNumero]= useState(0)
    let [selectedImage, setSelectedImage]= useState(photos[0])
    let [id, setId]= useState(0)
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
    
  
    function previous (){
        let nextIndex= numero > 0 ? numero -1 : photos.length -1
        setSelectedImage(photos[nextIndex])
        setNumero(nextIndex)
        clearInterval(id)
    }

   function next (){
 
        let nextIndex= numero < photos.length ? numero +1 : 0
        setSelectedImage(photos[nextIndex])
        setNumero(nextIndex)
        clearInterval(id)
    }
  

  return (
    <div className='container'>
        <Arrow direction={next} image="left" ></Arrow>   
    <div className='carousel'>
      
        <div className='cards'>
        <img src={selectedImage} alt="photos" className='image'/>
        <img src={selectedImage} alt="photos" className='image'/>
        </div>   
      <div className='cards'>
       <img src={selectedImage} alt="photos" className='image'/>
       <img src={selectedImage} alt="photos" className='image'/>
      </div>
      
    </div>
        <Arrow  direction={previous} image="right"></Arrow >
    </div>
  )
}