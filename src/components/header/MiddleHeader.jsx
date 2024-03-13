import React, { useEffect, useState } from "react";
import { BsCart, BsHeart, BsJustify } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { amount, cartProducts, getTotal, total } from "../../features/cart/cartSlice";
import Logo from "../Logo";
import SearchInput from "../searchContainer/SearchInput";



const MiddleHeader = ({isOpen})=>{
    const cartAmount = useSelector(amount)
    const cartItems = useSelector(cartProducts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTotal())
    },[cartItems])
    return (
        <div className="flex justify-between  items-center border-t-[1px]  md:py-2 px-3 md:px-6 border-[#D7504E] md:border-y-[1px] ">
            <Logo/>
            <div className="hidden md:block basis-[50%]">
            <SearchInput/>
            </div>
            <Link to='/cart'>
            <span className="text-5xl text-[#fff] relative">
                <BsCart className="transition-all hover:text-[#FF9300]"/>
                <small className="absolute top-[-15px] right-[-6px] bg-[#FF9300] rounded-[50%] px-1.5 py-0 font-['Lato',sans-serif] text-lg text-[#fff]">{cartAmount}</small>
             </span>
            </Link>
        </div>
    )
}

export default MiddleHeader;