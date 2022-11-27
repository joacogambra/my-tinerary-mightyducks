import {createReducer} from '@reduxjs/toolkit'
import userActions from '../actions/userActions'
 const { signIn, keepLog, signOut, } = userActions

const InitialState={
_id: '',
name: '',
lastName: '',
photo: '',
logged: false,
token: ''


}

const userReducer = createReducer(InitialState, 
    (builder)=>{
        builder
            .addCase(signIn.fulfilled, (state,action)=>{
              let success= action.payload.success
        
            
                if (success){
                    let user= action.payload.datos
                    let token= action.payload.token 
                    localStorage.setItem('token', JSON.stringify({token: {user:token}}))// el obj tipo de propiedad y token
                    let newState ={
                        ...state,
                        _id: user._id,
                        name: user.name,
                        lastName: user.lastName,
                        photo: user.photo,
                        logged: true,
                        token: token,
                        role: user.role
                    }
                    console.log(newState);
                    return newState
                }else {
                    let newState={
                        ...state,
                         message: action.payload.success
                    }
                    return newState
                }

            })
            .addCase(keepLog.fulfilled, (state, action) => {
               
                const { success,response } = action.payload
                if (success) {
                    let { user,token } = response
                    let newState = {
                        ...state,
                        name: user.name,
                        photo: user.photo,
                        logged: true,
                        token: token,
                        _id: user.id
                    }
                    console.log(newState);
                    return newState
                } else {
                    let newState = {
                        ...state,
                        mensaje: response
                    }
                    return newState
                }
            })
            .addCase(signOut.fulfilled,(state,action)=>{
                const { success,response } = action.payload
                if(success){
                    localStorage.removeItem('token')
                    let newState = {
                        ...state,
                        _id: '',
                        name: '',
                        lastName: '',
                        photo: '',
                        logged: false,
                        token: ''
                    }
                    return newState
                }else{
                    let newState = {
                        ...state,
                        mensaje: response
                    }
                    return newState
                }
            })
           



    })
    export default userReducer