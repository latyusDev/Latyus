import React from "react"
import { useDispatch } from "react-redux"
import Slider from "react-slick/lib/slider"
import { settings } from "../../../static/staticCarouselSetting"
import "./slick.css"; 
import "./slick-theme.css";
import { addToCart } from "../../../features/cart/cartSlice";


const BrandCard = ({products,brand})=>{
    const dispatch = useDispatch()
    
    return(
                <Slider {...settings}>
            {products.slice(0,15).map(product=>{
               return (
                   <div  className="carousel rounded-sm mt-5 p-4 font-['Lato',sans-serif] border-[1px] border-[#E2E2E2] 
                   text-center basis-[17%]" key={product.id}>
                       <img src={product.image} alt="" className="px-2 w-full h-[200px]" />
                       <h4 className="mt-5 text-lg font-[700]">{product.name}</h4>
                       <p>₦{product.price}</p>
                       <button onClick={
                           ()=>{
                               dispatch(addToCart(product))
                           }
                       } className="bg-[#880000] rounded-sm  mt-2 text-white w-full py-2">Add to cart</button>
                   </div>
               )
        })}

            </Slider>
    )
}

export default BrandCard