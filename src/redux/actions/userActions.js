import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";

// let _id=''

const signIn= createAsyncThunk('signIn', async(payload)=>{
       
//  let  _id= payload.response.user._id
   

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
                user: user.data.response.user,               
                token
            }
        }
    } catch (error) {
        // console.log(error.response)
        return {
            success: false,
            response: error.response.data
        }
    }
}) 

const signOut = createAsyncThunk('signOut', async(token)=>{
    let url = `${BASE_URL}/api/auth/sign-out`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try{
        let user = await axios.post(url,null,headers)
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