import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../Api/url'



const getHotels= createAsyncThunk('gethotels', async ()=>{
    try{
        let respuesta = await axios.get(`${BASE_URL}/api/hotels/`)
         let hotels = respuesta.data.response
      
      //  console.log(hotels)
       
        return{
       hotels
        }           
}
catch(error) {

  return{
    success: false,
    response: error
  }
}
    
})

const filter = createAsyncThunk('filter', async (filtros) => {
let {text, order }= filtros
// if (filtros === '') return { hotels: [] }

  try{
    let respuesta = await axios.get(`${BASE_URL}/api/hotels/?order=${order}&name=${text}` )
    
   
    return{
      success: true,
      response: {filtros, hotels: respuesta.data.response}
    }           
}
catch(error) {

return{
  success: false,
  response: error.message
  
}
}

})

const deleteHotel = createAsyncThunk('deleteHotel', async(data)=>{
  const { id } = data  

  try {
      let respuesta = await axios.delete(`${BASE_URL}/api/hotels/${id}`)
      return {
      success: true,
      hoteldeleted : respuesta.data.hoteldeleted
     
      }
    } catch (error) {
      return {
        success: false,
        response: error.message
      }
    }
})
const hotelsActions ={
    getHotels,
    filter,
    deleteHotel
   
    
    
}

export default hotelsActions