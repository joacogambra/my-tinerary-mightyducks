import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../Api/url'



const getHotels= createAsyncThunk('gethotels', async ()=>{
    try{
        let respuesta = await axios.get(`${BASE_URL}/api/hotels/`)
        let hotels = respuesta.data.response
        // let status= respuesta.status
       
        
        
         
        return {
          hotels
        }


    
}
catch(error) {
  console.log(error)
}
    


})

const filter= createAction('filter', (filter)=>{
    if (filter.value !== ""|| filter.order!== "")
    
     return {  filter}
})
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

const hotelsActions ={
    getHotels,
    filter,
   
    
    
}

export default hotelsActions