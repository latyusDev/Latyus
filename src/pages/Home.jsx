import React, { useEffect, useState } from "react";
import DropDown from './DropDown'
import { CiDeliveryTruck } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { LuHelpingHand } from "react-icons/lu";
import { GiThreeFriends } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import Phone from "../components/user/brand/Phone";
import Laptop from "../components/user/brand/Laptop"
const Home = ()=>{
  

    
    return (
        <section className="relatihve px-6">


            <div className="flex justify-between gajp-4 mt-8 border rounded-md p-6">
                <div className="flex gap-4 items-center">
                <CiDeliveryTruck className="text-[#FF9300] text-[3.5rem]"/>
                 <div>
                    
                     <h1  className="text-[0.94rem] font-['Lato',sans-serif] font-[600]">Free Delivery</h1>
                <p className="text-[0.85rem] text-[#798C92] mt- font-['Lato',sans-serif] font-[500]" >Free delivery within Lagos</p>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                <MdPayment className="text-[#FF9300] text-[3.5rem]"/>

                 <div>
                    
                     <h1 className="text-[0.94rem] font-['Lato',sans-serif] font-[600]">Safe Payment</h1>
                <p className="text-[0.85rem] text-[#798C92] mt- font-['Lato',sans-serif] font-[500]">100% secure payment</p>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                <FaShopify className="text-[#FF9300] text-[3.5rem]"/>

                 <div>
                    
                     <h1 className="text-[0.94rem] font-['Lato',sans-serif] font-[600]">Shop With Confidence</h1>
                <p className="text-[0.85rem] text-[#798C92] mt- font-['Lato',sans-serif] font-[500]">Buy now pay later</p>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                <LuHelpingHand className="text-[#FF9300] text-[3.5rem]"/>

                 <div>
                    
                     <h1 className="text-[0.94rem] font-['Lato',sans-serif] font-[600]">24/7 Help Center</h1>
                <p className="text-[0.85rem] text-[#798C92] mt- font-['Lato',sans-serif] font-[500]">Dedicated online and offline support</p>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                <GiThreeFriends className="text-[#FF9300] text-[3.5rem]"/>

                 <div>
                    
                     <h1 className="text-[0.94rem] font-['Lato',sans-serif] font-[600]">Friendly Services</h1>
                <p className="text-[0.85rem] text-[#798C92] mt- font-['Lato',sans-serif] font-[500]">
30 day satisfaction guarantee</p>
                    </div>
                </div>

            </div>
          
                       <Phone/>
                       {/* <Phone/>
                       <Phone/> */}
                       <Laptop/>
            
        </section>
    )
}

export default Home;