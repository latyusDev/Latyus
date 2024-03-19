import React, { useState } from "react"
import BrandCard from './BrandCard'
import BrandButtons from './BrandButtons'

const Brand = ({category})=>{
    const [brand,setBrand] = useState(0);
    return (
        <section className="">  

          
          {
                <div>
                    <div className="flex flex-col md:flex-row items-center  md:justify-between mt-7">
                            <h3 className=" text-[#BB0000]  font-['Lato',sans-serif] mb-4 md:mb-0 font-[6l00] text-3xl capitalize">{category[0].name}</h3>
                            <BrandButtons phoneBrand={category[0].brands}
                                 setBrand={setBrand} brand={brand}/>
                            
                    </div>
                    {        
                        <BrandCard
                        category={category[0]} brand={brand}/>

                     }
            </div>
         }
        </section>
    )
}

export default Brand;