import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../Api/url'



const getHotels= createAsyncThunk('gethotels', async ()=>{
    try{
        let respuesta = await axios.get(`${BASE_URL}/api/hotels/`)
         let hotels = respuesta.data.response
        // let status= respuesta.status
      //  console.log(hotels)
       
        return{
       hotels
        }           
}
catch(error) {
  console.log(error)
  return{
    success: false,
    response: error
  }
}
    
})

const filter = createAsyncThunk('filter', async (filtros) => {
let {text, order }= filtros

  try{
    let respuesta = await axios.get(`${BASE_URL}/api/hotels/?order=${order}&name=${text}` )
    
    console.log(respuesta)
   
    return{
      success: true,
      response: {filtros, hotelsfiltrado: respuesta.data.response}
    }           
}
catch(error) {
console.log(error.message)
return{
  success: false,
  response: error.message
}
}

})
;

// const editHotels = createAsyncThunk("editHotels", async (data) => {

//   console.log(data)


//   try {
//     let respuesta = await axios.patch(`${BASE_URL}hotels/${data.id}`)
//     let cargado = respuesta.data.response

//     return { hotelsEdit: cargado}


//   } catch (error) {
//     console.log(error)
//   }
// })
const deleteHotel = createAsyncThunk('deleteHotel', async(data)=>{
  
  try {
      const { id } = data    
      let respuesta = await axios.delete(`${BASE_URL}/api/hotels/${id}`)
      return {
      success: true,
      hotel : respuesta.data.hoteldeleted
     
      }
    } catch (error) {
      console.log(error.message)
    }
})
const hotelsActions ={
    getHotels,
    filter,
    deleteHotel
   
    
    
}

export default hotelsActions