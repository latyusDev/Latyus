import React from "react"
import CategoryItems from "../user/category/CategoryItems";

const Sidebar = ({isOpen,setIsOpen})=>{
    return(
       <aside onClick={()=>setIsOpen(!isOpen)} 
        className={`fixed top-0 bottom-0  overflow-x-hidden transition-1 ${isOpen?"w-full":"w-0"} z-[999] bg-[#3c3c3c80]`}>
         <CategoryItems isOpen={isOpen} 
            setIsOpen={setIsOpen}/>
       </aside>
    )
}

export default Sidebar;