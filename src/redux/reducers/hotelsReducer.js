import {createReducer} from '@reduxjs/toolkit'
import hotelsActions from '../actions/hotelsActions'


 const { getHotels, filter, deleteHotel} = hotelsActions

const initialState={
    hotels: [],
    hotelsfiltrado: [],
    error: false,
    text: '',
    order: '', 
    myHotels: [],  
  
  
}
const hotelsReducer = createReducer(initialState,
    (builder)=>{
         builder
              .addCase(getHotels.fulfilled, (state, action)=>{
                     return { ...state, error: false,
                      hotels: action.payload.hotels
                       }                                          
                 })


               .addCase(getHotels.rejected, (state,action)=>{
               
                 return {   ...state, error:true,
                 message: action.payload.response  }
               })
      
            .addCase(filter.fulfilled, (state, action)=>{
              console.log(action.payload);
              let filtros = {
                text: action.payload.response.filtros.text,
                order:action.payload.response.filtros.order
              }
              
              
              let newState ={
                ...state,
                filtros,
                text: action.payload.response.filtros.text,
                order:action.payload.response.filtros.order,
                hotels:  action.payload.response.hotels
              }
              console.log(newState);
              return newState
            })
            
            .addCase(filter.rejected, (state,action)=>{
              console.log(action); 
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