import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";

const getComments =  createAsyncThunk('getComments', async (id)=>{
 
    try{
        let respuesta = await axios.get(`${BASE_URL}/api/comments?showId=${id}`)
         let comments = respuesta.data.response.comment
          
       
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
          let respuesta = await axios.post(`${BASE_URL}/api/comments?${id}`, form, headers)
           let newComment = respuesta.data.response
        console.log(respuesta.data);
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
let showId= data.id


  let headers = { headers: { Authorization: `Bearer ${token}` } }

  
  try{
    let res = await axios.delete(`${BASE_URL}/api/comments/${id}`, headers)
 
    console.log(res.data)
    return{
      success: true,
      comment: id,
      showId: showId,
  
    }

  }catch(error){
    return{
      success: false,
      response: error.response
      } 
  }

}) 
const edit =  createAsyncThunk('edit', async (data)=>{
  // let { id, token, commentId}= data
  let headers = { headers: { Authorization: `Bearer ${data.token}` } }
 
  let comment={
    comment: data.comment
  }   
 


       try{
          let respuesta = await axios.put(`${BASE_URL}/api/comments/${data.commentId}`, comment, headers)
            let editComment = respuesta.data.response
          

          return{
          success: true,
          showId: data.id,
          comment: data.commentId,
          editComment
          }           
   }
   catch(error) {

    return{
      success: false,
      response: error.response
    }
  }
    
})





const commentAction = {getComments, create, erase, edit}
export default commentAction