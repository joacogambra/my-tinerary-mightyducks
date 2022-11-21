import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";

const newCity = createAsyncThunk('newCity', async (data)=>{
    try{
        let res = await axios.post(`${BASE_URL}/cities`, data)
        if(res.data.id){
            return{
                success:true,
                response:data
            }
        }else{
            return{
                success:false,
                response:res.data.message
            }
        }
    } catch (error){
        console.log(error)
        return{
            success:false,
            response:'error en el post'
        }        
    }
})
const newCityAction = {newCity}
export default newCityAction