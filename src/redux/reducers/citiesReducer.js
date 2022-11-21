import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction";

const {getFiltering} = citiesAction
const initialState = {
    cities:[],
}

const citiesReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(citiesAction.getCities.fulfilled, (state,action)=>{  
        return{
            ...state,
            cities:action.payload.cities,
        }
    })
    .addCase(getFiltering.fulfilled, (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    })
})

export default citiesReducer