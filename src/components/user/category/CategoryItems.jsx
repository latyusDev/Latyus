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
                <ul className="  grid grid-cols-[repeat(4,minmax(100px,auto))] justify-center gap-10 text-[#707070] pb-[1rem] px-5 font-['Lato',sans-serif] ">
                  
                    {categories.length > 0 && categories.map(category=>{
                        return (
                            <li key={category.id} onClick={()=>dispatch(setOpenDropDown())}  className="font-[600] py-3 text-white"><Link to={`category/${category.name}`}>{category.name} </Link></li>
                        )
                    })}
                  
                </ul>
            </div>
        )
}

export default CategoryItems