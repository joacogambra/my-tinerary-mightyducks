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
        
          console.log(newComment)
        
          return{
          success: true,
          newComment
          }           
  }
  catch(error) {

    return{
      success: false,
      response: error
    }
  }
    
})





const commentAction = {getComments, create}
export default commentAction