import React, { useState } from "react";
import {CiCircleRemove} from 'react-icons/ci'
import { useDispatch, useSelector } from "react-redux";
import SearchCard from "./SearchCard";
import { setOpenModal,setValue } from "../../features/appState/appStateSlice";

const SearchContainer = ()=>{
   
    const dispatch = useDispatch()
    const {openModal} = useSelector((state)=>state.normalState);
    const {status} = useSelector((state)=>state.products)
    
    const handleModal = ()=>{
        dispatch(setOpenModal(false))
        dispatch(setValue(''))
    }
    return (
          <section className={`fixed top-[25%]  right-0 left-0 bottom-0 
           z-[999] bg-[#3c3c3c80]  ${openModal ? "block":"hidden"}`}> 
                <div className="flex  md:gap-4 justify-center items-start mt-16 ">
                <div className=" flex-[0.9] md:flex-[0.67]
                bg-gradient-to-l  to-[#BB0000]  from-[#880000]   rounded-md h-[500px]   overflow-y-scroll">
                <SearchCard/>
                </div>
                <CiCircleRemove onClick={handleModal} className="text-[#FF9300] cursor-pointer text-4xl font-[900]"/>
                </div>
            </section>
    )
}

export default SearchContainer;