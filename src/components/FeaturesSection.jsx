import React from 'react'
import Setting from '../assets/settings.svg' 
import Activity from '../assets/activity.svg'
import Archive from '../assets/archive.svg'
import Sliders from '../assets/sliders.svg'
import Clip from '../assets/clipboard.svg'
import Tool from '../assets/tool.svg'

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
                The Archive: Your Central Intelligence
              </h2>
              <p className=' hover:text-purple-600 font-serif'>
                Never lose a winning prompt again. Whether you are scaffolding a backend service or optimizing complex algorithms, your best solutions are permanently indexed and ready to deploy.
                </p>
            </div>
             <div className='bg-amber-50 lg:w-1/3  md:1/2  w-full p-5'> 
              <img src={Activity} alt="" className='w-8 h-8  hover:bg-purple-300'/>
              <h2 className=' text-2xl font-semibold hover:text-3xl hover:text-purple-700'>
               1-Click Clipboard: Zero Friction Deployment
              </h2>
              <p className=' hover:text-purple-600 font-serif'>
               Stop highlighting and dragging. Our integrated Clipboard feature lets you grab complex, multi-line prompts with a single click. Formatted specifically to retain line breaks and code structure, so it pastes perfectly into your terminal, IDE, or AI workspace every single time.
                 </p>
             </div>
              <div className='bg-amber-50 lg:w-1/3 md:1/2  w-full  p-5'>
               <img src={Tool} alt="" className='w-8 h-8 hover:bg-purple-300'/>
               <h2 className='text-2xl font-semibold hover:text-3xl hover:text-purple-700'>
                Developer Tools & Parameters
               </h2>
               <p className=' hover:text-purple-600 font-serif'>
                Don't just copy—customize. Use our built-in Tools to dynamically inject your own variables into foundational prompts. Swap out tech stacks, adjust output formats (like strict JSON or Markdown), and define context limits
                 before you even hit the clipboard.
                 
                 </p>
              </div>
               <div className='bg-amber-50 lg:w-1/3 md:1/2  w-full  p-5'>
                <img src={Sliders} alt="" className='w-8 h-8  hover:bg-purple-300'/>
                <h2 className=' text-2xl font-semibold hover:text-3xl hover:text-purple-700'>
                Personalized Workspace Settings
               </h2>
               <p className=' hover:text-purple-600 font-serif'>
                Tailor promptNExt to how you code. Configure your default Settings to automatically filter prompts by your preferred tech stack, toggle dark mode, manage your saved collections, and control your API key environments safely.
                 </p>
               </div>
                <div className='bg-amber-50 lg:w-1/3 md:1/2  w-full  p-5'>
                 <img src={Archive} alt="" className='w-8 h-8  hover:bg-purple-300'/>
                 <h2 className=' text-2xl font-semibold hover:text-3xl hover:text-purple-700'>
                Seamless Firebase Login
               </h2>
               <p className=' hover:text-purple-600 font-serif'>
               Get straight to the prompts without the friction. Secure, lightning-fast authentication powered by Firebase means you can log in with your existing Google or GitHub accounts in seconds. Your archives, settings, and clipboard history are safely synced across all your devices.
                   </p>
                </div>
                 <div className='bg-amber-50 lg:w-1/3 md:1/2  w-full  p-5'>
                  <img src={Clip} alt="" className='w-8 h-8  hover:bg-purple-300'/>
                  <h2 className=' text-2xl font-semibold hover:text-3xl hover:text-purple-700'>
                clip Board
               </h2>
               <p className=' hover:text-purple-600 font-serif'>
                Clipboard saving and bookmarking feature will be added soon.
                 </p>
                 </div>
        </div>
        </div>



        
    </div>
  )
}

export default FeaturesSection
