import React from 'react'
import logo from "../assets/logoRepipe.png"

export default function Header() {
  return (
     <div className='w-full flex items-center justify-between px-14' style={{background:"rgba(13, 13, 13, 0.75)"}}>
       
            <img
             src={logo}
             className="h-20"
             />
      
            <div className='flex items-center space-x-10 text-white' >
                <h5 className='text-sm font-semibold  px-6 py-1 '>Home</h5>
                <h5 className='text-sm font-semibold'>About Us</h5>
                <h5 className='text-sm font-semibold'>Contact Us</h5>

            </div>

     </div>
  )
}
