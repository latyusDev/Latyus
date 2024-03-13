import { Link } from "react-router-dom";

const UsefulLinks = ()=>{
    return (
        <div className="mt-4 md:mt-7 ">
            <h2 className="mb-5 font-['Lato',sans-serif] font-[600] text-xl">Useful Links</h2>
            <ul>
                <li className="mt-2.5"><Link  to="" className=" font-[600] transition-all hover:text-[#FF9300]"> Home </Link> </li>
                <li className="mt-2.5 "><Link  to="" className="font-[600] transition-all hover:text-[#FF9300]"> About Us</Link> </li>
                <li className="mt-2.5 "><Link  to="" className="font-[600] transition-all hover:text-[#FF9300]">  Contact</Link></li>
            </ul>
        </div>
    )

}

export default UsefulLinks;