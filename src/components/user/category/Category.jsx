import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import Loader from "../../Loader";
import BrandButton from "./BrandButtons";
import CategoryCard from "./CategoryCard";
import EmptyItem from "../EmptyItem";
import { allCategories, getCategory } from "../../../features/category/categorySlice";

const Category = ()=>{
    const categories = useSelector(allCategories)

    const [brand, setBrand] = useState(0)
    const dispatch = useDispatch()
    const {name} = useParams();

    const fetchCategory = async()=>{
    try{
            dispatch(getCategory()).unwrap();
       }catch(e){
            console.log(e)
       }
    }

    useEffect(()=>{
        fetchCategory();
    },[])


    if(categories.length === 0){
        return (
            <div className="mx-auto mt-[19rem] w-[max-content]">
            <Loader Circles={Circles} styles={{color:"#880000", radius:"8px",
             width:"300px" ,height:"300px"}} />
            </div>  
        )
    }

    const singleCategory =  categories.filter(category=>category.name == name)
    if(singleCategory.length === 0){
        return (
            <EmptyItem message="Category does not exist"/>
        )
    }
    
    return (
        <section className="px-6 mb-36">  
            <h1 className="text-center text-[4rem] capitalize text-[#BB0000] 
             mt-8 font-['Rubik_Doodle_Triangles',system-ui]">{name}</h1>
            <div className="flex justify-between mt-7">
                <h3 className="text-3xl">Select a brand</h3>
                <BrandButton  singleCategory={singleCategory} setBrand={setBrand} brand={brand}/>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-[3rem]">
           {
           singleCategory[0].brands[brand].products.length > 0 ?
           singleCategory[0].brands[brand].products.map(product=>{
              return <CategoryCard product={product} key={product.id}/>
           }):
           <EmptyItem message="No Product for this brand"/>
        }
        </div>
        </section>
    )
}

export default Category;