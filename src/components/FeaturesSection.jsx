import React from 'react'
import Setting from '../assets/settings.svg' 
import Activity from '../assets/activity.svg'
import Archive from '../assets/archive.svg'
import Sliders from '../assets/sliders.svg'
import Clip from '../assets/clipboard.svg'
import Tool from '../assets/tool.svg'
import Navbar from './Navbar'
const FeaturesSection = () => {
  return (
    
    <div>
   
        <div section id='FeatureId' className='realtive mt-20 min-h-[800px]'>
            <div className='text-center'>
                <div className=' text-purple-500 rounded-full h-6 text-lg font-medium px-2 py-1 uppercase'>
                  Feature
                </div>
                <h2 className=' px-2 py-1 mt:10 lg:mt-20 text-4xl sm:5xl lg:6xl  tracking-wide'>
                  Easily build 
                  <span className='bg-gradient-to-r from bg-purple-400 to-purple-900 text-transparent bg-clip-text '>
                       {" "}your code
                  </span>
                </h2>
                
            </div>
            <div className='flex flex-wrap w-full gap-y-0.5 '>
            <div className='bg-amber-50 lg:w-1/3 md:1/2  w-full p-5'>
              <img src={Setting} alt="" className='w-8 h-8  hover:bg-purple-300'/>
              <h2 className=' text-2xl font-semibold hover:text-3xl hover:text-purple-700'>
                Settings
              </h2>
              <p className=' hover:text-purple-600 font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam adipisci officiis expedita voluptates sed numquam doloribus? Error, repellendus facere ullam, molestiae laborum optio inventore mollitia provident ducimus ad vel.</p>
            </div>
             <div className='bg-amber-50 lg:w-1/3  md:1/2  w-full p-5'> 
              <img src={Activity} alt="" className='w-8 h-8  hover:bg-purple-300'/>
              <h2 className=' text-2xl font-semibold hover:text-3xl hover:text-purple-700'>
               Your Activity
              </h2>
              <p className=' hover:text-purple-600 font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam adipisci officiis expedita voluptates sed numquam doloribus? Error, repellendus facere ullam, molestiae laborum optio inventore mollitia provident ducimus ad vel.</p>
             </div>
              <div className='bg-amber-50 lg:w-1/3 md:1/2  w-full  p-5'>
               <img src={Tool} alt="" className='w-8 h-8 hover:bg-purple-300'/>
               <h2 className='text-2xl font-semibold hover:text-3xl hover:text-purple-700'>
                Tools
               </h2>
               <p className=' hover:text-purple-600 font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam adipisci officiis expedita voluptates sed numquam doloribus? Error, repellendus facere ullam, molestiae laborum optio inventore mollitia provident ducimus ad vel.</p>
              </div>
               <div className='bg-amber-50 lg:w-1/3 md:1/2  w-full  p-5'>
                <img src={Sliders} alt="" className='w-8 h-8  hover:bg-purple-300'/>
                <h2 className=' text-2xl font-semibold hover:text-3xl hover:text-purple-700'>
                Sliders
               </h2>
               <p className=' hover:text-purple-600 font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam adipisci officiis expedita voluptates sed numquam doloribus? Error, repellendus facere ullam, molestiae laborum optio inventore mollitia provident ducimus ad vel.</p>
               </div>
                <div className='bg-amber-50 lg:w-1/3 md:1/2  w-full  p-5'>
                 <img src={Archive} alt="" className='w-8 h-8  hover:bg-purple-300'/>
                 <h2 className=' text-2xl font-semibold hover:text-3xl hover:text-purple-700'>
                Archives
               </h2>
               <p className=' hover:text-purple-600 font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam adipisci officiis expedita voluptates sed numquam doloribus? Error, repellendus facere ullam, molestiae laborum optio inventore mollitia provident ducimus ad vel.</p>
                </div>
                 <div className='bg-amber-50 lg:w-1/3 md:1/2  w-full  p-5'>
                  <img src={Clip} alt="" className='w-8 h-8  hover:bg-purple-300'/>
                  <h2 className=' text-2xl font-semibold hover:text-3xl hover:text-purple-700'>
                clip Board
               </h2>
               <p className=' hover:text-purple-600 font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam adipisci officiis expedita voluptates sed numquam doloribus? Error, repellendus facere ullam, molestiae laborum optio inventore mollitia provident ducimus ad vel.</p>
                 </div>
        </div>
        </div>



        
    </div>
  )
}

export default FeaturesSection
