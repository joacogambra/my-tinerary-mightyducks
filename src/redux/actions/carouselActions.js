import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../Api/url'

//
const imgCarousel = createAsyncThunk('getImg', async(value)=>{

    try{
        let res= await axios.get(`${BASE_URL}/api/hotels/`)
        let respuesta = await axios.get(`${BASE_URL}/cities/`)
        let hotel= res.data.response.map((e)=>{  return e.photo[0]})
        let city = (respuesta.data.response.map((e)=>{  return e.photo }))
        let photos = [...hotel,...city]
        console.log(photos)
        return {
            success:true,
            response: {
                photos
             }
/// return del payload (está implícito) cargar (obj con 2 propiedades success y response(q lleva los datos) )

        }

    }
    catch(error){
        console.log(error);
        return {
            success: false,
            response: error.message
        }

    }


})



const carouselActions = {
    imgCarousel,
}

export default carouselActions
