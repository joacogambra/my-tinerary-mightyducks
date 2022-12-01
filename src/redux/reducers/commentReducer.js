import {createReducer} from '@reduxjs/toolkit'
import commentActions from '../actions/commentActions'
const { getComments, create} = commentActions

const initialState={}
// comments: [],


const commentReducer = createReducer(initialState,
    (builder)=>{
         builder
              .addCase(getComments.fulfilled, (state, action)=>{
                if(action.payload.success){
                  let newState= {
                    ...state,
                  }
                  newState[action.payload.showId]=action.payload.comments
                 
                  return   newState
              
                }else{
                  let newState= {
                    ...state,
                  }
                  newState[action.payload.showId]=[]
                 
                  return   newState
                }
                                                              
                 })


               .addCase(getComments.rejected, (state,action)=>{
              
                 return {   ...state,
                 error:true,
                 message: action.payload.response  }
               })

               .addCase(create.fulfilled, (state, action)=>{
            
                let newState={
                  ...state,
                }
                newState[action.payload.newComment.showId]=[action.payload.newComment,...newState[action.payload.newComment.showId]]
                return newState
        

              })

               .addCase(create.rejected, (state,action)=>{
               console.log(action.payload);
                 return {   ...state, 
                  success:false,
                 message: action.payload.response  }
               })
              
      
     
      })
            
    

export default commentReducer