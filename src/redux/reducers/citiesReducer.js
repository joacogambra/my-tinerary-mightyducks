import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction";
import newCityAction from "../actions/newCityAction";

const {newCity} = newCityAction
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
    .addCase(newCity.fulfilled, (state, action )=>{   
            if(action.payload.success) {
                state.cities.push(action.payload.success)
            }      
    })
})

export default citiesReducer