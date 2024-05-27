import React from "react";
import AddToCart from "../AddToCart";
import { Link } from "react-router-dom";


const CategoryCard = ({product})=>{

    return(
        <div className="rounded-sm  md:mt-5 p-2.5 md:p-4 font-['Lato',sans-serif] border-[1px] border-[#E2E2E2] 
        text-center basis-[46%]  md:basis-[17.47%] hover:cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-[0px]">
                <Link to={`/product/${product.id}`}>
                 
                   <img src={product.image} alt="" className="px-2 w-full h-[160px] md:h-[200px]" />
                   <h4 className="mt-5 text-lg font-[700]">{product.name.length<=15 ? product.name:`${product.name.substring(0,15)}...`}</h4>
                   <p>₦{product.price}</p>
                </Link>
                   <AddToCart product={product} styles={"bg-[#880000] rounded-sm  mt-2  text-sm md:text-lg text-white w-full  py-1.5 md:py-2 transition-all font-[600]  border-[2px] border-[#880000] hover:bg-white hover:text-[#880000] hover:border-[2px] hover:border-[#880000]"}/>

               </div>
    
    )
}

export default CategoryCard