import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn,reset } from "../../features/user/authSlice";

const SignIn = ()=>{
    const [user,setUser] = useState({email:'',password:''});                
    const {errors,status} = useSelector((state)=>state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value ;
        setUser({...user,[name]: value})

    }

    useEffect(()=>{
        if(status === 'success'){
            navigate('/')
        }
    },[status,errors])

    const handleSignIn = async(e)=>{
        e.preventDefault();
        await dispatch(signIn(user)).unwrap();
        dispatch(reset())
    }


    
    return (
        <section className="px-3 border [#FCFCFC] md:pb-36 bg-[#FCFCFC] py-28 md:pt-[5rem] font-['Lato',sans-serif] font-[600]">
            <h1 className="text-center text-[#BB0000]  text-[4rem] font-['Rubik_Doodle_Triangles',system-ui] font-[400]">Sign in</h1>
            <form onSubmit={handleSignIn} className="max-w-[500px] mx-auto  md:mt-[4rem]">
              
                <div>
                    <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Email</label>
                    <p className="text-sm  text-red-500 pb-2">{errors?.email&&errors.email[0]}</p>
                    <input className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]"
                     onChange={handleChange} value={user.email} type="email" name="email"  />
                </div>

                    <p className="text-sm  text-red-500 mt-4">{errors?.message&&errors.message}</p>
               <div>
                    <label className="block   mb-2 mt-4  text-lg text-[#880000]">Password</label>
                    <p className="text-sm  text-red-500 pb-2">{errors?.password&&errors.password[0]}</p>
                    <input className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]"
                     onChange={handleChange} value={user.password} type="password" name="password"/>

                </div>
        
                <button type="submit" className="bg-[#880000] w-full py-3 mt-8 rounded-md border-[2px] border-[#880000] text-white transition-all hover:bg-white hover:text-[#880000] hover:border-[2px] hover:border-[#880000]">Sign in</button>
        </form>
    <p className="text-center my-6">Don't have an account <Link to="/register" className="text-[#880000]">Sign up</Link></p>     
        </section>
    )
}

export default SignIn;