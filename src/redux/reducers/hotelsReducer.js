import {createReducer} from '@reduxjs/toolkit'
import hotelsActions from '../actions/hotelsActions'


 const { getHotels, filter,} = hotelsActions

const initialState={
    hotels: [],
    error: false,
}
const hotelsReducer = createReducer(initialState,
    (builder)=>{
         builder
              .addCase(getHotels.fulfilled, (state, action)=>{
                    console.log(filter.payload);
                     return { ...state, error: false, alert:false, hotels: action.payload.hotels }
            
                 })


               .addCase(getHotels.rejected, (state,action)=>{
               
                 return {   ...state }
               })
        
            //     .addCase(filter.fulfilled, (state,action)=>{
            //         console.log(action.payload);
            //         return {
            //             ...state,
            //             hotels: action.payload
            //         }
            // })
            
    })
    

export default hotelsReducer