import { createReducer } from "@reduxjs/toolkit";
import myItinerariesAction from '../actions/myItinerariesAction'

const {deleteOneItinerary, newItinerary} = myItinerariesAction
const initialState = {
    itineraries:[],
}

const itineraryReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(deleteOneItinerary.fulfilled, (state,action)=>{
        return {
            ...state,
            itineraries: state.itineraries.filter((itinerary) => itinerary._id !== action.payload.itineraryDeleted),
          }
    })
    .addCase(newItinerary.fulfilled,(state,action)=>{
        // if(action.payload.success) {
        //     state.itineraries.push(action.payload.success)
        // }
        return {
            ...state,
            itineraries: state.itineraries.concat(action.payload.itineraryCreated),
          }
        })
})

export default itineraryReducer