import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { categoryByName } from "../../../helper";
import { getHomeCategory, homeCategories } from "../../../features/category/categorySlice";
import Brand from "./Brand";
import Loader from "../../Loader";
import { Circles } from "react-loader-spinner";


const Television = ()=>{
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

    const category = categoryByName('televisions',homeItems)
    return (
        <section className="px-3">  
          {
           category.length >0&& category[0].brands.length>0?
            <Brand category={category} />
             :<div className="mx-auto mt-[19rem] w-[max-content]">
            <Loader Circles={Circles} styles={{color:"#880000", radius:"8px",
            width:"300px" ,height:"300px"}} />
       </div>
        } 
        </section>
    )
}

export default Television;