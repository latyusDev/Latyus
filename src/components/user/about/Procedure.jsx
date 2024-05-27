import React from 'react'
import { aboutUsData } from '../../../static/static'
import Heading from '../../heading'

const Procedure = ()=>{
    return (
            <article>
                <Heading text="about us" styles="text-center capitalize text-5xl md:text-6xl text-[#BB0000] font-['Rubik_Doodle_Triangles',system-ui] font-[400]"/>
                <div>
                        {
                            aboutUsData.map((data,index)=>{
                                const {id,title,description,image} = data
                                return (
                                   <div key={id} className={`flex flex-col md:flex-row items-center  gap-9 text-center md:text-left mt-12 ${index%2===0&&"md:flex-row-reverse"}`}>
                                        <div className='basis-[70%] h-[400px]'>
                                            <img src={image} alt="" className='w-full h-full rounded-[9px]' />
                                        </div>
                                    <div className='basis-[70%]'>
                                        <h3 className='capitalize text-[#BB0000] text-3xl mb-3'>{title}</h3>
                                        <p className='md:text-[1.4rem]'>{description}</p>
                                    </div>
                                   </div>
                                )
                            })
                        }
                </div>
            </article>
         
    )
}

export default Procedure