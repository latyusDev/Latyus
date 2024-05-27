import { Link } from "react-router-dom";
import NavLinks from "../header/bottomHeader/NavLinks";

const UsefulLinks = ()=>{
    return (
        <div className="mt-4 md:mt-7 ">
            <h2 className="mb-5 font-['Lato',sans-serif] font-[600] text-xl">Useful Links</h2>
            <NavLinks ulStyles="flex flex-col  gap-3  capitalize  text-[#FAFFF7] font-[600] text-[1rem]"/>
           
        </div>
    )

}

export default UsefulLinks;