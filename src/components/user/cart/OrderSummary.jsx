import React from "react"
import { useSelector } from "react-redux";
import { total } from "../../../features/cart/cartSlice";

const OrderSummary = ()=>{

    const totalPrice = useSelector(total)

    return (
        <div className="basis-[27%] ">
            <div className="bg-white  pb-2  border-b-[1px] border-[#ccc] rounded-b-lg">
                <h1 className="text-xl text-white  font-[600] px-4 py-2.5 capitalize mb-8 bg-[#880000]">order summary</h1>
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
            <button className="mt-2 bg-[#880000] rounded-b-lg py-3 text-lg font-[600] w-full text-white">Checkout</button>

            </div>
    )
}

export default OrderSummary