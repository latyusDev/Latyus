import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  cartProducts,clearCart} from "../../../features/cart/cartSlice";
import EmptyCart from "./EmptyCart";
import Heading from "../../heading";
import CartCard from "./CartCard";
import CartHeader from "./CartHeader";
import OrderSummary from "./OrderSummary";


const Cart = ()=>{

    const dispatch = useDispatch()
    const cartItems = useSelector(cartProducts)

    if(cartItems.length == 0){
        return <EmptyCart/>
    }
    return (
        <section className=" font-['Lato',sans-serif] mb-36 ">
            <Heading text="Shopping cart" 
            styles="mt-24 mb- pl-6 text-6xl  text-[#BB0000]  
            font-['Rubik_Doodle_Triangles',system-ui] text-center"/>
    
           <div className=" bg-[#F2Fj2F2] px-6 py-4">
        <div className="flex items-end justify-between mt-[4rem]">
        <div className="  w-[80%] max-w-[900px]   rounded-b-lg">
            <CartHeader/>
            {
            cartItems.map((cartItem)=>{
                return (
                       <CartCard cartItem={cartItem} key={cartItem.id}/>
                )
            })
            }
        <button 
            className="transition-all border-[2px] border-[#880000] duration-1000 mt-2 bg-[#880000] font-[600] rounded-b-lg py-3 w-full text-white text-lg
            hover:bg-white hover:text-[#880000] hover:border-[2px] hover:border-[#880000]"
            onClick={()=>dispatch(clearCart())}
        >Clear Cart</button>

    </div>
            <OrderSummary/>
        </div>
           </div>
        </section>
    )
} 

export default Cart;