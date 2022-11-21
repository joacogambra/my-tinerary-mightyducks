import {createReducer} from '@reduxjs/toolkit'
import citiesFiltered from '../actions/citiesFiltered'

const {checkboxs, inputSearch} = citiesFiltered
const initialState = {
        continent: [],
        name: '',
}

const citiesFilterReducer = createReducer(initialState, builder => {
    builder
        .addCase(inputSearch, (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    })
        .addCase(checkboxs, (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        })
        
})

export default citiesFilterReducer