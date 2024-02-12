import React from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./BottomHeader";

const Header = ({isOpen,setIsOpen})=>{
    return (
        <header className="  bg-gradient-to-l  from-[#BB0000]  to-[#880000] font-['Rubik_Doodle_Triangles',system-ui]">
            <TopHeader/>
            <MiddleHeader />
            <BottomHeader
             isOpen={isOpen} 
            setIsOpen={setIsOpen}
            />
        </header>
    )
}

export default Header;