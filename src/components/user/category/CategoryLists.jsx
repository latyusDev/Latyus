import React from "react";
import { setOpenDropDown } from "../../../features/appState/appStateSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CategoryLists = ({categories,ulStyles,liStyles})=>{
    const dispatch = useDispatch()
    console.log(categories)

    return(
        <ul className={ulStyles}>
                  
        {categories.length > 0 && categories.map(category=>{
            return (
                <li key={category.id} onClick={()=>dispatch(setOpenDropDown())}  
                className={liStyles}><Link to={`category/${category.name}`}>{category.name} </Link></li>
            )
        })}
      
    </ul>
    )
}

export default CategoryLists;