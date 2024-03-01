import React from "react";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setOpenDropDown } from "../../features/appState/appStateSlice";
import {CiCircleRemove} from 'react-icons/ci';
import { status,allCategories } from "../../features/category/categorySlice";
import { Circles } from "react-loader-spinner";
import Loader from "../Loader";
import DropDown from "../user/DropDown";

const BottomHeader = ({pageY,headerHeight})=>{
    const dispatch = useDispatch();
    const openDropDown = useSelector((state)=>state.normalState.openDropDown);
    const categoryStatus = useSelector(allCategories);

    return (

        <nav>
            <div className={`flex items-center px-6 border-b-[1px] border-[#D7504E] font-['Lato',sans-serif] ${pageY>headerHeight&&"hidden"}`}>
            <div className="border-r-[1px] border-[#D7504E]">
            <div  className="flex  gap-6 items-center py-4 pr-16 ">
               {
                categoryStatus.length === 0 ?  <div className=" ">
                <Loader Circles={Circles} styles={{color:"white", radius:"8px",
        width:"30",height:"30"}} />
            </div>:
                openDropDown ? 
                <CiCircleRemove 
                onClick={()=>dispatch(setOpenDropDown())}
                 className="text-white cursor-pointer text-4xl font-[900]"/>
                :
                <BiMenu onClick={()=>dispatch(setOpenDropDown())}
                className="text-4xl cursor-pointer text-[#fff]"/>
               }
                <h3 className="text-[#fff] font-[600] mt-1">SHOP BY CATEGORIES</h3>
            </div>
            </div>
            <ul className="flex gap-8 capitalize text-[#FAFFF7]  font-[600] text-[0.8rem] pl-8">
                <li><Link to="/" className="uppercase transition-all hover:text-[#FF9300]">Home  </Link></li>
                <li><Link to="/"  className="uppercase transition-all hover:text-[#FF9300]">About us </Link></li>
                <li><Link to="/"  className="uppercase transition-all hover:text-[#FF9300]">Contact </Link></li>
            </ul>

        </div>
        </nav>
    )
}

export default BottomHeader;