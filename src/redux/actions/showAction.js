import { createAsyncThunk } from "@reduxjs/toolkit";
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

const showAction = {deleteOneShow}
export default showAction