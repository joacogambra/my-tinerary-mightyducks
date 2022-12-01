import { createReducer } from "@reduxjs/toolkit";
import showActions from '../actions/showActions'

const {deleteOneShow, read } = showActions
const initialState = {
    shows:[],
    success: ''
}

const showReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(deleteOneShow.fulfilled, (state,action)=>{
        return {
            ...state,
            shows: state.shows.filter((show) => show._id !== action.payload.showDeleted),
          }
    })
     .addCase(read.fulfilled, (state, action)=>{
          console.log(action.payload);
          return {
            ...state,
              shows: action.payload.response,
              success:true
         }

     })
     .addCase(read.rejected, (state, action)=>{
   
        return {
          ...state,
            shows: [],
            success: false
       }

   })
})

export default showReducer