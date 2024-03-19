import React from "react";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setOpenDropDown, setOpenSidebar } from "../../../features/appState/appStateSlice";
import {CiCircleRemove} from 'react-icons/ci';
import { status,allCategories } from "../../../features/category/categorySlice";
import { Circles } from "react-loader-spinner";
import Loader from "../../Loader";
import SearchInput from "../../searchContainer/SearchInput";
import NavLinks from "./NavLinks";

const BottomHeader = ({pageY,headerHeight})=>{
    const dispatch = useDispatch();
const {openDropDown} = useSelector((state)=>state.normalState);
    const categoryStatus = useSelector(allCategories);
    const handleBars = ()=>{
            dispatch(setOpenDropDown())
            dispatch(setOpenSidebar()) 
    }
    return (

        <nav>
            <div className={`flex gap-5  items-center px-3 md:px-6 border-b-[1px] border-[#D7504E] font-['Lato',sans-serif] pb-3 md:pb-0 ${pageY>headerHeight&&"hidden"}`}>
            <div className=" border-[#D7504E] md:border-r-[1px]">
            <div  className="flex  gap-4 items-center py-4 md:pr-16 ">
               {
                categoryStatus.length === 0 ?  <div className=" ">
                <Loader Circles={Circles} styles={{color:"white", radius:"8px",
        width:"30",height:"30"}} />
            </div>:
                openDropDown ? 
                <CiCircleRemove 
                onClick={handleBars}
                 className="text-white cursor-pointer text-4xl font-[900]"/>
                :
                <BiMenu onClick={handleBars}
                className="text-4xl cursor-pointer text-[#fff]"/>
               }
                <h3 className="text-[#fff] font-[600] mt-1 hidden md:block">SHOP BY CATEGORIES</h3>
            </div>
            </div>
               <div className="basis-[90%] md:hidden">
               <SearchInput />
               </div>
           <div className="hidden md:block">
           <NavLinks 
              ulStyles="flex flex-row  gap-5  capitalize  text-[#FAFFF7] font-[600] text-[1rem]"
              listyles=" transition-all text-[#FF9300] hover:text-[#FF9300]"/>
           </div>

        </div>
        </nav>
    )
}

export default BottomHeader;