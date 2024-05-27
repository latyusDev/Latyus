import React, { useRef, useState } from "react"
import CategoryItems from "../user/category/CategoryItems";
import NavLinks from "../header/bottomHeader/NavLinks";
import SidebarHeader from "./SidebarHeader";
import { MdArrowBackIos } from "react-icons/md";
import { allCategories } from "../../features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import CategoryLists from "../user/category/CategoryLists";
import { CiCircleRemove } from "react-icons/ci";
import { setOpenDropDown, setOpenSidebar } from "../../features/appState/appStateSlice";

const Sidebar = ()=>{
   const linkHeight = useRef(null);
   const [linksContainer,setLinksContainer] = useState(0);
   const [openCategory,setOpenCategory] = useState(false);
   const {openSidebar} = useSelector((state)=>state.normalState);
   const dispatch = useDispatch();
   
   const categories = useSelector(allCategories);
   
   const handleDropDown = ()=>{
      setOpenCategory(!openCategory);
      if(openCategory){
         setLinksContainer(0)
      }else{
         setLinksContainer(linkHeight.current.getBoundingClientRect().height)
      }
   }
   const closeSidebar = ()=>{
      dispatch(setOpenSidebar())
      dispatch(setOpenDropDown()) 
      
   }
   console.log(openSidebar)
    return(
       <aside className={`fixed  top-0 bottom-0 flex  overflow-x-hidden font-['Lato',sans-serif] font-[600]
        transition-all duration-500  ${openSidebar?'w-full':"w-0"} z-[999] bg-[#3c3c3c80] md:w-0`}>
           
           <div className="bg-white h-full w-[80%]">
            <SidebarHeader/>
            <NavLinks 
                   ulStyles="flex flex-col gap-3 mt-9  capitalize pl-8  font-[600] text-lg"
                   liStyles=" transition-all text-[#BB0000]  hover:text-[#FF9300]"
            />
            <div className="flex justify-between items-center cursor-pointer mt-3 pl-8 pr-4  text-[#BB0000] 
            hover:text-[#FF9300] text-lg  "
            onClick={handleDropDown}
            >
            <h2 className="  font-[600] ">Categories</h2>
            <MdArrowBackIos className={`text-lg rotate-[180deg] transition-all duration-1000 mt-[0.58rem] ${openCategory&&"rotate-[270deg] mt-0"}`}/>
            </div>
            <div className={` pl-8 mt-5 overflow-y-hidden 
              bg-[#880000]  h-[0px]  ${openCategory&&`h-[fit-content]`} transition-all duration-500 `}>
              {/* bg-[#880000]  h-[0px] ${openCategory&&`h-[${linksContainer}px]`} transition-all duration-500`}> */}
               <CategoryLists
                  linkHeight={linkHeight}
                  ulStyles=" pt-4 flex  gap-8 flex-col gap-y-4 gap-x-10 text-white pb-[1rem] px-5 font-['Lato',sans-serif] "
                  liStyles="capitalize w-[max-content] font-[600]   hover:text-[#FF9300] "
                  categories={categories}/>
            </div>
           </div>
           <CiCircleRemove onClick={closeSidebar} className="text-[#FF9300] cursor-pointer text-4xl font-[900]"/>
       </aside>
    )
}

export default Sidebar;