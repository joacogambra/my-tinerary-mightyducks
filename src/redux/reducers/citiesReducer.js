import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction";
import newCityAction from "../actions/newCityAction";
import myCitiesAction from "../actions/myCitiesAction";


const {newCity} = newCityAction
const {getFiltering} = citiesAction
const {deleteOneCity} = myCitiesAction
const initialState = {
    cities:[],
    myCities: []
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
    .addCase(deleteOneCity.fulfilled, (state,action)=>{
        return {
            ...state,
            myCities: state.myCities.filter((city) => city._id !== action.payload.cityDeleted),
          }
    })
})

export default citiesReducer