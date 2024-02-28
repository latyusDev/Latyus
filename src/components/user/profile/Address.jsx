import React from "react"; 
import { useSelector } from "react-redux";

const Address = ()=>{
    const {user} = useSelector((state)=>state.user);
    const address = user.address

    return (
            <div className="bg-gradient-to-l  to-[#BB0000]  from-[#880000] basis-[55%] rounded-lg p-8 self-center">

                <h1 className="text-center text-xl text-white capitalize mt-9 font-[600] ">address</h1>
            <ul className="mt-7 text-white font-['Lato',sans-serif] ">
            <li>
                        <div className="flex justify-between items-center mt-5">
                            <p className="capitalize font-[600]">street</p>
                            <p className="capitalize">{address.street}</p>
                        </div>
                    </li>
            <li>
                        <div className="flex justify-between items-center mt-5">
                            <p className="capitalize font-[600]">state</p>
                            <p className="capitalize">{address.state}</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex justify-between items-center mt-5">
                            <p className="capitalize font-[600]">local government</p>
                            <p className="capitalize">{address.local_government}</p>
                        </div>
                    </li>
                  
                </ul>
            </div>
       
    )
}

export default Address;