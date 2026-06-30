import React from 'react'
import p1 from '../assets/p1.jpeg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.jpeg'
import p5 from '../assets/p5.jpeg'
import p6 from '../assets/p6.jpeg'
//import Navbar from './navbar'
function Testimonial() {
  return (
    <div>
      {/* <Navbar/> */}
        <h1 section id='TestimonialId' className=' text-5xl  mt-20 lg:m-10 tracking-tight  text-center '> What Are People Saying</h1>
         <div className='flex flex-wrap text-center w-[80vw] m-auto'>
              <div className='w-full lg:w-1/3'>
              <p className='text-neutral-800 m-2 p-4'>
                "I used to keep all my ChatGPT and Claude prompts in a massive, messy Notion doc. promptNExt’s UI is incredibly clean and intuitive. The tagging and filtering system is the real MVP here—I can filter by 'Python,' 'Testing,' and 'Strict JSON' and find exactly what I need in two seconds. It’s saved me hours this week alone."
             </p>
             <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img className='w-20 rounded-4xl'  src={p1} alt="" /> </span>
              <span className='font-semibold'>John Doe</span>
               </div>
              </div>

              <div className='w-full lg:w-1/3'>
              <p className='text-neutral-800 m-2 p-4'>
                As a dev, I hate bloated sign-up processes. The Firebase authentication on promptNExt is flawless. I logged in literally one click and was immediately dropped into the dashboard. No email verifications, no passwords to remember. Just instant access to top-tier developer prompts."
                </p>
              <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img  className='w-20 rounded-4xl'  src={p2} alt="" /></span>
              <span className='font-semibold'>Michale</span>
              </div>
              </div>

              <div className='w-full lg:w-1/3 '>
              <p className='text-neutral-800 m-2 p-4'>
                Most prompt sites give you a massive wall of text that you have to CTRL+F through. promptNExt actually understands how developers work. The advanced filtering lets me drill down into very specific use cases—like 'React,' 'Component Refactoring,' or 'Security Audits.' The UI gets out of your way and just lets you work."
                </p>
             <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img  className='w-20 rounded-4xl' src={p3} alt="" /></span>
              <span className='font-semibold'>Emma</span>
              </div>
              </div>

              <div className='w-full lg:w-1/3'>
              <p className='text-neutral-800 m-2 p-4'>
               " The dark-mode default UI is gorgeous and perfectly tailored for a developer's screen. But what I love most is how seamless the Firebase login makes cross-device usage. I can save a prompt on my work Mac, log in on my personal laptop, and my archive and settings are instantly synced and waiting for me."
                </p>
              <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img  className='w-20 rounded-4xl' src={p4} alt="" /></span>
              <span className='font-semibold'>Sunil</span>
              </div>
              </div>

              <div className='w-full lg:w-1/3'>
              <p className='text-neutral-800 m-2 p-4'>
               The dark-mode default UI is gorgeous and perfectly tailored for a developer's screen. But what I love most is how seamless the Firebase login makes cross-device usage. I can save a prompt on my work Mac, log in on my personal laptop, and my archive and settings are instantly synced and waiting for me."
                </p>
              <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img  className='w-20 rounded-4xl' src={p5} alt="" /></span>
              <span className='font-semibold'>Anna</span>
              </div>
              </div>

              <div className='w-full lg:w-1/3'>
              <p className='text-neutral-800 m-2 p-4'>
                Fast, lightweight, and actually useful. The UX is incredibly smooth—there’s no lag when switching between the Archive and the Tools section. The filtering is lightning-fast, and being able to quickly filter out the noise to find high-quality DevOps and Docker prompts has been a game-changer for me."
                </p>
              <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img  className='w-20 rounded-4xl' src={p6} alt="" /></span>
              <span className='font-semibold'>Rosy</span>
              </div>
              </div>
         </div>
         
    </div>
  )
}

export default Testimonial
