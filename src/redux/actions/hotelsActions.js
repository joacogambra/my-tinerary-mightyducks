import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
// import { createAction } from '@reduxjs/toolkit'
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
    // catch (AxiosError){
    //     if (AxiosError.request.status===404){
    //         return{
    //             payload: {error: true},
                
    //         }
    //     }
    //     else{
    //     return {
    //         payload: "error"
    //     }
    // }
    // }




})


const value= createAction('value', (value,order) =>{
    console.log(value);
    if (value!== undefined || order !== undefined){
      
        return{
            payload: {
                value: value,
                order: order,
            }
        }
       
    }
    
    else {
    
        return {
            payload: {error: true}
        }
    }
})
const hotelsActions ={
    getHotels,
    value,
    
}

export default hotelsActions