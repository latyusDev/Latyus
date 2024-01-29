import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axiosClient from '../../api/axios'
import authService from "./authService";

export const signUp = createAsyncThunk('register',async(payload,thunkAPI)=>{
    try{
        return await authService.register(payload)
    }catch(e){
        // const message = (error.response && error.response.data
        //      && error.response.data.message) || error.message  || error.toString()
        //      thunkAPI.rejectWithValue(message)
        console.log(e)
    }
})

export const signIn = createAsyncThunk('login',async(payload)=>{
    try{
        const response = await axiosClient.post('/login',payload)
        console.log(response)
      if(response.data){
        Cookies.set('ACCESS_TOKEN',response.data.token)
        Cookies.set('user',JSON.stringify(response.data.user))
      }
      return response.data;
    }catch(e){
        console.log(e)
    }
})

export const signOut = createAsyncThunk('logout',async()=>{
    return  await authService.signOut();
})

const authSlice = createSlice({
    name:'user',
    initialState:authService.initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        }
    },
    extraReducers(builder){
            builder
                    .addCase(signUp.pending,(state)=>{
                        state.isLoading = true;
                        state.isSuccess = false;
                    })
                    .addCase(signUp.fulfilled,(state,action)=>{
                        console.log(action.payload)
                            state.user = action.payload.user;
                            state.token = action.payload.token;
                            state.isSuccess = true;
                            state.isLoading = false;
                    })
                    .addCase(signUp.rejected,(state,action)=>{
                        state.user = null;
                        state.token = null;
                        state.isSuccess = false;
                        state.isLoading = false;
                        // state.message = action.payload;
                    })
                    .addCase(signIn.fulfilled,(state,action)=>{
                        state.user = action.payload.user;
                        state.token = action.payload.token
                        // state.status = 'succeeded';
                    })
                    .addCase(signOut.fulfilled,(state,action)=>{
                        state.user = null;
                        state.token = null;                        
                    })
    }
})

const token = (state)=>state.user.token
const authUser = (state)=>state.user.user
const {reset} = authSlice.actions
export {authUser,token,reset}
export default authSlice.reducer
