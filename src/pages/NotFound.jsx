import React from 'react'
import { Link } from 'react-router-dom'

const NotFound =()=>{
    return(
        <div className="min-h-[470px] md:min-h-[670px] font-['Lato',sans-serif] flex items-center justify-center">
           <div>
           <h1 className="text-[#BB0000] text-center font-[600] text-lg md:text-4xl capitalize">page not found <span >&#x1F61E;</span></h1>
            <p className='text-center text-lg mt-5'> Go back <Link to="/" className='underline'>home</Link></p>
           </div>
         </div>
    )
}

export default NotFound