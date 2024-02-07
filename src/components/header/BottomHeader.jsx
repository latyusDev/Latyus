import React from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";


const BottomHeader = ({isOpen,setIsOpen})=>{
    return (

        <div className="flex items-center px-6 border-b-[1pxh] border-[#fff] font-['Lato',sans-serif] ">
            <div className="border-r-[1px] border-[#D7504E]">
            <div  className="flex  gap-6 items-center py-4 pr-16 ">
                <BiMenu onClick={()=>setIsOpen(!isOpen)} className="text-2xl text-[#fff]"/>
                <h3 className="text-[#fff] font-[600]">SHOP BY CATEGORIES</h3>
            </div>
            </div>
            <ul className="flex gap-8 capitalize text-[#FAFFF7]  font-[600] text-[0.8rem] pl-8">
                <li><Link to="/" className=" uppercase">Home  </Link></li>
                <li><a className="uppercase"href="">About us    </a></li>
                <li><a className="uppercase"href="">Contact    </a></li>
            </ul>
        </div>
    )
}

export default BottomHeader;