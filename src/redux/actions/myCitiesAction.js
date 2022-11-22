import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";

const deleteOneCity = createAsyncThunk('deleteOneCity', async(data)=>{
    let baseurl = `${BASE_URL}/cities/`
    try {
        const { id } = data    
        const res = await axios.delete(baseurl + id)
        return {
        success: true,
        cityDeleted: res.data.cityDeleted,      
        }
      } catch (error) {
        console.log(error.message)
      }
})

const myCitiesAction = {deleteOneCity}
export default myCitiesAction
