import React from "react";
import BrandButtons from "../../category/BrandButtons";


const CategoryButtons = ({brand,setBrand})=>{
    return <div className="flex gap-6">
  <BrandButtons phoneBrand={phoneCategory[0].brands}
                                 setBrand={setBrand} brand={brand}/>
    </div>
}

export default CategoryButtons;