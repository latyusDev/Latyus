import React from 'react'
import { contactUsData } from '../../../static/static'

const Ways = ()=>{
    return (
       
            <article className='text-center mb-24'>
               <ul className='flex flex-col gap-8 md:gap-0 md:flex-row justify-between'>
                    {
                        contactUsData.map(data=>{
                            const {id,title,icon,first_way,second_way} = data
                            return(
                                <li key={id} className='text-center'>
                                    <div>
                                        <div className='bg-[#cd9191a7] w-[max-content] rounded-full p-6 mx-auto mb-5'>
                                            {icon}
                                        </div>
                                        <h1 className='text-xl font-[600] text-[#BB0000] py-3 capitalize'>{title}</h1>
                                        <p className='text-lg'>{first_way}</p>
                                        <p className='text-lg'>{second_way}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
               </ul>
            </article>

    )
}

export default Ways