import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../Api/url'

//
const imgCarousel = createAsyncThunk('getImg', async(value)=>{

    try{
        let res= await axios.get(`${BASE_URL}/api/hotels/`)
        let respuesta = await axios.get(`${BASE_URL}/cities/`)
        let photos = respuesta.data.response.concat(res.data.response)
     
        return {
            success:true,
            response: {value, photos: photos }
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
