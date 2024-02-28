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
           className="flex items-center  rounded-b-lg bg-white font-['Lato',sans-serif] font-[600] capitalize 
           justify-between px-5 py-5 border-b-[2px] border-[#BB0000]">
           <div className="flex items-center gap-6  basis-[40%] ">
            <img src={image} alt="" className="w-[100px] h-[100px]" />
            <div className="">
            <h4 className="mt-2">{name.length<=15 ? name:`${name.substring(0,15)}...`}</h4>
            <div className="flex mt-10 gap-7 w-[100%]  ">
            <p className="">total price:</p>
            <p className=" font-[400]">₦{price * count}</p>
            </div>
            </div>
        </div>
          <div className="flex-[0.82]  flex justify-between items-start">
          <div className=" flex items-center text-[4xl] gap-4 h-[max-content]  ">
            <LuPlus className="text-green-500 cursor-pointer" onClick={()=>
                dispatch(addToCart(cartItem))

            } />
           <p className="font-[400]">{count}</p>

           <HiOutlineMinusSm className="cursor-pointer text-[#880000]" onClick={()=>dispatch(decreaseItemQuantity(cartItem.id))}  />

           </div>
           <p className="  indent-[15%] font-[400]">₦{price}</p>
           <div className=" flex flex-col items-end ">
            <button className=" block  capitalize text-[#880000]" onClick={()=>dispatch(removeOneFromCart(cartItem.id))}    >remove</button>
            <button className="mt-10 capitalize text-[#FF9300]">save for later</button>
           </div>
          </div>
           </div>
    )
}

export default CartCard;