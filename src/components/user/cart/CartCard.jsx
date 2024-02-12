import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeOneFromCart } from "../../../features/cart/cartSlice";
import { LuPlus } from "react-icons/lu";
import { HiOutlineMinusSm } from "react-icons/hi";

const CartCard = ({cartItem})=>{
    const dispatch = useDispatch()
    const {image,price,count,name} = cartItem
    return(
        <div key={cartItem.id} 
           className="flex items-center rounded-b-lg bg-white font-['Lato',sans-serif] capitalize 
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
           <div className="flex items-center text-[4xl] gap-4 h-[max-content] ">
            <LuPlus onClick={()=>
                dispatch(addToCart(cartItem))

            } />
           <p >{count}</p>

           <HiOutlineMinusSm onClick={()=>dispatch(removeOneFromCart(cartItem.id))}  />

           </div>
           <p>{price}</p>
           <div className=" flex flex-col items-end ">
            <button className=" block mt-3 capitalize" onClick={()=>dispatch(removeFromCart(cartItem.id))}    >remove</button>
            <button className="mt-5 capitalize">save for later</button>
           </div>
           </div>
    )
}

export default CartCard;