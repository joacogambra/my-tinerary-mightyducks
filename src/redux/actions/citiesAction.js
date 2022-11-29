import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";

const getCities = createAsyncThunk('getCities', async ()=>{
    // let url = `${BASE_URL}/cities`
    try{
        const respuesta = await axios.get(`${BASE_URL}/cities`)
        return{
            cities: respuesta.data.response
        }
    }catch(error){
        return {
            error: console.log(error.message)
        }
    } 
})

const getFiltering = createAsyncThunk('getFiltering', async(e) => {
    try {
        let name = e.name
        let continent = e.continent.join('&continent=')
        let res = await axios.get(`${BASE_URL}/cities?continent=${continent}&name=${name}&userId=`)
        return {
            cities: res.data.response
        }
    } catch (error) {
        return {
            error:console.log(error.message)
        }
    }
})
const citiesAction = {
    getCities, getFiltering
}

export default citiesAction





