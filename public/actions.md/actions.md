import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";

const getComments =  createAsyncThunk('getComments', async (id)=>{

    try{
        let respuesta = await axios.get(`${BASE_URL}/api/comments?showId=${id}`)
         let comments = respuesta.data.response

       
        return{
      showId: id,
      success: true,
      comments: comments
        }           
}
catch(error) {

  return{
    showId: id,
    success: false,
    response: error.response.data.response
  }
}
    
})
const create =  createAsyncThunk('create', async (data)=>{
  let {form, id, token}= data
  let headers = { headers: { Authorization: `Bearer ${token}` } }


      try{
          let respuesta = await axios.post(`${BASE_URL}/api/comments?showId=${id}`, form, headers)
           let newComment = respuesta.data.response
        
          return{
          success: true,
          newComment
          }           
  }
  catch(error) {

    return{
      success: false,
      response: error.response
    }
  }
    
})
const erase= createAsyncThunk('erase', async(data)=>{
let token= data.token
let id= data.commentId

  let headers = { headers: { Authorization: `Bearer ${token}` } }

  
  try{
    let res = await axios.delete(`${BASE_URL}/api/comments/${id}`, headers)
    let deleted= res.data
    console.log(res.data)
    return{
      success: true,
      comment: id,
      response: deleted
    }

  }catch(error){
    return{
      success: true,
      response: error.response
      } 
  }

})  





const commentAction = {getComments, create, erase}
export default commentAction