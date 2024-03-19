import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axiosClient from '../../api/axios'
const user = Cookies.get('user');
const ACCESS_TOKEN = Cookies.get('ACCESS_TOKEN');

const initialState = {
    user:user?JSON.parse(user):null,
    token:ACCESS_TOKEN?ACCESS_TOKEN:null,
    errors:{},
    status:'idle',
}

export const signUp = createAsyncThunk('register',async(payload,thunkAPI)=>{
    try{
            const {data} = await axiosClient.post('/register',payload)
            Cookies.set('ACCESS_TOKEN',data.token)
            Cookies.set('user',JSON.stringify(data.user))
        return data;
       }catch(e){
            return thunkAPI.rejectWithValue(e.response.data.errors)
       }
       
})

export const signIn = createAsyncThunk('login',async(payload,thunkAPI)=>{
    try{
        const {data} = await axiosClient.post('/login',payload)
        Cookies.set('ACCESS_TOKEN',data.token)
        Cookies.set('user',JSON.stringify(data.user))
      return data;
    }catch(e){
        if(e.response.status === 422){
            return thunkAPI.rejectWithValue(e.response.data.errors)
        }else{
            return thunkAPI.rejectWithValue(e.response.data)
        }
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
    reducers:{
        reset:(state)=>{
            state.errors = {},
            state.status = 'idle'
        }
    },
    extraReducers(builder){
            builder
                    .addCase(signUp.pending,(state)=>{
                        state.status = 'pending';
                    })
                    .addCase(signUp.fulfilled,(state,action)=>{
                            state.status = 'success';
                            state.user = action.payload.user;
                            state.token = action.payload.token;
                    })
                    .addCase(signUp.rejected,(state,action)=>{
                        state.status = 'rejected';
                        state.errors = action.payload
                        state.user = null;
                        state.token = null;
                    })
                    .addCase(signIn.fulfilled,(state,action)=>{
                        state.status = 'success';
                        state.user = action.payload.user;
                        state.token = action.payload.token;
                    })
                    .addCase(signIn.pending,(state)=>{
                        state.status = 'pending';
                    })
                    .addCase(signIn.rejected,(state,action)=>{
                        state.status = 'rejected';
                        state.errors = action.payload
                        state.user = null;
                        state.token = null;
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
export {authUser,token};
export const {reset} = authSlice.actions
export default authSlice.reducer
