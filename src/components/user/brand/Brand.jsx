import React, { useEffect, useState } from "react"
import BrandCard from './BrandCard'
import BrandButtons from './BrandButtons'
import EmptyItem from "../category/EmptyItem";

const Brand = ({phoneCategory})=>{
    const [brand,setBrand] = useState(0)
 
    return (
        <section className="px-3">  

          
          {
                <div>
                    <div className="flex justify-between mt-7">
                            <h3 className="   font-['Lato',sans-serif] font-[6l00] text-3xl capitalize">{phoneCategory[0].name}</h3>
                            <BrandButtons phoneBrand={phoneCategory[0].brands}
                                 setBrand={setBrand} brand={brand}/>
                            
                    </div>
                    {        
                        phoneCategory[0].brands[brand].products.length > 0 ? 
                        <BrandCard
                        products={phoneCategory[0].brands[brand].products}/>:
                        <EmptyItem message="No Product for this brand"/>
                     }
            </div>
         }
        </section>
    )
}

export default Brand;