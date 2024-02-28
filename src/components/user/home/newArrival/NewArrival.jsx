import React, { useEffect, useState } from "react";
import CategoryCard from "../../category/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { latestProducts, getNewProducts } from "../../../../features/product/productSlice";
import Loader from "../../../Loader";
import { Circles } from "react-loader-spinner";
import BrandButtons from "../../brand/BrandButtons";
import Heading from "../../../heading";

const NewArrival = ()=>{
    const [brand,setBrand] = useState(0)
    const newArrival = useSelector(latestProducts)
    const dispatch = useDispatch();
    const {status} = useSelector((state)=>state.products)

    const getLatestProducts = async()=>{
        try{
            await dispatch(getNewProducts()).unwrap();
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getLatestProducts();
    },[])

    return(
        <section className="mb-36">
            {
                newArrival.length>0 ? <div>
                <Heading text="new arrivals" styles=" text-[#BB0000] mt-[6rem] mb-9  font-[400]  font-['Rubik_Doodle_Triangles',system-ui]
                text-center uppercase text-6xl capitalize"/>

                <div className="flex justify-between mt-4 px-6">
                <h3 className=" text-[#BB0000]  font-['Lato',sans-serif]  text-3xl capitalize">categories</h3>
                <BrandButtons phoneBrand={newArrival}
                     setBrand={setBrand} brand={brand}/>
                    </div>
            <div className="flex flex-wrap justify-center gap-6 mt-[3rem]">
                    {
                        newArrival[brand].products.slice(0,10).map(product=>{
                           return <CategoryCard product={product} key={product.id}/>
                        })
                    }
            </div> 
        </div> 
                    :<div className="mx-auto mt-[19rem] w-[max-content]">
                    <Loader Circles={Circles} styles={{color:"#880000", radius:"8px",
                    width:"300px" ,height:"300px"}} />
                    </div>
                    }
        </section>
    )
}

export default NewArrival;