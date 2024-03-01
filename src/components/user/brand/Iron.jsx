import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";
import Brand from './Brand'
import { categoryByName } from "../../../helper";
import Loader from '../../Loader'
import { getHomeCategory, homeCategories } from "../../../features/category/categorySlice";
const Iron = ()=>{
    const dispatch = useDispatch()
    const homeItems = useSelector(homeCategories)
    const getHomeProducts = async()=>{
        try{
            await dispatch(getHomeCategory()).unwrap();
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getHomeProducts()
    },[])

    const category = categoryByName('iron',homeItems)
   
    return (
        <section className="px-3"> 
      
        {
           category.length >0?
            <Brand category={category} />
             :<div className="mx-auto mt-[19rem] w-[max-content]">
            <Loader Circles={Circles} styles={{color:"#880000", radius:"8px",
            width:"300px" ,height:"300px"}} />
       </div>
        } 
          
        </section>
    )
}

export default Iron;