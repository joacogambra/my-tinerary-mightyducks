import { createReducer } from "@reduxjs/toolkit";
import carouselActions from "../actions/carouselActions";

const { imgCarousel } = carouselActions

const initialState ={
    photos: [],
   
}
const carouselReducer = createReducer (initialState,
    (builder)=>{
        builder
            .addCase(imgCarousel.fulfilled, (state,action)=>{
               return {photos: action.payload.response.photos }
            })
            .addCase(imgCarousel.rejected, (state,action)=>{
               return { mensaje : action.payload.response}
            })
    })

    export default carouselReducer