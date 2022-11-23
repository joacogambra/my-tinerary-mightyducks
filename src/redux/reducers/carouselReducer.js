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
                let response = action.payload.response.photos.slice(12)
                let photos = response.map((e)=>{ 
                    return e.photo[0]
                })
            
                //puede ser con return o directamente modif el estado
              return {photos: photos}
            })
            .addCase(imgCarousel.rejected, (state,action)=>{
               return { mensaje : action.payload.response}
            })
    })

    export default carouselReducer