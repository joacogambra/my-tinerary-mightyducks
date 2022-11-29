import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";
//import { useSelector } from "react-redux";

const deleteOneItinerary = createAsyncThunk('deleteOneItinerary', async(data)=>{
    let baseurl = `${BASE_URL}/itineraries/`
    //let {token} = useSelector(state => state.userReducer)
    //let headers = { headers: { Authorization: `Bearer ${token}` } }
    try {
        const { id } = data    
        const res = await axios.delete(baseurl + id )
        return {
        success: true,
        itiDeleted: res.data.itiDeleted,
        }
      } catch (error) {
        console.log(error.message)
      }
})

const newItinerary = createAsyncThunk('newItinerary', async (data)=>{
  // let baseurl = `${BASE_URL}/itineraries/`
  //let {token} = useSelector(state => state.userReducer)
  //let headers = { headers: { Authorization: `Bearer ${token}` } }
  try{
    let res = await axios.post(`${BASE_URL}/itineraries/`, data)
    if(res.data.success){
      return{
        success:true,
        message:res.data.message,
        newItinerary:res.data.id
      }
    }else{
      return{
        success:false,
        message:res.data.message
      }
    }
  }catch(error){
    console.log(error.message)
  }
})

const myItinerariesAction = {deleteOneItinerary, newItinerary}
export default myItinerariesAction
