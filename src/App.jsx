import { useState } from 'react'
import Header from './components/header'
import hero from "./assets/repipeHero.png"
import infotoast from "./assets/toast.png"
import about from "./assets/repipeAbout.png"
import service from "./assets/repipeService.png"
import block from "./assets/serviceblock.png"
import testimonial from "./assets/testimonial.png"
import footer from "./assets/footerRepipe.png"

function App() {


  return (
    <div className="relative  w-screen    overflow-x-hidden h-screen">
        <div className='fixed w-full bg-white z-30 opacity-90' style={{color:"rgba(4, 34, 105, 1)"}}>
          <Header />
        </div>

        <div className='w-full relative ' style={{height:"600px"}}>
              <img
                src={hero}
                className="w-full h-full"
               />

               <div className='flex justify-end -mt-10 px-10'>
                  <img
                    src={infotoast}
                    className="w-1/2"
                  />

               </div>
        </div>

        <div className='w-full pt-44'>
             <div className='flex justify-center w-full'>
                 <img
                      src={service}
                      className="w-3/4 h-full"
                    />
              
             </div>

             <div className='py-10' style={{height:"700px"}}>
             
                    <img
                    src={about}
                    className="w-full h-full"
                  />

             </div>

             <div className='flex justify-center w-full py-20'>
                  <img
                    src={block}
                    className="w-3/4 h-full"
                  />

             </div>

             <div className='flex justify-center w-full py-10'>
                  <img
                    src={testimonial}
                    className="w-3/4 h-full"
                  />

             </div>
             <div className='flex justify-center w-full pt-10'>
                  <img
                    src={footer}
                    className="w-full h-full"
                  />

             </div>

        </div>

       </div>
  )
}

export default App
