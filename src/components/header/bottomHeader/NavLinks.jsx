import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../../static/static";
import { useDispatch } from "react-redux";
import { setOpenDropDown, setOpenSidebar } from "../../../features/appState/appStateSlice";

const NavLinks = ({ulStyles,linkHeight})=>{
    const dispatch = useDispatch()
    const handleBars = ()=>{
        dispatch(setOpenSidebar())
        dispatch(setOpenDropDown(false))
    }

    return(
            <ul ref={linkHeight} className={ulStyles}>
                {
                    navLinks.map(navLink=>{
                        const {name,route,id} = navLink
                        return (
                            <li key={id} onClick={handleBars} ><Link  to={`${route}`} className=" transition-all  hover:text-[#FF9300]">{name}</Link></li>
                        )
                    })
                }
            </ul>
    )
}
export default NavLinks;