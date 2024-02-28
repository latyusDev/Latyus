import React from "react";


const BrandButtons = ({phoneBrand,brand,setBrand})=>{
    return <div className="flex gap-6">

    {phoneBrand.slice(0,5).map((brandItem,index)=>{
        return (
            <button 
            className={`text-xl capitalize ${index === brand && "text-[#BB0000]"} transition-all duration-1000  hover:text-[#BB0000]`} 
            key={brandItem.id} onClick={()=>setBrand(index)}>
                {brandItem.name}
            </button>
        )
    })}
    </div>
}

export default BrandButtons;