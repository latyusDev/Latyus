import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { categoryByName } from "../../../helper";
import { getHomeCategory, homeCategories } from "../../../features/category/categorySlice";
import Brand from "./Brand";
import Loader from "../../Loader";
import { Circles } from "react-loader-spinner";


const Laptop = ()=>{
    const dispatch = useDispatch()
    const homeItems = useSelector(homeCategories)
    const getHomeProducts = async()=>{
        try{
            await dispatch(getHomeCategory()).unwrap()
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getHomeProducts()
    },[])

    const laptopCategory = categoryByName('laptop',homeItems)
  
    return (
        <section className="px-3">  
          
          {
           laptopCategory.length >0&& laptopCategory[0].brands.length>0?
            <Brand phoneCategory={laptopCategory} />
             :<div className="mx-auto mt-[19rem] w-[max-content]">
            <Loader Circles={Circles} styles={{color:"#880000", radius:"8px",
            width:"300px" ,height:"300px"}} />
       </div>
        } 
        </section>
    )
}

export default Laptop;