import React from "react"; 
import { useSelector } from "react-redux";

const PersonalDetails = ()=>{
    const {user} = useSelector((state)=>state.user);
    const address = user.address

    return (
        <div className="bg-gradient-to-l  from-[#BB0000]  to-[#880000] basis-[40%] rounded-lg p-8">
        <img src={user.image} className="mx-auto w-[200px] h-[200px] rounded-full" alt={user.first_name} />
        <h1 className="text-center text-xl text-white capitalize mt-9 font-[600] ">personal details</h1>
        <ul className="mt-7 text-white font-['Lato',sans-serif]">
            <li>
                <div className="flex justify-between items-center">
                    <p className="capitalize font-[600]">full name</p>
                    <p className="capitalize">{user.first_name+' '+user.last_name}</p>
                </div>
            </li>
            
            <li>
                <div className="flex justify-between items-center mt-5">
                    <p className="capitalize font-[600]">mobile number</p>
                    <p className="capitalize">+234{user.phone_number}</p>
                </div>
            </li>
            <li>
                <div className="flex justify-between items-center mt-5">
                    <p className="capitalize font-[600]">email</p>
                    <p className="capitalize">{user.email}</p>
                </div>
            </li>
            
         
        </ul>
    </div>
       
    )
}

export default PersonalDetails;