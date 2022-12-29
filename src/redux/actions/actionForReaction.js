import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Api/url";

const reactions = createAsyncThunk('reactions', async(data)=>{
    //let baseurl = `${BASE_URL}/reactions/`
    //let {token} = useSelector(state => state.userReducer)
    let {id,name,token} = data
    let headers = { headers: { Authorization: `Bearer ${token}` }}
    try{
        let res = await axios.put(`${BASE_URL}/reactions/?name=${name}&itineraryId=${id}`, null ,headers)
        console.log(res.data);
        return{
            success:true,
            response:res.data.response,
        }
    }catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
})

const getReactions = createAsyncThunk('getReactions', async({key, headers})=>{
    
    try{
         let res = await axios.get(`${BASE_URL}/reactions/?itineraryId=${key}`,headers)
        return{
            success:true,
            response:res.data.response,    
        }
    }catch (error) {
        console.log(error.response.data)
        return {
            success: false,
            response: error.response.data.message
        }
    }
})

const deleteReaction = createAsyncThunk('deleteReaction', async(data)=>{
    let baseurl = `${BASE_URL}/reactions/`
    try {
        const { id } = data    
        const res = await axios.delete(baseurl + id)
        return {
        success: true,
        reactionDeleted: res.data.reactionDeleted,      
        }
      } catch (error) {
        console.log(error.message)
      }
})

const actionForReaction = {reactions, getReactions, deleteReaction}
export default actionForReaction