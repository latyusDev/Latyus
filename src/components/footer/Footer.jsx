import Address from "./Address";
import Description from "./Description";
import UsefulLinks from "./UsefulLinks";

const Footer = ()=>{
    return (
        <footer className=" text-center md:text-left py-9 px-6 font-['Lato',sans-serif] text-white flex flex-col md:flex-row items-center justify-between bg-gradient-to-l  from-[#BB0000] to-[#880000] ">
        <Description />
        <UsefulLinks/> 
        <Address/>
        </footer>
    )
}

export default Footer;