import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../api/axios";
import Cookies from "js-cookie";

const initialState = {
        cart:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')): {
        cartProducts:[],
        total:0,
        amount:0
    },
    status:'idle'
}

export const checkout = createAsyncThunk('cart/checkout',async(payload)=>{
            const response = await axiosClient.post('/checkout',payload,{
                     headers:{
                         'Content-Type':'Application/json',
                         Authorization:`Bearer ${Cookies.get('ACCESS_TOKEN')}`
                     }
                 })
             return response.data;
})

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const product = state.cart.cartProducts.find(cartItem=>cartItem.id == action.payload.id)
            if(product === undefined){
                state.cart = {...state.cart, cartProducts:[...state.cart.cartProducts,{...action.payload,count:1}]}
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }else{
                const cartProducts = state.cart.cartProducts.map(cartItem=> cartItem.id === action.payload.id ? {
                    ...cartItem, count:cartItem.count+1
                }:cartItem)
                state.cart = {...state.cart,cartProducts}
                localStorage.setItem('cart', JSON.stringify({...state.cart,cartProducts}))
            }
        },
         decreaseItemQuantity:(state,action)=>{
           const cartProducts = state.cart.cartProducts.map(cartItem=> cartItem.id === action.payload ? {
                                     ...cartItem, count:cartItem.count-1
                                }:cartItem).filter(cartItem=>cartItem.count !==0)
                   state.cart = {...state.cart,cartProducts}
                   localStorage.setItem('cart', JSON.stringify({...state.cart,cartProducts}))
        },
        removeOneFromCart:(state,action)=>{
            const cartProducts = state.cart.cartProducts.filter(cartItem=> cartItem.id !== action.payload)
            state.cart = {...state.cart,cartProducts}
            localStorage.setItem('cart', JSON.stringify({...state.cart,cartProducts}))
        },
        clearCart:(state)=>{
            state.cart = {amount:0,total:0,cartProducts:[]};
            localStorage.clear();
        },
        getTotal:(state)=>{
           const {amount,total} = state.cart.cartProducts.reduce((cartTotal,cartItem)=>{
                const {price,count} = cartItem
                 cartTotal.amount += count
                 cartTotal.total += (price*count)
                 return cartTotal;
            },{amount:0,total:0})
            state.cart.amount = amount
            state.cart.total = total
            localStorage.setItem('cart', JSON.stringify({...state.cart,amount,total}))  
        }
    },
    extraReducers(builder){
            builder
                .addCase(checkout.fulfilled,(state,action)=>{
                        state.status = 'success';
                })
                .addCase(checkout.pending,(state,action)=>{
                        state.status = 'pending';
                })
    }
})


export const cartProducts = (state)=>state.cart.cart.cartProducts;
export const total = (state)=>state.cart.cart.total;
export const amount = (state)=>state.cart.cart.amount;
export const {addToCart,decreaseItemQuantity,removeOneFromCart,clearCart,getTotal} = cartSlice.actions;
export default cartSlice.reducer;
