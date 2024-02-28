import React from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./BottomHeader";

const Header = ()=>{
    return (
        <header className=" relative bg-gradient-to-l  from-[#BB0000]  to-[#880000] font-['Rubik_Doodle_Triangles',system-ui]">
            <TopHeader/>
            <MiddleHeader />
            <BottomHeader
            />
        </header>
    )
}

export default Header;