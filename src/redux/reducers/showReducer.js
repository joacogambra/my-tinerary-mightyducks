import { createReducer } from "@reduxjs/toolkit";
import showAction from '../actions/showAction'

const {deleteOneShow, } = showAction
const initialState = {
    shows:[],
}

const showReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(deleteOneShow.fulfilled, (state,action)=>{
        return {
            ...state,
            shows: state.shows.filter((show) => show._id !== action.payload.showDeleted),
          }
    })
    // .addCase(getShows.fulfilled, (state, action)=>{
    //     console.log(action.payload)
    //     // return {
    //     //     ...state,
    //     //     shows: action.payload.shows
    //     // }

    // })
})

export default showReducer