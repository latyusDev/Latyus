import { Link } from "react-router-dom";
import Heading from "../../heading"
import EmptyItem from "../EmptyItem"


const EmptyCart = ()=>{
    return (
        <div className="mb-36">
            <Heading text="Shopping Cart" styles="mt-[9rem] mb- pl-6 text-6xl 
             text-[#BB0000]  font-['Rubik_Doodle_Triangles',system-ui] text-center" />
            <EmptyItem message="Your cart is currently empty"
            styles=" text-xl text-center font-['Lato',sans-serif] mt-7 "
            />
            <p className=" font-['Lato',sans-serif] mt-2 text-lg text-center">Click <Link to="/" className="text-[#BB0000] ">here</Link > to continue shopping.</p>
        </div>
    )
}

export default EmptyCart;