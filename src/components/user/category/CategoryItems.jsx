import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allCategories, getCategory } from "../../../features/category/categorySlice";
import { setOpenDropDown } from "../../../features/appState/appStateSlice";

const CategoryItems = ()=>{
    const categories = useSelector(allCategories)
    const dispatch = useDispatch()

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
            <div className=" bg-gradient-to-l  from-[#BB0000]  to-[#880000] w-full">
                <ul className=" pt-4 flex gap-8 flex-wrap   gap-y-4 gap-x-10 text-[#707070] pb-[1rem] px-5 font-['Lato',sans-serif] ">
                  
                    {categories.length > 0 && categories.map(category=>{
                        return (
                            <li key={category.id} onClick={()=>dispatch(setOpenDropDown())}  className="capitalize transition-all duration-[s] font-[600]  text-white hover:text-[#FF9300]"><Link to={`category/${category.name}`}>{category.name} </Link></li>
                        )
                    })}
                  
                </ul>
            </div>
        )
}

export default CategoryItems