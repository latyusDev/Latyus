import React, { useRef, useState } from "react";
import CategoryItems from "./category/CategoryItems";
import { useSelector } from "react-redux";

const DropDown = ()=>{
    const openDropDown = useSelector((state)=>state.normalState.openDropDown)
    return (
        <div className={` overflow-hidden h-[0] transition-all duration-1000 ${openDropDown&&"h-[55px]"} `}>
                 <CategoryItems />
        </div>
    )
}

export default DropDown;