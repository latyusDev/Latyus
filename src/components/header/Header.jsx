import React from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./BottomHeader";

const Header = ()=>{
    return (
        <header className="bg-[#BB0000] font-['Rubik_Doodle_Triangles',system-ui]">
            <TopHeader/>
            <MiddleHeader/>
            <BottomHeader/>
        </header>
    )
}

export default Header;