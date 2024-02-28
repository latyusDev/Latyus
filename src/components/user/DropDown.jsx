import React, { useState } from "react";
import CategoryItems from "./category/CategoryItems";
import { useSelector } from "react-redux";
import { setOpenDropDown } from "../../features/appState/appStateSlice";

const DropDown = ()=>{
    const openDropDown = useSelector((state)=>state.normalState.openDropDown)
    return (
        <div className={` overflow-hidden   ${openDropDown ? " h-auto":"h-[0]"} duration-1000`}>
                 <CategoryItems/>
        </div>
    )
}

export default DropDown;