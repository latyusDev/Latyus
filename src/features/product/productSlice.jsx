import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import axiosClient from "../../api/axios";

const initialState = {
    products:[],
    singleProduct:{},
    searchResults:[],
    randomProducts:[],
    newProducts:[],
    filteredProducts:[],
    status:'idle'
}

export const createProduct = createAsyncThunk('create', async(payload)=>{
         try{
             const {data} =  await axiosClient.post('/products',payload)
             return data;
         }catch(e){
            console.log(e)
         }
})

export const getProducts = createAsyncThunk('getProduct', async()=>{
        try{
            const {data} =  await axiosClient.get('/products')
               return data;
        }catch(e){
           console.log(e)
        }
       
})
export const getSingleProduct = createAsyncThunk('getSingleProduct', async(payload)=>{
        try{
            const {data} =  await axiosClient.get('/products/'+payload)
               return data;
        }catch(e){
           console.log(e)
        }
       
})
    
    
export const getRandomProducts = createAsyncThunk('getRandomProducts', async()=>{
    try{
           const {data} =  await axiosClient.get('/products/random')
           return data;  
        }catch(e){
       console.log(e)
    } 
})


export const getNewProducts = createAsyncThunk('newProducts', async()=>{
    try{
           const {data} =  await axiosClient.get('/categoryLatestProducts')
              return data;   
    }catch(e){
       console.log(e)
    }
})


const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        filterProduct:(state,action)=>{
            console.log(state.products)

            const filteredProducts = state.products.filter(filteredProduct=>{
                return filteredProduct
                                    .name
                                    .toLowerCase()
                                    .startsWith(action.payload.trim().toLowerCase())
                                 
            })
            state.filteredProducts = filteredProducts
        },
        // getSingleProduct:(state,action)=>{
        //     const singleProduct = state.products
        // }
    },
    extraReducers(builder){
        
        builder
            .addCase(createProduct.fulfilled, (state,action)=>{
                state.products = action.payload
            })
            .addCase(getProducts.fulfilled, (state,action)=>{
                state.products = action.payload
                state.status = 'success'

            })
            .addCase(getProducts.pending, (state)=>{
                state.status = 'pending'
            })
            .addCase(getSingleProduct.fulfilled, (state,action)=>{
                state.singleProduct = action.payload
                state.status = 'success'
            })
            .addCase(getSingleProduct.pending, (state)=>{
                state.status = 'pending'
            })
            .addCase(getRandomProducts.fulfilled, (state,action)=>{
                state.randomProducts = action.payload
                state.status = 'success'
            })
            .addCase(getRandomProducts.pending, (state)=>{
                state.status = 'pending'
            })
            .addCase(getNewProducts.fulfilled, (state,action)=>{
                state.newProducts = action.payload
                // state.status = 'success'
            })
            .addCase(getNewProducts.pending, (state)=>{
                state.status = 'pending'
            })
    }
})

export const allProducts = (state)=>state.products.products
export const filteredProducts = (state)=>state.products.filteredProducts
export const latestProducts = (state)=>state.products.newProducts
export const {filterProduct} = productSlice.actions
export const randomProducts = (state)=>state.products.randomProducts;
export default productSlice.reducer;