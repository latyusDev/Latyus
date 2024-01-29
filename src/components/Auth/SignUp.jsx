import React, { useState } from "react";
import avatar from '../../assets/images/avatar.jpg'
import { userDetails } from "../../static/static";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../features/user/authSlice";

const SignUp = ()=>{
    // const [user,setUser] = useState(userDetails);                
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const handleChange = (e)=>{
    //     const name = e.target.name;
    //     const value = e.target.value ;
    //     setUser({...user,[name]: value})
    // }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        try{
            await dispatch(signUp(form)).unwrap();
            navigate('/')
        }catch(e){
            if(e)
            console.log(e)
        }

    }
    return (
        <section className="bg-[#FCFCFC] pt-[5rem] font-['Lato',sans-serif] font-[600]">
            <h1 className="text-center text-[#BB0000]  text-[4rem] font-['Rubik_Doodle_Triangles',system-ui] font-[400]">Sign up</h1>
            <form onSubmit={handleSubmit}>
            <div  className="max-w-[1000px]  mx-auto mt-[4rem]">

           <div className="flex justify-between gap-7" >
           <div className="basis-[47%]">

                <div className="mt-7">
                    <label  htmlFor="image">
                        <img src={avatar} alt="" className="block mx-auto w-[240px] h-[220px] rounded-[50%]" /></label>
                    <input className="px-3.5 outline-none w-full hidden border-[#ccc] border rounded-md h-[45px]" type="file" name="image" id="image" />
                    <label className="block my-2.5 mb-2 mt-4  text-lg text-[#880000]  text-center"> Upload your image</label>
                
                </div>
                
                <div>
                    <label className="block  mb-2 mt-4  text-lg text-[#880000]">First Name</label>
                    <input  className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="text" name="first_name"   />
                </div>
        
                <div>
                    <label className="block   mb-2 mt-4  text-lg text-[#880000]">Last Name</label>
                    <input className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="text" name="last_name"/>
                </div>
        
                <div>
                    <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Email</label>
                    <input  className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="email" name="email"  />
                </div>
        
                    </div>
                    {/* address */}

                    <div  className="basis-[47%]">
                <div>
                    <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Password</label>
                    <input  className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="password" name="password"  />
                </div>
                <div>
                    <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Password Confirmation</label>
                    <input  className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="password" name="password_confirmation"
           />
                </div>
                    <div>
                    <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Phone Number</label>
                    <input className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="tel" name="phone_number"  />
                </div>
                
                <div>
                    <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">State</label>
                    <input  className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="text" name="state" />
                </div>
        
                <div>
                    <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Local Government</label>
                    <input  className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="text" name="local_government"  />
                </div>

                <div>
                    <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Street</label>
                    <input  className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="text" name="street"  />
                </div>

                    </div>
           </div>
     
    <button type="submit" className="bg-[#880000] w-full py-3 mt-8 rounded-md text-white">Sign up</button>
    </div>

    </form>
    
            <p className="text-center my-6">Already have an account <Link to="/login" className="text-[#880000]">Sign in</Link></p>
        </section>
    )
}

export default SignUp;


{/* <section className="bg-[#FCFCFC] pt-[5rem] font-['Lato',sans-serif] font-[600]"> */}
//         <h1 className="text-center text-[#BB0000]  text-[4rem] font-['Rubik_Doodle_Triangles',system-ui] font-[400]">Sign up</h1>
//         <form onSubmit={handleSubmit}>
//         <div  className="max-w-[1000px]  mx-auto mt-[4rem]">

//        <div className="flex justify-between gap-7" >
//        <div className="basis-[47%]">

//             <div className="mt-7">
//                 <label  htmlFor="image">
//                     <img src={avatar} alt="" className="block mx-auto w-[240px] h-[220px] rounded-[50%]" /></label>
//                 <input className="px-3.5 outline-none w-full hidden border-[#ccc] border rounded-md h-[45px]" type="file" name="image" id="image" />
//                 <label className="block my-2.5 mb-2 mt-4  text-lg text-[#880000]  text-center"> Upload your image</label>
            
//             </div>
            
//             <div>
//                 <label className="block  mb-2 mt-4  text-lg text-[#880000]">First Name</label>
//                 <input value={user.first_name} className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="text" name="first_name"   />
//             </div>
    
//             <div>
//                 <label className="block   mb-2 mt-4  text-lg text-[#880000]">Last Name</label>
//                 <input value={user.last_name} className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="text" name="last_name"/>
//             </div>
    
//             <div>
//                 <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Email</label>
//                 <input value={user.email} className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="email" name="email"  />
//             </div>
    
//                 </div>
//                 {/* address */}

//                 <div  className="basis-[47%]">
//             <div>
//                 <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Password</label>
//                 <input value={user.password} className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="password" name="password"  />
//             </div>
//             <div>
//                 <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Password Confirmation</label>
//                 <input value={user.password_confirmation} className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="password" name="password_confirmation"
//        />
//             </div>
//                 <div>
//                 <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Phone Number</label>
//                 <input value={user.phone_number} className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="tel" name="phone_number"  />
//             </div>
            
//             <div>
//                 <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">State</label>
//                 <input value={user.state} className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="text" name="state" />
//             </div>
    
//             <div>
//                 <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Local Government</label>
//                 <input value={user.local_government} className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="text" name="local_government"  />
//             </div>

//             <div>
//                 <label className="block my-2 mb-2 mt-4  text-lg text-[#880000]">Street</label>
//                 <input value={user.street} className="px-3.5 outline-none w-full border-[#ccc] border rounded-md h-[45px]" type="text" name="street"  />
//             </div>

//                 </div>
//        </div>
 
// <button type="submit" className="bg-[#880000] w-full py-3 mt-8 rounded-md text-white">Sign up</button>
// </div>

// </form>

//         <p className="text-center my-6">Already have an account <Link to="/login" className="text-[#880000]">Sign in</Link></p>
//     </section>