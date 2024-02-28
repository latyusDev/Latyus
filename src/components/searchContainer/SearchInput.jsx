import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setOpenModal,setValue} from '../../features/appState/appStateSlice'
import { getProducts, filterProduct } from "../../features/product/productSlice";
const SearchInput = ()=>{
    const dispatch = useDispatch()
    const value = useSelector((state)=>state.normalState.value)

    const controlModal = ()=>{
        if(value.length > 0){
            dispatch(setOpenModal(true))
        }else{
            dispatch(setOpenModal(false))
        }
    }
    const getProductItems = async()=>{
        try{
            await dispatch(getProducts()).unwrap();
        }catch(e){
            console.log(e)
        }
    }
    const handleKeyUp = async()=>{
        controlModal();
        await getProductItems();
        dispatch(filterProduct(value))
   }


    return ( 
        <div className="basis-[50%]">
        <form className="flex font-['Lato',sans-serif] ">
            <input type="text" value={value}
             onChange={(e)=>dispatch(setValue(e.target.value))}
             onKeyUp={handleKeyUp}
               className=" pl-4 basis-[80%] h-[50px] rounded-l-[3rem] outline-[0]" placeholder="Search the entire store"/>
            <button type="submit" className="bg-[#880000] text-lg rounded-r-[2rem] basis-[20%]  text-white">Search</button>
        </form>
    </div>
    )
}


export default SearchInput;