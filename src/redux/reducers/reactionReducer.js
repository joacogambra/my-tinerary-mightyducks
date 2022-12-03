import { createReducer } from "@reduxjs/toolkit"
import actionForReaction from "../actions/actionForReaction"

const { getReactions, reactions } = actionForReaction

const initialState = {
    allReactions:[],
   // myReactions:[]
}

const reactionReducer = createReducer(initialState, builder => {
    builder
    .addCase(reactions.fulfilled, (state,action)=>{
      console.log(action);
      if(action.payload.success) {
        let {id} = action.payload.response   
        let newReactions = state.allReactions.map(reaction => {
          if(reaction._id === id) {
            return {...reaction, booleanReaction: !reaction.booleanReaction, userId: reaction.booleanReaction ? reaction.userId - 1 : reaction.userId + 1}
          } else {
            return reaction
          }
        })
        let newState = {...state}
        newState.allReactions = newReactions
        return newState
      } else {
        console.log(action.payload.message)
      }
    })
    .addCase(getReactions.fulfilled,(state,action)=>{
      if (action.payload.success) {
        return {...state, allReactions: [...state.allReactions, ...action.payload.response]}
      }
    })
})

export default reactionReducer