import { FaEnvelope } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";


const Address = ()=>{
    return (
        <div className="mt-7 ">
        <h2 className="mb-5 font-['Lato',sans-serif] font-[600] text-xl">Address</h2>
        <ul>
            <li > <div className="flex gap-5 font-[600]"> <FaHouse className="mt-1.5"/> <p> 43, Memudu street orile iganmu Lagos </p></div></li>
            <li className="font-[600] mt-2.5 hover:text-[#FF9300]"> <div className="flex gap-5"> <FaEnvelope className="mt-1.5"/> <Link to="mailto:yunusabdullateef95@gmail.com">yunusabdullateef95@gmail.com </Link></div></li>
            <li className="font-[600] mt-2.5 hover:text-[#FF9300]"> <div className="flex gap-5"> <MdPhone className="mt-1.5"/> <Link to="call:07040834109"> 07040834109 </Link></div></li>
        </ul>
    </div>
    )
}

export default Address