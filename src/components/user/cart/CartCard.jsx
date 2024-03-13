import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseItemQuantity, removeOneFromCart } from "../../../features/cart/cartSlice";
import { LuPlus } from "react-icons/lu";
import { HiOutlineMinusSm } from "react-icons/hi";

const CartCard = ({cartItem})=>{
    const dispatch = useDispatch()
    const {image,price,count,name} = cartItem;
    return(
        <div key={cartItem.id} 
           className="flex flex-col md:flex-row items-center  rounded-b-lg bg-white font-['Lato',sans-serif] font-[600] capitalize 
           justify-between px-5 py-5 border-b-[2px] border-[#BB0000] ">
           <div className="flex  justify-between items-center gap-6 w-full md:auto md:basis-[40%] ">
            <img src={image} alt="" className="w-[100px] h-[100px]" />
            <div className="w-[57%]">
                <div className="flex justify-between items-center">
                <h4 className="text-sm self-center md:text-[1rem] md:mt-2">{name.length<=15 ? name:`${name.substring(0,15)}...`}</h4>
           <p className=" text-sm md:text-[1rem] font-[400] md:hidden">₦{price}</p>
                </div>

            <div className="flex items-center justify-between md:justify-start mt-10 md:gap-7 w-[100%]  ">
            <p className="text-sm md:text-[1rem]">total price:</p>
            <p className=" font-[400] text-sm md:text-[1rem]">₦{price * count}</p>
            </div>
            </div>
        </div>
          <div className="w-full md:w-auto md:flex-[0.82] flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="w-full md:w-auto my-2 md:my-0  flex justify-between md:justify-start items-center text-[4xl] gap-4 h-[max-content]  ">
            <LuPlus className="text-green-500 cursor-pointer" 
            onClick={()=> dispatch(addToCart(cartItem))} />
           <p className="font-[400]">{count}</p>
           <HiOutlineMinusSm className="cursor-pointer text-[#880000]" onClick={()=>dispatch(decreaseItemQuantity(cartItem.id))}  />

           </div>
           <p className="  md:indent-[2%] hidden md:block font-[400]">₦{price}</p>
           <div className=" w-full md:w-auto flex justify-between  md:flex-col md:items-end ">
            <button className=" block  capitalize  text-[#880000]" onClick={()=>dispatch(removeOneFromCart(cartItem.id))}    >remove</button>
            <button className="md:mt-10 capitalize text-[#FF9300]">save for later</button>
           </div>
          </div>
           </div>
    )
}

export default CartCard;