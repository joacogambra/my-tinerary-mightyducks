import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";

const deleteOneItinerary = createAsyncThunk('deleteOneItinerary', async(data)=>{
    let baseurl = `${BASE_URL}/itineraries/`
    try {
        const { id } = data    
        const res = await axios.delete(baseurl + id)
        return {
        success: true,
        itiDeleted: res.data.itiDeleted,      
        }
      } catch (error) {
        console.log(error.message)
      }
})

const myItinerariesAction = {deleteOneItinerary}
export default myItinerariesAction
