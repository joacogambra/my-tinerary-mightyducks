import {createReducer} from '@reduxjs/toolkit'
import commentActions from '../actions/commentActions'
const { getComments, create, erase, edit} = commentActions

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
                newState[action.payload.showId]=[action.payload.newComment,...newState[action.payload.showId]]
                return newState
        

              })

               .addCase(create.rejected, (state,action)=>{
               
                 return {   ...state, 
                  success:false,
                 message: action.payload.response  }
               })
               
               .addCase(erase.fulfilled, (state,action)=>{
              
                if (action.payload.success){
                  let newState={
                    ...state,
                  }
                 newState[action.payload.showId]=newState[action.payload.showId].filter(comment=> comment._id !== action.payload.comment)
                
                  return newState
                } else{

                  return { ...state,}
                      
                }
                              
               })
               .addCase(edit.fulfilled, (state,action)=>{
              
                if (action.payload.success){
                  let { showId, comment}= action.payload
                  let newComment= action.payload.editComment

                  let newState={
                    ...state,
                  }

                  newState[showId]= newState[showId].map(post=>{
                    if (post._id === comment){
                        return  newComment
                        
                    }else{
                      return post
                    }
                  })
                 
                  return newState
                }
                              
               })
     
      })
            
    

export default commentReducer