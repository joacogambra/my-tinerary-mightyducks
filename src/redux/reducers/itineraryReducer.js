import { createReducer } from "@reduxjs/toolkit";
import myItinerariesAction from '../actions/myItinerariesAction'

const {deleteOneItinerary} = myItinerariesAction
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
})

export default itineraryReducer