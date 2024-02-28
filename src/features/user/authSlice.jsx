import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axiosClient from '../../api/axios'
const user = Cookies.get('user');
const ACCESS_TOKEN = Cookies.get('ACCESS_TOKEN');

const initialState = {
    user:user?JSON.parse(user):null,
    token:ACCESS_TOKEN?ACCESS_TOKEN:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    status:'idle',
    message:''
}

export const signUp = createAsyncThunk('register',async(payload,thunkAPI)=>{
    try{
        const response = await axiosClient.post('/register',payload)
        if(response.data){
            Cookies.set('ACCESS_TOKEN',response.data.token)
            Cookies.set('user',JSON.stringify(response.data.user))
        }
        return response.data;
        }catch(e){
    
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
    const {data} = await axiosClient.post('/logout',{},{
        headers:{
            Authorization:`Bearer ${Cookies.get('ACCESS_TOKEN')}`
        }})
    if(data)
        Cookies.remove('ACCESS_TOKEN')
        Cookies.remove('user')
})

const authSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{},
    extraReducers(builder){
            builder
                    .addCase(signUp.pending,(state)=>{
                        state.status = 'pending';
                    })
                    .addCase(signUp.fulfilled,(state,action)=>{
                            state.user = action.payload.user;
                            state.token = action.payload.token;
                    })
                    .addCase(signUp.rejected,(state,action)=>{
                        state.user = null;
                        state.token = null;
                    })
                    .addCase(signIn.fulfilled,(state,action)=>{
                        state.user = action.payload.user;
                        state.token = action.payload.token;
                    })
                    .addCase(signIn.pending,(state)=>{
                        state.status = 'pending';
                    })
                    .addCase(signOut.pending,(state)=>{
                        state.status = 'pending';
                    })
                    .addCase(signOut.fulfilled,(state,action)=>{
                        state.status = 'idle';
                        state.user = null;
                        state.token = null;                        
                    })
    }
})

const token = (state)=>state.user.token;
const authUser = (state)=>state.user.user;
const status = (state)=>state.user.status;
export {authUser,token,status};
export default authSlice.reducer
