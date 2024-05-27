import React from 'react'
import ContactUs from '../components/user/contact/ContactUs'
import Ways from '../components/user/contact/Ways'
import ContactForm from '../components/user/contact/ContactForm'
import img from '../assets/images/cv2.webp'
import Message from '../components/user/contact/Message'
import Heading from '../components/heading'


const Contact = ()=>{
    return (
        <section className="py-24  bg-[#FCFCFC] font-['Lato',sans-serif] px-3" >
            <div className='mx-auto max-w-[1000px]'>
                <ContactUs/>
                <Ways/>
                <Heading text="get in touch with us" styles="text-5xl md:text-6xl text-[#BB0000] leading-[1.2] text-center mb-9 md:mb-12 font-['Rubik_Doodle_Triangles',system-ui] font-[400] capitalize"/>
                <div className='flex flex-col-reverse md:flex-row gap-12'>
                    <div className='basis-[55%]'>
                        <Message/>
                        <ContactForm/>
                    </div>
                <div>
                    <img src={img} alt="" className='w-full h-full rounded-md'/>
                </div>

                </div>
            </div>
        </section>
    )
}

export default Contact