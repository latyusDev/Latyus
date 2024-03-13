import React from "react"; 
import { useSelector } from "react-redux";
import Address from "./Address";
import PersonalDetails from "./PersonalDetails";
import Loader from "../../Loader";
import { Circles } from "react-loader-spinner";


const MyProfile = ()=>{
    const {user} = useSelector((state)=>state.user);
    
    if(!user){
        return <div className="mx-auto mt-[19rem] w-[max-content]">
        <Loader Circles={Circles} styles={{color:"#880000", radius:"8px",
        width:"300px" ,height:"300px"}} />
   </div>
    }
    return <section className="py-36 px-3">
        <div className="flex flex-col md:flex-row  gap-8 md:gap-0 justify-between max-w-[1000px] mx-auto">
          <PersonalDetails/>
          <Address/>
        </div>
    </section>
}

export default MyProfile;