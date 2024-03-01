import React from "react";

const BrandButton = ({singleCategory,brand,setBrand})=>{
    return <div className="flex gap-6">

    {singleCategory[0].brands.map((categoryItem,index)=>{
        return (
            <button 
            className={`text-xl capitalize  ${index === brand && "border-b-[2px] border-b-[#BB0000] "} hover:border-b-[2px] hover:border-b-[#BB0000] `} 
            key={categoryItem.id} onClick={()=>setBrand(index)}>
                {categoryItem.name}
            </button>
        )
    })}
    </div>
}

export default BrandButton;