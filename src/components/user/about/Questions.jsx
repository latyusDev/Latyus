import React, { useState } from 'react'
import { questions } from '../../../static/static'
import Heading from '../../heading';

const Question = ()=>{
    const [itemId,setItemId] = useState(null);

    const toggleItem = id =>{
        if(id === itemId){
            setItemId(null)
        }else{
            setItemId(id)

        }
    }

    return (
            <section className='mt-24'>
                <Heading text="faq" styles="uppercase text-5xl md:text-6xl text-[#BB0000] text-center  font-['Rubik_Doodle_Triangles',system-ui] font-[400]"/>
              <ul>
                    {
                        questions.map(faq=>{
                            const {id,question,answer} = faq
                            return(
                                <li className='text-center mb-6 border-b-[2px] py-2 border-[#BB0000]'>
                                <div className='flex justify-between pb-2'>
                                    <h2 className='text-2xl '>{question}</h2>
                                <button onClick={()=>toggleItem(id)} className='text-[#BB0000] text-2xl'>{id===itemId?<span>-</span>:<span>+</span>}</button>
                                </div>
                                {
                                    id===itemId&&<p className='transition-all duration-1000 md:border-l-[3px] md:border-[#BB0000] md:ml-9 md:pl-8 text-left text-lg leading-[1.4] mt-5'>{answer}</p>
                                }
                            </li>
                            )
                        })
                    }
              </ul>
            </section>

    )
}

export default Question