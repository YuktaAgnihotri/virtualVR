import React from 'react'
import v1 from "../assets/video1.mp4"
import v2 from "../assets/video2.mp4"
function Hero() {
  return (
   <>
    <div className='flex flex-col items-center justify-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
            Virtual Build tools
            <span className='bg-gradient-to-r from bg-purple-400 to-purple-900  text-transparent  py-2 px-3  bg-clip-text'>
                 for developers
            </span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magnam rem, dolorum sequi velit aliquid hic et
  repudiandae pariatur, facere architecto rerum. Sunt incidunt tempora sed dolorum accusamus nesciunt veniam asperiores modi nulla 
 
        </p>
        <div className='flex  justify-center  gap-10 my-10'>
          <a href="#"
           className ='bg-gradient-to-r from-purple-400 text-center to-purple-800 h-[8vh] p-2 rounded'>
            Start for free
           </a>
          <a href="#" 
          className=' border-black text-center rounded'>
          Documentation
          </a>
        </div>
        <div className='flex justify-center mt-10'>
          <video   autoPlay loop muted  src={v2} type="video.mp4"
          className='border-orange-700 mx-2 my-4 rounded-lg w-1/2 '> don't support </video>

           <video   autoPlay loop muted
          className='border-orange-700 mx-2 my-4 rounded-lg w-1/2 '>
            <source src={v1} type='video/mp4'/> don't support </video>
        </div>

    </div>
   </>
  )
}

export default Hero