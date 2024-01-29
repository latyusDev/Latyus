import Cookies from "js-cookie";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut, token } from "../../features/user/authSlice";
const TopHeader = ()=>{
    const navigate = useNavigate()
    const userToken = useSelector(token)
    const dispatch = useDispatch();
    const handleLogout = async()=>{
          try{
            await dispatch(signOut()).unwrap()
            navigate('/login')
          }catch(e){
            if(e)
            console.log(e)
          }
    }
    return (
        <div className=" py-3 font-['Lato',sans-serif] font-[600]  px-6 ">
            <ul className="mx-auto w-[max-content]  flex gap-8 capitalize font-['Lato',sans-serif] text-[#FAFFF7] text-[1rem]">
                <li><a  href="">my account  <span className="ml-7">|</span> </a></li>
                <li><a href="">wish list   <span className="ml-7">|</span> </a></li>
               {
               userToken ?<li onClick={handleLogout}>sign out </li>:
               <li><Link to="/login">sign in  </Link></li>
               }

            </ul>
        </div>
    )
}

export default TopHeader;