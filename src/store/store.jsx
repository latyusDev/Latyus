import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import categoryReducer from "../features/category/categorySlice";
import userReducer from "../features/user/authSlice";
import brandReducer from "../features/brand/brandSlice";
import productReducer from "../features/product/productSlice";

export const store = configureStore({
    reducer:{
        categories:categoryReducer,
        cart:cartReducer,
        // posts:PostsReducer,
        user:userReducer,
        products:productReducer,
        brands:brandReducer,
    }
});