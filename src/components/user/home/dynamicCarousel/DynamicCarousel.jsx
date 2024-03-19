import Slider from 'react-slick/lib/slider';
import './slick-theme.css';
import './slick.css';
import { settings } from '../../../../static/dynamicCarouselSetting';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomProducts, randomProducts } from '../../../../features/product/productSlice';
import { useEffect, useState } from 'react';
import { addToCart } from '../../../../features/cart/cartSlice';
import AddToCart from '../../AddToCart';
import { Circles } from 'react-loader-spinner';
import Loader from '../../../../components/Loader'
import { Link } from 'react-router-dom';

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
    },[]);

    if(dynamicProducts.length == 0){
        return <div className="mx-auto my-[9rem] w-[max-content]">
        <Loader Circles={Circles} styles={{color:"#880000", radius:"8px",
        width:"300px" ,height:"300px"}} />
        </div>
    }

    return(
        <section className="px-[3rem] bg-[#880000k] bg-gradient-to-l  to-[#BB0000]  from-[#880000] pt-12 min-h-[550px] pb-10 md:pb-0 w-full relaive -z-20">
             <Slider {...settings}>
                {
                    dynamicProducts.map((product,index)=>{
                        const {name,description,image,id} = product
                        return (
                            <div className='mb-8' key={id}>
                            <div className={`flex flex-col-reverse md:flex-row justify-center gap-10 items-center  ${index%2===0&&"flex-row-reverse"}`}>
                                       <div className="basis-[40%] text-white text-center md:text-left font-['Lato',sans-serif]">
                                          
                                           <h1 className=" text-3xl mb-4 capitalize">{name}</h1>
                                           <p className="">{description.slice(0,100)}<Link to={`product/${product.id}`}> <span className="transition-all duration-1000  capitalize text-[#FF9300] 
                                               hover:cursor-pointer hover:text-white  hover:border-white">
                                                learn more</span></Link> </p>
                                                <AddToCart product={product} styles="transition-all duration-1000  capitalize mt-4 px-6 py-2
                                                  rounded-sm border-[1px] border-[white] text-white hover:text-[#FF9300]
                                                    hover:border-[#FF9300]"/>

                                       </div>
                                       <div className="basis-[40%] ">
                                       <img src={image} alt="" className="w-full h-[200px] md:h-[400px] object-containh" />
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