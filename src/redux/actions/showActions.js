import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";

const deleteOneShow = createAsyncThunk('deleteOneShow', async(data)=>{
    let baseurl = `${BASE_URL}/api/shows/`
    try {
        const { id } = data    
        const res = await axios.delete(baseurl + id)
        return {
        success: true,
        showDeleted: res.data.showDeleted,      
        }
      } catch (error) {
        console.log(error.message)
      }
})
const createShow = createAsyncThunk('createShow', async(data, body)=>{
  const {show}= body
  let baseurl = `${BASE_URL}/api/shows/`
  const { id } = data    
  console.log(body);

  try {
      const res = await axios.post(baseurl + id, show)
      console.log(res);
      return {
      success: true,
        
      }
    } catch (error) {
      console.log(error.message)
    }
})
const read = createAsyncThunk('read', async(id)=>{

 
  try {
      const res = await axios.get(`${BASE_URL}/api/shows/?_id=${id}`
      )
    console.log(res.data.response);
      return {
      success: true,
      response:  res.data.response ,
        
      }
    } catch (error) {
      console.log(error)
    }
})



const showAction = {deleteOneShow, createShow, read}
export default showAction