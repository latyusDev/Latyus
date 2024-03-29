import React, { useEffect, useState } from "react";
import { allProducts, getProducts, getSingleProduct } from "../../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import AddToCart from "./AddToCart";
import Loader from "../Loader";
import { Circles } from "react-loader-spinner";


const SingleProduct = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const {status,singleProduct} = useSelector((state)=>state.products);
    const [readMore,setReadMore] = useState(false)

    const getProductItems = async()=>{
        try{
            await dispatch(getSingleProduct(id)).unwrap();
        }catch(e){
            console.log(e)
        }
    }
    
    useEffect(()=>{
        getProductItems();
    },[id])

    if(status === 'pending'){
        return (
            <div className="my-[5rem] mx-auto w-[max-content]">
                <Loader Circles={Circles} styles={{color:"#880000", radius:"8px",
        width:"300px" ,height:"300px"}} />
            </div>
        )
    }
    const des = `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis consequatur nobis adipisci eius tempore obcaecati qui dicta amet corrupti soluta, veniam sit laudantium iste expedita minus laboriosam praesentium dolorum minima.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis consequatur nobis adipisci eius tempore obcaecati qui dicta amet corrupti soluta, veniam sit laudantium iste expedita minus laboriosam praesentium dolorum minima.
    `
    return (
    <section className="min-h-[500px] md:min-h-[670px] font-['Lato',sans-serif] px-3 pb-5 md:pb-0 ">
        <button className=" text-[#880000] md:ml-9 text-left mt-8 md:mt-14 mb-4 md:mb-0 font-[600] text-2xl capitalize"><Link to="/">continue shopping</Link></button>
        <div className="flex flex-col md:flex-row gap-9 justify-center items-center  text-center md:text-left my-8 md:my-16 ">
       <div className="h-[300px] h-[350px]">
        <img src={singleProduct.image} alt="" className="w-full h-full" />
       </div>
       <div className="basis-[40%]"> 
        <h2 className="md:my-2 font-[600] capitalize">{ singleProduct.name}</h2>
        <p>
            {readMore?des:des.slice(242)} 
        { readMore?
        <span onClick={()=>setReadMore(!readMore)} className="cursor-pointer font-[600] text-[#880000]  transition-all duration-1000 
        capitalize hover:text-[#FF9300]">read less</span>
        :
        <span onClick={()=>setReadMore(!readMore)} className="cursor-pointer font-[600] text-[#880000]  transition-all duration-1000 capitalize  hover:text-[#FF9300]">read more</span>} </p>
       <p className="my-2 md:my-3 font-[600]">₦{singleProduct.price}
       </p>
        <AddToCart product={singleProduct} styles="font-[600] rounded-md mr-3  md:mt-2 border-[2px] border-[#880000]
         text-[#880000] px-6 py-2  transition-all duration-1000 hover:text-white hover:bg-[#880000]"/>
          <button className=" capitalize  md:mt-2 px-6 py-2 font-[600] rounded-md border-[2px] border-[#FF9300] text-[#FF9300]
                               transition-all duration-1000   hover:text-white  hover:bg-[#FF9300]">Wish List</button>
       </div>
    </div>
    </section>
    )
}

export default SingleProduct;