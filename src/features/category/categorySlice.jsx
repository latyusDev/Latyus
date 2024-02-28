import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import axiosClient from '../../api/axios'
import Cookies from "js-cookie";
const initialState = {
    category:[],
    homeCategory:[],
    status:'idle',
    errors:[]
}

export const createCategory = createAsyncThunk('create', async(payload)=>{
    const {data} =  await axiosClient.post('/category',payload,{
           headers:{
               Authorization:`Bearer ${Cookies.get('ACCESS_TOKEN')}`
           }
       })
    return data;   
})

export const getCategory = createAsyncThunk('getCategory', async()=>{
    const {data} =  await axiosClient.get('/category')
       return data;
})

export const getHomeCategory = createAsyncThunk('getHomeCategory', async()=>{
    const {data} =  await axiosClient.get('/home')
       return data;
})

const categorySlice = createSlice({
    name:'categories',
    initialState,
    reducers:{},
    extraReducers(builder){
        
        builder
            .addCase(createCategory.fulfilled, (state,action)=>{
                state.category = action.payload.category
            })
            .addCase(getCategory.fulfilled, (state,action)=>{
                state.category = action.payload
                state.status = 'success'
            })
            .addCase(getCategory.pending,(state,action)=>{
                state.status = ' pending';
            })
            .addCase(getHomeCategory.fulfilled, (state,action)=>{
                state.homeCategory = action.payload
                state.status = 'success'
            })
            .addCase(getHomeCategory.pending,(state,action)=>{
                state.status = 'pending'
            })
    }
})

export const allCategories = (state)=>state.categories.category;
export const homeCategories = (state)=>state.categories.homeCategory;
export const phones = (state)=>state.categories.homeCategory
export const status = (state)=>state.categories.status
export default categorySlice.reducer;