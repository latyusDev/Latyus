import Slider from 'react-slick/lib/slider';
import './slick-theme.css';
import './slick.css';
import { settings } from '../../../../static/dynamicCarouselSetting';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomProducts, randomProducts } from '../../../../features/product/productSlice';
import { useEffect, useState } from 'react';
import { addToCart } from '../../../../features/cart/cartSlice';

const DynamicCarousel = ()=>{
    const dispatch = useDispatch();
    const dynamicProducts = useSelector(randomProducts)

    const getDynamicProducts = async()=>{
        try{
            await dispatch(getRandomProducts()).unwrap();
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getDynamicProducts();
    },[])
    if(dynamicProducts.length == 0){
        return 'loading'
    }
    return(
        <section className="px-[3rem] bg-[#880000k] bg-gradient-to-l  to-[#BB0000]  from-[#880000] pt-12 h-[600px] w-full">
             <Slider {...settings}>
                {
                    dynamicProducts.map((product,index)=>{
                        const {name,description,image,id} = product
                        return (
                            <div className='mb-8' key={id}>
                            <div className={`flex justify-center gap-10 items-center  ${index%2===0&&"flex-row-reverse"}`}>
                                       <div className="basis-[40%] text-white font-['Lato',sans-serif]">
                                           <h1 className=" text-3xl mb-4 capitalize">{name}</h1>
                                           <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla corporis, dolor 
                                               iure delectus similique fugiat et eligendi culpa. Quia, iste. <span className="capitalize text-[#FF9300]">learn more</span> </p>
                                               <button  onClick={()=>dispatch(addToCart(product))}
                                                className=" capitalize mt-4 px-6 py-2  rounded-sm border-[1px] border-[#FF9300] text-white">add to cart</button>
                                       </div>
                                       <div className="basis-[40%] ">
                                       <img src={image} alt="" className="w-full h-[400px]" />
                                       </div>
                                   </div>
                            </div>
                        )
                    })
                }
       
       
         </Slider>
        </section>
    )
}

export default DynamicCarousel;