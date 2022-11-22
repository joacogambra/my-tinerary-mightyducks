import {createReducer} from '@reduxjs/toolkit'
import hotelsActions from '../actions/hotelsActions'


 const { getHotels, filter, deleteHotel} = hotelsActions

const initialState={
    hotels: [],
    error: false,
    myHotel: []
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
            .addCase(deleteHotel.fulfilled, (state,action)=>{
              return {
                  ...state,
                  myHotels: state.myHotel.filter((hotel) => hotel._id !== action.payload.cityDeleted),
                }
          })
      })
            
    

export default hotelsReducer