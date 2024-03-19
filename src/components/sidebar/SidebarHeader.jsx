import React from "react";
import avatar from '../../assets/images/avatar.jpg'
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../features/user/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { setOpenDropDown, setOpenSidebar } from "../../features/appState/appStateSlice";
const SidebarHeader = ()=>{
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user.user)
    const navigate = useNavigate()
    const closeSidebar = ()=>{
        dispatch(setOpenSidebar())
        dispatch(setOpenDropDown(false)) 
     }
     const handleLogout = async()=>{
        try{
          await dispatch(signOut()).unwrap()
          closeSidebar()
          navigate('/login')
        }catch(e){
          if(e)
          console.log(e)
        }
  }

    return(
        <div className="flex gap-3 items-center pl-8 bg-[#880000] text-white py-3">
            <img src={user?user.image:avatar} alt={user?.first_name} className="rounded-full w-[36px] h-[36px]"/>
            {
                user ? <div className="flex gap-3 capitalize">
                    <h1> {user.first_name},</h1>
                    <button onClick={handleLogout}  className="capitalize">sign out</button>
                </div>: <button onClick={()=>closeSidebar()}><Link to="/login"   className="capitalize">hello, sign in</Link></button>
            }
        </div>
    )
}

export default SidebarHeader;