import React, { useEffect, useState } from "react"
import BrandCard from './BrandCard'
import BrandButtons from './BrandButtons'
import EmptyItem from "../EmptyItem";

const Brand = ({category})=>{
    const [brand,setBrand] = useState(0);
    // const filterCategory = category.filter(categoryItem=>categoryItem.length>0)
    return (
        <section className="px-3">  

          
          {
                <div>
                    <div className="flex justify-between mt-7">
                            <h3 className=" text-[#BB0000]  font-['Lato',sans-serif] font-[6l00] text-3xl capitalize">{category[0].name}</h3>
                            <BrandButtons phoneBrand={category[0].brands}
                                 setBrand={setBrand} brand={brand}/>
                            
                    </div>
                    {        
                        <BrandCard
                        category={category[0]} brand={brand}/>
                        // products={category[0].brands[brand].products}/>

                       
                        
                     }
            </div>
         }
        </section>
    )
}

export default Brand;