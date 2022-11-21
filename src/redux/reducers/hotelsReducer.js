import {createReducer} from '@reduxjs/toolkit'
import hotelsActions from '../actions/hotelsActions'


 const { getHotels, value } = hotelsActions

const initialState={
    hotels: [],
    error: false,
    value: {
        busqueda:'',
        orden:'',
   
    },
}
const hotelsReducer = createReducer(initialState,
    (builder)=>{
         builder
              .addCase(getHotels.fulfilled, (state, action)=>{
                    console.log(action)
        //             const allhotels = action.payload.payload
                     return { ...state, error: false, alert:false, hotels: action.payload.hotels }
        //         })

               
                 })
               .addCase(getHotels.rejected, (state,action)=>{
                console.log(action.payload)
               
                 return {
                   
                    ...state,
                    
                 }
               })
            //    .addCase(value.rejected, (state,action)=>{
               
            //     return {
            //        ...state,
            //        error: true,
            //     }
            //   })
            //     .addCase(value, (state,action)=>{
            //         console.log(action.payload);
            //         //console.log(newState)
            //         return {
            //             value: action.payload.busqueda,/// fijar como se manda
            //             orden: action.payload.orden,
            //         } //retorno el estado modificado
            // })
    })
    

export default hotelsReducer