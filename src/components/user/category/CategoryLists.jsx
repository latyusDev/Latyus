import React from "react";
import { setOpenDropDown, setOpenSidebar } from "../../../features/appState/appStateSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CategoryLists = ({categories,ulStyles,liStyles,linkHeight})=>{
    const dispatch = useDispatch()
    const handleBars = ()=>{
        dispatch(setOpenDropDown())
        dispatch(setOpenSidebar())
    }

    return(
        <ul ref={linkHeight} className={ulStyles}>
            <li>Iron</li>
            <li>Iron</li>
        {categories.filter(category=>category.brands.length>0).map(category=>{
            return (
                <li key={category.id} onClick={handleBars}  
                className={liStyles}><Link to={`category/${category.name}`}>{category.name} </Link></li>
            )
        })}
      
    </ul>
    )
}

export default CategoryLists;