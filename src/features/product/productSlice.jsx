import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import axiosClient from "../../api/axios";

const initialState = {
    products:[],
    randomProducts:[],
    newProducts:[],
    isLoading:false
}

export const createProduct = createAsyncThunk('create', async(payload)=>{
         try{
             const {data} =  await axiosClient.post('/products',payload)
             return data;
         }catch(e){
            console.log(e)
         }
})

export const getProduct = createAsyncThunk('getProduct', async()=>{
    const {data} =  await axiosClient.get('/products')
       return data;
       
})


export const getRandomProducts = createAsyncThunk('getRandomProducts', async()=>{
    const {data} =  await axiosClient.get('/products/random')
       return data;
       
})

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers(builder){
        
        builder
            .addCase(createProduct.fulfilled, (state,action)=>{
                // console.log(action)
                state.products = action.payload
            })
            .addCase(getProduct.fulfilled, (state,action)=>{
                state.products = action.payload
            })
            .addCase(getRandomProducts.fulfilled, (state,action)=>{
                state.randomProducts = action.payload
            })
            .addCase(getRandomProducts.pending, (state,action)=>{
                state.randomProducts = [];
                state.isLoading = true
            })
            
    }
})

export const allProducts = (state)=>state.products.products
export const randomProducts = (state)=>state.products.randomProducts;
export default productSlice.reducer;