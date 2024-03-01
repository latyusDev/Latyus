import React, { useEffect, useState } from "react";
import DropDown from '../components/user/category/CategoryItems'
import { CiDeliveryTruck } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { LuHelpingHand } from "react-icons/lu";
import { GiThreeFriends } from "react-icons/gi";
import Phone from "../components/user/brand/Phone";
import Laptop from "../components/user/brand/Laptop"
import DynamicCarousel from "../components/user/home/dynamicCarousel/DynamicCarousel";
import NewArrival from "../components/user/home/newArrival/NewArrival";
import Television from "../components/user/brand/Television";
import Heading from "../components/heading";
import Iron from "../components/user/brand/Iron";



const Home = ()=>{
    return (
        <section className="  ">
            
            
            <DynamicCarousel/>

            <div className="flex justify-between gajp-4 mt-5 border-b-[3px] border-[#BB0000] p-6">
                <div className="flex gap-4 items-center">
                <CiDeliveryTruck className="text-[#BB0000] text-[3.5rem]"/>
                 <div>
                    
                     <h1  className="text-[0.94rem] text-[#BB0000] font-['Lato',sans-serif] font-[600]">Free Delivery</h1>
                <p className="text-[0.85rem]  mt- font-['Lato',sans-serif] font-[500]" >Free delivery within Lagos</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                <MdPayment className="text-[#BB0000] text-[3.5rem]"/>

                 <div>
                    
                     <h1 className="text-[0.94rem] text-[#BB0000] font-['Lato',sans-serif] font-[600]">Safe Payment</h1>
                <p className="text-[0.85rem]  mt- font-['Lato',sans-serif] font-[500]">100% secure payment</p>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                <FaShopify className="text-[#BB0000] text-[3.5rem]"/>

                 <div>
                    
                     <h1 className="text-[0.94rem] text-[#BB0000] font-['Lato',sans-serif] font-[600]">Shop With Confidence</h1>
                <p className="text-[0.85rem]  mt- font-['Lato',sans-serif] font-[500]">Buy now pay later</p>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                <LuHelpingHand className="text-[#BB0000] text-[3.5rem]"/>

                 <div>
                    
                     <h1 className="text-[0.94rem] text-[#BB0000] font-['Lato',sans-serif] font-[600]">24/7 Help Center</h1>
                <p className="text-[0.85rem]  mt- font-['Lato',sans-serif] font-[500]">Dedicated online and offline support</p>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                <GiThreeFriends className="text-[#BB0000] text-[3.5rem]"/>

                 <div>
                    
                     <h1 className="text-[0.94rem] text-[#BB0000] font-['Lato',sans-serif] font-[600]">Friendly Services</h1>
                <p className="text-[0.85rem]  mt- font-['Lato',sans-serif] font-[500]">
30 day satisfaction guarantee</p>
                    </div>
                </div>

            </div>
          
            <div className="px-6 mt-9">
                       <Phone/>
                       <Laptop/>
                       <Heading text="electronics" styles=" text-[#BB0000] mt-[6rem] mb-9  font-[400]  font-['Rubik_Doodle_Triangles',system-ui]
                        text-center uppercase text-6xl capitalize"/>
                    <Television/>

                       <NewArrival/>
           </div>
            
        </section>
    )
}

export default Home;