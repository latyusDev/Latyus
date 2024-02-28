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
                <li><Link to="/myAccount" className="hover:text-[#FF9300]">my account  <span className="ml-7">|</span> </Link></li>
                <li><Link to="" className="hover:text-[#FF9300]">wish list   <span className="ml-7">|</span> </Link></li>
               {
               userToken ?<li className="cursor-pointer hover:text-[#FF9300]"
                onClick={handleLogout}>sign out </li>:
               <li className="hover:text-[#FF9300]"><Link to="/login">sign in  </Link></li>
               }
            </ul>
        </div>
    )
}

export default TopHeader;