import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../features/user/authSlice";
const SignIn = ()=>{
    const [user,setUser] = useState({email:'',password:''});                

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value ;
        setUser({...user,[name]: value})
        console.log(user)

    }

    const handleSignIn = async(e)=>{
        e.preventDefault();

        try{
            await dispatch(signIn(user)).unwrap();
            navigate('/')
        }catch(e){
            console.log(e)
        }

    }
    return (
        <section className="bg-[#FCFCFC] pt-[5rem] font-['Lato',sans-serif] font-[600]">
            <h1 className="text-center text-[#BB0000]  text-[4rem] font-['Rubik_Doodle_Triangles',system-ui] font-[400]">Sign in</h1>
            <form onSubmit={handleSignIn} className="max-w-[500px] mx-auto  mt-[4rem]">
              
                <div>
                    <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Email</label>
                    <input className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]"
                     onChange={handleChange} value={user.email} type="email" name="email"  />
                </div>
               <div>
                    <label className="block   mb-2 mt-4  text-lg text-[#880000]">Password</label>
                    <input className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]"
                     onChange={handleChange} value={user.password} type="password" name="password"/>
                </div>
        
                <button type="submit" className="bg-[#880000] w-full py-3 mt-8 rounded-md text-white">Sign in</button>
        </form>
    <p className="text-center my-6">Don't have an account <Link to="/register" className="text-[#880000]">Sign up</Link></p>     
        </section>
    )
}

export default SignIn;