import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCategories, getCategory } from "../../../features/category/categorySlice";
import CategoryLists from "./CategoryLists";

const CategoryItems = ({linkHeight})=>{
    const categories = useSelector(allCategories)
    const dispatch = useDispatch();
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

        return (
            <div  className=" bg-gradient-to-l  from-[#BB0000]  to-[#880000] w-full">
               <CategoryLists 
               linkHeight={linkHeight}
               ulStyles=" pt-4 flex gap-8 flex-wrap gap-y-4 gap-x-10 text-white pb-[1rem] px-5 font-['Lato',sans-serif] "
               liStyles="capitalize transition-all duration-1000 font-[600] hover:text-[#FF9300] "
               categories={categories}/>
            </div>
        )
}

export default CategoryItems