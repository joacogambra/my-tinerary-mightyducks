import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";


const signIn= createAsyncThunk('signIn', async(payload)=>{
 

    return { 
        datos: payload.response.user, 
        token:  payload.response.token,
        success:  payload.success,
    }
})   

const keepLog= createAsyncThunk('keepLog', async(token)=>{
    console.log(token);
     let headers = {headers: {'Authorization': `Bearer ${token}`}}

    try{
        let user= await axios.post(`${BASE_URL}/api/auth/token`,null, headers)
        console.log(user.data)
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

const signOut = createAsyncThunk('signOut', async(token)=>{
    let url = `${BASE_URL}/api/auth/sign-out`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try{
        let user = await axios.put(url,null,headers)
        return{
            success:true,
            response:user.data.message
        }
    }catch(error){
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
})

const userActions={ signIn, keepLog, signOut }

export default userActions