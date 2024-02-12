import Logo from "../components/Logo"
import Address from "./Address";
import UsefulLinks from "./UsefulLinks";

const Footer = ()=>{
    return (
        <footer className="mt-[14rem] py-9 px-6 font-['Lato',sans-serif] text-white flex justify-between bg-gradient-to-l  from-[#BB0000] to-[#880000] ">
            <div className="basis-[35%]">
            <Logo/>
            <p >
            SLOT Systems Limited is the leading retail company for affordable and durable mobile phones, computers, accessories, and various types of Electronics. We consider it necessary to fill up this need
             in the global information technology sector with emphasis on Africa market.
            </p>
        </div>
        <UsefulLinks/> 
        <Address/>
        </footer>
    )
}

export default Footer;