import React from "react";
import Slider from "react-slick/lib/slider";
import { settings } from "../../../static/brandButtonSetting";

const CategoryBrands = ({singleCategory,brand,setBrand})=>{
    return (
        <div className="max-w-[340px]  mx-auto md:max-w-[340px] border border-white md:float-right ">
             <Slider {...settings}>
                {/* <button>fish</button>
                <button>Ippo</button>
                <button>Itel</button>
                <button>Tecno</button> */}
                    {singleCategory[0].brands.filter(brand=>brand.products.length>0).map((categoryItem,index)=>{
                        return (
                        
                            <button 
                            className={`text-lg capitalize pb-2 ${index === brand && "border-b-[2px] border-b-[#BB0000] "} hover:border-b-[2px] hover:border-b-[#BB0000] `} 
                            key={categoryItem.id} onClick={()=>setBrand(index)}>
                                {categoryItem.name}
                            </button>
                        )
                    })}
            </Slider>
         </div>
   )
}

export default CategoryBrands;