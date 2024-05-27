import React from 'react'
import Welcome from '../components/user/about/Welcome'
import Procedure from '../components/user/about/Procedure'
import Question from '../components/user/about/Questions'

const About = ()=>{
    return (
        <section className='py-24 px-3 bg-[#FCFCFC]'>
        <div className="mx-auto max-w-[1000px] ">
                <Welcome/>
                <Procedure/>
                <Question/>
        </div>

        </section>
    )
}

export default About