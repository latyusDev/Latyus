import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allCategories, getCategory } from "../features/category/categorySlice";

const DropDown = ()=>{
    const categories = useSelector(allCategories)
    // const [value, setValue] = useState(0)
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
    console.log(categories)

        return (
            <div className=" h-[600px] absolute left-[0] bottom-[0] top-[0] right-[0] z-[999]">
                <ul className="bg-white max-w-[19.9%] text-[#707070] pb-[1rem] rounded-b-lg px-5 ml-7 font-['Lato',sans-serif] ">
                    {categories.length > 0 && categories.map(category=>{
                        return (
                            
                            <li key={category.id} className="py-3 border-b-[1px] border-[#ccc]"><Link to={`category/${category.name}`}>{category.name} </Link></li>
                        )
                    })}
                  
                </ul>
            </div>
        )
}

export default DropDown