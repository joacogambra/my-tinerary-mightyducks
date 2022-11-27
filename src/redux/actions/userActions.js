import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";

let _id=''

const signIn= createAsyncThunk('signIn', async(payload)=>{
       
   _id= payload.response.user._id
    console.log(_id)

    return { 
        datos: payload.response.user, 
        token:  payload.response.token,
        success:  payload.success,
    }
})   

const keepLog= createAsyncThunk('keepLog', async(token)=>{
    
     let headers = {headers: {'Authorization': `Bearer ${token}`}}

    try{
        let user= await axios.post(`${BASE_URL}/api/auth/token`,null, headers)
        return {
            success: true,
            response: {
                user: user.data.response,
                token
            }
        }
    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
}) 


const userActions={ signIn, keepLog,}

export default userActions