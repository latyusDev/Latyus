import React from "react";

const ContactForm = ()=>{
    return(
        <form className="font-[600]">
            <div className="flex flex-col md:flex-row md:gap-7 w-full ">
                    <div className=" flex-[0.5]">
                        <label className="block  mb-2 md:mb-1 mt-4 md:mt-2  text-lg text-[#BB0000] capitalize"> name</label>
                        <input  className="px-3.5 outline-none w-full border-[#ccc] border rounded-md font-[400] h-[45px]" type="text" name="first_name"   />
                    </div>
            
                    <div className="flex-[0.5]">
                        <label className="block   mb-2 md:mb-1 mt-4 md:mt-2  text-lg text-[#BB0000] capitalize">email</label>
                        <input className="px-3.5 outline-none w-full border-[#ccc] border rounded-md font-[400] h-[45px]" type="text" name="last_name"/>
                    </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-7 w-full ">
                    <div className=" flex-[0.5]">
                        <label className="block  mb-2 md:mb-1 mt-4 md:mt-2  text-lg text-[#BB0000] capitalize"> phone number</label>
                        <input  className="px-3.5 outline-none w-full border-[#ccc] border rounded-md font-[400] h-[45px]" type="tel" name="first_name"   />
                    </div>
            
                    <div className="flex-[0.5]">
                        <label className="block   mb-2 md:mb-1 mt-4 md:mt-2  text-lg text-[#BB0000] capitalize">subject</label>
                        <input className="px-3.5 outline-none w-full border-[#ccc] border rounded-md font-[400] h-[45px]" type="text" name="last_name"/>
                    </div>
            </div>
                    <div>
                    <label className="block   mb-2 md:mb-1 mt-4 md:mt-2  text-lg text-[#BB0000] capitalize">message</label>
                        <textarea name="" className="pl-4 pt-2 block outline-none w-full h-[160px] border-[#ccc] border rounded-md font-[400]"></textarea>
                    </div>
                    <button type="submit"    className="bg-[#880000] w-full py-2 mt-8 md:mt-5 rounded-md font-[400] border-[2px] border-[#880000] text-white transition-all
                 hover:bg-white hover:text-[#880000] hover:border-[2px] hover:border-[#880000] capitalize text-lg" >submit</button>
        </form>
    )
}

export default ContactForm;