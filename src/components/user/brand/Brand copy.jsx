import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getHomeCategory, homeCategories } from "../../../features/category/categorySlice";
import Slider from "react-slick";
import EmptyItem from "../../category/EmptyItem";
import BrandButtons from "./BrandButtons";
import BrandCard from "./BrandCard";


const Brand = ({phoneCategory})=>{
    const [brand,setBrand] = useState(0)
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

 
    return (
        <section className="px-3">  

          
          {
                <div>
                    <div className="flex justify-between mt-7">
                            <h3 className="text-3xl capitalize">{phoneCategory[0].name}</h3>
                            <BrandButtons phoneBrand={phoneCategory[0].brands}
                                 setBrand={setBrand} brand={brand}/>
                            
                    </div>
                    {        
                        phoneCategory[0].brands[brand].products.length > 0 ? 
                        <BrandCard
                        products={phoneCategory[0].brands[brand].products}/>:
                        <EmptyItem message="No Product for this brand"/>
                     }
            </div>
         }
        </section>
    )
}

export default Brand;