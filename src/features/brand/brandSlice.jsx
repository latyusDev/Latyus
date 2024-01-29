import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axiosClient from "../../api/axios";

const initialState = {
    brands:[]
}

export const createBrand = createAsyncThunk('createBrand', async(payload)=>{
         const {data} =  await axiosClient.post('/brands',payload,{
                headers:{
                    Authorization:`Bearer ${Cookies.get('ACCESS_TOKEN')}`
                }
            })
       return data;
            
})

export const getBrand = createAsyncThunk('getBrand', async()=>{
    const {data} =  await axiosClient.get('/brands')

       return data;
       
})

const brandSlice = createSlice({
    name:'brands',
    initialState,
    reducers:{},
    extraReducers(builder){
        
        builder
            .addCase(createBrand.fulfilled, (state,action)=>{
                console.log(action)
                state.brands = action.payload.brand
            })

            .addCase(getBrand.fulfilled, (state,action)=>{
            
                state.brands = action.payload
                // console.log(action)

            })
    }
})

export const allBrands = (state)=>state.brands.brands
export default brandSlice.reducer;