import {createReducer} from '@reduxjs/toolkit'
import hotelsActions from '../actions/hotelsActions'


 const { getHotels, filter, deleteHotel} = hotelsActions

const initialState={
    hotels: [],
    text: '',
    order: '', 
    myHotels: [],  
    success: true,
    initial: true,
  
}
const hotelsReducer = createReducer(initialState,
    (builder)=>{
         builder
              .addCase(getHotels.fulfilled, (state, action)=>{
             
                if (action.payload.succes){
                  return { ...state, initial:false,
                    hotels: action.payload.hotels
                     }   

                } else{
                  return {   ...state, initial:false,
                    message: action.payload.response  }
                  
                }

                                                            
                 })


               .addCase(getHotels.rejected, (state,action)=>{
               
                 return {   ...state,
                 message: action.payload.response  }
               })
      
            .addCase(filter.fulfilled, (state, action)=>{
             
              console.log(action.payload.response.order)
              if (action.payload.success=== true){
                let newState ={
                  ...state,
  
                  text: action.payload.response.text,
                  order:action.payload.response.order,
                  hotels:  action.payload.response.hotels
                }
               
                return newState
              } else {
                return {
                  ...state,
                  hotels : [],
                  success: false
                }
            
              }
              
             
            })
            
            .addCase(filter.rejected, (state,action)=>{
              console.log(action)
              
              return {   ...state,
                hotels: []
                }

            })

            .addCase(deleteHotel.fulfilled, (state,action)=>{
                
              return {
                  ...state,
                  myHotels: state.myHotels.filter((hotel) => hotel._id !== action.payload.hoteldeleted),
                }
          })
     
      })
            
    

export default hotelsReducer