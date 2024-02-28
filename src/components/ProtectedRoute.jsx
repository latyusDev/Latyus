import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";


const ProtectedRoute = ()=>{
    
    const {user} = useSelector((state)=>state.user);
    return user ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoute;
