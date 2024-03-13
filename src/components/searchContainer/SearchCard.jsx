import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { filteredProducts } from "../../features/product/productSlice"
import Loader from "../Loader"
import { Circles } from "react-loader-spinner"
import { addToCart } from "../../features/cart/cartSlice"
import AddToCart from "../user/AddToCart"
import EmptyItem from "../user/EmptyItem"
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"
import { setOpenModal, setValue } from "../../features/appState/appStateSlice"

const SearchCard = ()=>{
    const products = useSelector(filteredProducts)
    const dispatch = useDispatch()
    const {status} = useSelector((state)=>state.products)
    
    const handleModal = ()=>{
        dispatch(setValue(''))
        dispatch(setOpenModal(false))
    }
    
    if(status == 'pending'){
        return   (
            <div className="mt-[5rem] mx-auto w-[max-content]">
                <Loader Circles={Circles} styles={{color:"white", radius:"8px",
        width:"300px" ,height:"300px"}} />
            </div>
        )
    }

    if(products.length === 0){
        return  <EmptyItem message="no results found" styles={"w-[max-content] capitalize mx-auto mt-10 text-white font-['Lato',sans-serif] font-[600]"}/>
    }

    return(
            <div className="py-9 px-4  ">
            {
              products.map(product=>{
                    const {image,price,name,description,id} = product
                    return (
                        <div  key={id} className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left  gap-5  mx-auto  mb-5 font-['Lato',sans-serif]  ">
                           
                           <div className=" basis-[40%] h-[150px]">
                           <img src={image} alt={name} className="w-full h-full" />
                            </div> 
                            <div>
                                    <div  className="flex justify-between items-center mb-1  animate-1s">
                                        <h1 className="text-white font-['Lato',sans-serif] font-[600]  capitalize ">
                                            {name.length<=15 ? name:`${name.substring(0,15)}...`}</h1>
                                        <h2 className="text-white font-['Lato',sans-serif] font-[600]  capitalize ">₦{price}</h2>
                                    </div>
                                {/* <p>{description} <span className="transition-all duration-1000 capitalize text-[#FF9300] hover:text-white"><Link to={`product/${id}`} onClick={handleModal} >learn more</Link></span></p> */}
                                <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 atque temporibus sed? . <span className="transition-all duration-1000 capitalize text-[#FF9300] hover:text-white"><Link to={`product/${id}`} onClick={handleModal} >learn more</Link></span></p>
                                 <AddToCart product={product} styles={"transition-all duration-1000 bg-[#88000l0] w-full md:w-auto rounded-sm mr-3  mt-2 border-[1px] border-white text-white px-6 py-2 hover:text-[#FF9300]  hover:border-[#FF9300]"}/>
                                 
                                 <button className="transition-all duration-1000 capitalize mt-4 px-6 py-2 w-full md:w-auto  rounded-sm border-[1px] border-[#FF9300] text-[#FF9300]
                                 hover:text-white  hover:border-white">Wish List</button>
                            </div>
                        </div>
                    )
                })
            }
            
            </div>
            
    )
}

export default SearchCard;