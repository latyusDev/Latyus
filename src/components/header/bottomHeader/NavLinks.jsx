import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ulStyles,liStyles})=>{
   
    return(
            <ul className={ulStyles}>
                <li><Link to="/" className={liStyles}>Home  </Link></li>
                <li><Link to="/"  className={liStyles}>About us </Link></li>
                <li><Link to="/"  className={liStyles}>Contact </Link></li>
            </ul>
    )
}
export default NavLinks;