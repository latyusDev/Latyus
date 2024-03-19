import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../../static/static";
import { useDispatch } from "react-redux";
import { setOpenDropDown, setOpenSidebar } from "../../../features/appState/appStateSlice";

const NavLinks = ({ulStyles,liStyles,linkHeight})=>{
    const dispatch = useDispatch()
    const handleBars = ()=>{
        dispatch(setOpenSidebar())
        dispatch(setOpenDropDown(false))
    }

    return(
            <ul ref={linkHeight} className={ulStyles}>
                {
                    navLinks.map(navLink=>{
                        const {name,route} = navLink
                        return (
                            <li key={navLink.id} onClick={()=>handleBars()} ><Link to={`${route}`} className={liStyles}>{name}</Link></li>
                        )
                    })
                }
            </ul>
    )
}
export default NavLinks;