import {createReducer} from '@reduxjs/toolkit'
import hotelsActions from '../actions/hotelsActions'


 const { getHotels, filter, deleteHotel} = hotelsActions

const initialState={
    hotels: [],
    hotelsfiltrado: [],
    error: false,
    text: '',
    order: '',
  
  
}
const hotelsReducer = createReducer(initialState,
    (builder)=>{
         builder
              .addCase(getHotels.fulfilled, (state, action)=>{
                  //  console.log(action.payload.hotels)
                     return { ...state, error: false,
                      hotels: action.payload.hotels
                       }
                      
                      
                 })


               .addCase(getHotels.rejected, (state,action)=>{
                console.log(action.payload.response)
               
                 return {   ...state, error: true,
                 message: action.payload.response  }
               })
      
            .addCase(filter.fulfilled, (state, action)=>{
         
              let filtros = {
                text: action.payload.text,
                order: action.payload.order || "desc",
              }
              console.log(action.payload)
                
              
              let newState ={
                ...state,
                filtros,
                hotelsfiltrado:  action.payload.response.hotelsfiltrado
              }
                return newState
            })
               

            .addCase(deleteHotel.fulfilled, (state,action)=>{
              return {
                  ...state,
                  myHotels: state.myHotel.filter((hotel) => hotel._id !== action.payload.hoteldeleted),
                }
          })
      })
            
    

export default hotelsReducer