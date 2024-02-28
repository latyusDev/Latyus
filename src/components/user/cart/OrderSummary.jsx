import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { cartProducts, checkout, total } from "../../../features/cart/cartSlice";

const OrderSummary = ()=>{

    const dispatch = useDispatch();
    const totalPrice = useSelector(total);
    const cartItems = useSelector(cartProducts);

    const checkoutCart = async()=>{
        try{
            await dispatch(checkout(cartItems)).unwrap(); 
        }catch(e){
            console.log(e);
        }
        console.log(cartItems)
    }

    return (
        <div className="basis-[27%] font-['Lato',sans-serif] font-[600]">
            <div className="bg-white  pb-2  border-b-[1px] border-[#ccc] rounded-b-lg">
                <h1 className="text-xl text-white  font-[600] px-4 py-2.5 capitalize mb-8 bg-[#880000]">order summary</h1>
               <div className="px-4 ">
               <div className="flex justify-between mb-5 ">
                    <p>Sub total</p>
                    <p className="font-[200]">₦0</p>
                </div>
                <div className="flex justify-between  mb-5 ">
                    <p>Shipping fee</p>
                    <p className="font-[200]">₦0</p>
                </div>
                <div className="flex justify-between mb-5">
                    <p>Total</p>
                    <p className="font-[200]">₦{totalPrice}</p>
                </div>
               </div>
                </div>
            <button onClick={checkoutCart} className="mt-2 bg-[#880000] rounded-b-lg py-3 text-lg font-[600] w-full text-white">Checkout</button>

            </div>
    )
}

export default OrderSummary