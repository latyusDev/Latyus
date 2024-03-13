import React from "react"
import { useDispatch } from "react-redux"
import Slider from "react-slick/lib/slider"
import { settings } from "../../../static/staticCarouselSetting"
import "./slick.css"; 
import "./slick-theme.css";
import { addToCart } from "../../../features/cart/cartSlice";
import AddToCart from "../AddToCart";
import { Link } from "react-router-dom";


const BrandCard = ({category,brand})=>{
    const products = category.brands.filter(brand=>brand.products.length>0)[brand].products
    return(
            <Slider {...settings}>
            
                {products.slice(0,15).map(product=>{
                return (
                    <div  className=" rounded-sm mt-5 p-2.5 md:p-4 font-['Lato',sans-serif] border-[1px] border-[#E2E2E2] 
                    text-center basis-[17%] hover:cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-[0px]" key={product.id}>
                       <Link to={`product/${product.id}`}>
                       <img src={product.image} alt="" className=" w-full  h-[160px] md:h-[200px]" />
                      <h4 className="mt-5 text-lg font-[700]">{product.name.length<=15 ? product.name:`${product.name.substring(0,15)}...`}</h4>
                       <p>₦{product.price}</p>
                    </Link>
                      <AddToCart product={product} styles={"transition-all text-sm md:text-lg font-[600] bg-[#880000] rounded-sm  mt-2 text-white w-full py-1.5 md:py-2  border-[2px] border-[#880000] hover:bg-white hover:text-[#880000] hover:border-[2px] hover:border-[#880000]"}/>
                   </div>
                   
                )
                    })}
            </Slider>
    )
}

export default BrandCard