import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allCategories, getCategory } from "../../features/category/categorySlice";

const CategoryItems = ({isOpen,setIsOpen})=>{
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
            <div className="absolute left-[0px] bottom-[0px] bg-yellow-800 top-[0] w-[350px]">
                <ul className="bg-white w-full h-full text-[#707070] pb-[1rem] px-5 font-['Lato',sans-serif] ">
                    {categories.length > 0 && categories.map(category=>{
                        return (
                            <li key={category.id} className="py-3 border-b-[1px] border-[#ccc]"><Link to={`category/${category.name}`}>{category.name} </Link></li>
                        )
                    })}
                  
                </ul>
            </div>
        )
}

export default CategoryItems