import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import Loader from "../../Loader";
import CategoryBrands from "./CategoryBrands";
import CategoryCard from "./CategoryCard";
import EmptyItem from "../EmptyItem";
import { allCategories, getCategory } from "../../../features/category/categorySlice";


const SingleCategory = ()=>{
    const categories = useSelector(allCategories)
    const [brand, setBrand] = useState(0)
    const dispatch = useDispatch()
    const {name} = useParams();
    
    const singleCategory =  categories.filter(category=>category.name == name);
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

    if(singleCategory.length == 0){
        return (
            <div className="min-h-[470px] md:min-h-[670px] flex items-center justify-center">
                <EmptyItem message="Category does not exist"
                 styles=" text-[#BB0000] text-center font-[600] text-lg md:text-4xl font-['Lato',sans-serif]"/>
            </div>
        )
    }
    
    return (
        <section className="px-3 md:px-6 mb-36">  
            <h1 className="text-center text-[4rem] capitalize text-[#BB0000] 
             mt-8 font-['Rubik_Doodle_Triangles',system-ui]">{name}</h1>
                <h3 className="text-3xl text-center mb-4 md:mb-0 md:float-left">Select a brand</h3>
                    <CategoryBrands  singleCategory={singleCategory} setBrand={setBrand} brand={brand}/>
                
            {/* </div> */}
            <div className="flex flex-wrap  justify-center gap-6 mt-[2rem] md:clear-both">
           {
           singleCategory[0].brands[brand].products.length > 0 ?
           singleCategory[0].brands[brand].products.map(product=>{
              return <CategoryCard product={product} key={product.id}/>
           }):
           <EmptyItem message="No Products for this brand"
           styles=" text-xl text-center text-[#BB0000]   font-['Lato',sans-serif] my-24 "/>
        }
        </div>
        </section>
    )
}

export default SingleCategory;