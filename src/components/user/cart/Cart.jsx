import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LuPlus } from "react-icons/lu";
import { HiOutlineMinusSm } from "react-icons/hi";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { 
    addToCart, cartProducts,total,
    clearCart, getTotal,
    removeFromCart,removeOneFromCart
 } from "../../../features/cart/cartSlice";


const Cart = ()=>{


    const dispatch = useDispatch()
    const cartItems = useSelector(cartProducts)
    const totalPrice = useSelector(total)
    console.log(totalPrice)
    if(cartItems.length == 0){
        return <h1>Empty Cart</h1>
    }
    return (
        <section className=" font-['Lato',sans-serif] mb-5 ">

            <h1 className="mt-12 mb- pl-6 text-6xl  text-[#BB0000]  font-['Rubik_Doodle_Triangles',system-ui] text-center">
                Shopping cart</h1>

           <div className=" bg-[#F2Fj2F2] px-6 py-4">
        <div className="flex items-end justify-between mt-[4rem]">
        <div className="  w-[80%] max-w-[900px]   rounded-b-lg">
            <div className="flex justify-between bg-[#E6E6E6] py-2 px-5 ">
                <h3 className="basis-[20%] text-lg font-[600] text-[#880000]">items detail</h3>
                <div className="flex justify-between basis-[49%]">
                <h3 className="text-lg font-[600] text-[#880000]">quantity</h3>
                <h3 className="text-lg font-[600] text-[#880000] indent-[-22px]">item price</h3>
                <h3 className="text-lg font-[600] text-[#880000]">actions</h3>
                </div>
            </div>
{
cartItems.map((cartItem)=>{
    const {image,price,count,name} = cartItem
    return (
           <div key={cartItem.id} 
           className="flex items-center rounded-b-lg bg-white 
           justify-between px-5 py-3 border-b-[1px] border-[#ccc]">
           <div className="flex items-center gap-6  basis-[40%] ">
            <img src={image} alt="" className="w-[100px] h-[100px]" />
            <div className="mt-3">
            <h4>{name}</h4>
            <div className="flex gap-7 w-[100%]  ">
            <p className="mt-6">total price</p>
            <p className="mt-6">{price * count}</p>
            </div>
            </div>
        </div>
           <div className="flex items-center text-[4xl] gap-4 h-[max-content]">
            <LuPlus onClick={()=>
                dispatch(addToCart(cartItem))

            } />
           <p >{count}</p>

           <HiOutlineMinusSm onClick={()=>dispatch(removeOneFromCart(cartItem.id))}  />

           </div>
           <p>{price}</p>
           <div className=" flex flex-col items-end ">
            <button className=" block mt-3"onClick={()=>dispatch(removeFromCart(cartItem.id))}    >remove</button>
            <button className="mt-5">save for later</button>
           </div>
           </div>
    )
})
}
        <button 
            className="mt-2 bg-[#880000] rounded-b-lg py-3 w-full text-white text-lg"
            onClick={()=>dispatch(clearCart())}
        >Clear Cart</button>

    </div>
            <div className="basis-[27%] ">
            <div className="bg-white  pb-2  border-b-[1px] border-[#ccc] rounded-b-lg">
                <h1 className="text-xl text-[#880000] font-[600] px-4 py-2.5 capitalize mb-8 bg-[#E6E6E6]">order summary</h1>
               <div className="px-4 ">
               <div className="flex justify-between mb-5">
                    <p>Sub total</p>
                    <p>0</p>
                </div>
                <div className="flex justify-between  mb-5 ">
                    <p>Shipping fee</p>
                    <p>0</p>
                </div>
                <div className="flex justify-between mb-5">
                    <p>Total</p>
                    <p>₦{totalPrice}</p>
                </div>
               </div>
                </div>
            <button className="mt-2 bg-[#880000] rounded-b-lg py-3 text-lg w-full text-white">Checkout</button>

            </div>
        </div>
           </div>
        </section>
    )
} 

export default Cart;