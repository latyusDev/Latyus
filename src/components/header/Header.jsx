import React, { useRef, useState } from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./bottomHeader/BottomHeader";

const Header = ()=>{
    const header = useRef(null)
    const [headerHeight,setHeaderHeight] = useState(0)
    const [pageY,setPageY] = useState(0)
    window.onscroll = ()=>{
        setPageY(window.pageYOffset+headerHeight)
        setHeaderHeight(header.current.getBoundingClientRect().height)
      
    }
    return (
        <header ref={header} className={`z-50 bg-gradient-to-l  from-[#BB0000]  to-[#880000]
         font-['Rubik_Doodle_Triangles',system-ui]  ${pageY>headerHeight&&"duration-1000 fixed top-0 left-0 right-0 from-[#ff000000]  to-[#880000]  "}`}>
            <TopHeader pageY={pageY} headerHeight={headerHeight}/>
            <MiddleHeader pageY={pageY} headerHeight={headerHeight}/>
            <BottomHeader
            pageY={pageY} headerHeight={headerHeight}/>
        </header>
    )
}

export default Header;