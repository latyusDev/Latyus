import React from "react";
import avatar from '../../assets/images/avatar.jpg'

const SidebarHeader = ()=>{
    return(
        <div className="flex gap-3 items-center pl-8 bg-[#880000] text-white py-2">
            <img src={avatar} alt="" className="rounded-full w-[36px] h-[36px]"/>
            {
                true ? <h1>Hello, sign in</h1>:<h1>Yunus Uthman</h1>
            }
        </div>
    )
}

export default SidebarHeader;