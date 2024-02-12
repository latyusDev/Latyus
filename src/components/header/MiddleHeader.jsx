import React, { useEffect } from "react";
import { BsCart, BsHeart, BsJustify } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { amount, cartProducts, getTotal, total } from "../../features/cart/cartSlice";
import Logo from "../Logo";



const MiddleHeader = ()=>{
    const cartAmount = useSelector(amount)
    const cartItems = useSelector(cartProducts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTotal())
    },[cartItems])
    return (
        <div className="flex justify-between  items-center py-2 px-6 border-y-[1px] border-[#D7504E]">
            <Logo/>
            <div className="basis-[50%]">
                <form className="flex font-['Lato',sans-serif] ">
                    <input type="text" className=" pl-4 basis-[80%] h-[50px] rounded-l-[3rem] outline-[0]" placeholder="Search the entire store"/>
                    <button type="submit" className="bg-[#880000] text-lg rounded-r-[2rem] basis-[20%]  text-[#fff]">Search</button>
                </form>
            </div>

            <Link to='/cart'>
            <span className="text-5xl text-[#fff] relative">
                <BsCart/>
                <small className="absolute top-[-15px] right-[-6px] bg-[#FF9300] rounded-[50%] px-1.5 py-0 font-['Lato',sans-serif] text-lg text-[#fff]">{cartAmount}</small>
             </span>
            </Link>
        </div>
    )
}

export default MiddleHeader;