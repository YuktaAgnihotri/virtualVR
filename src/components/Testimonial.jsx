import React from 'react'
import p1 from '../assets/p1.jpeg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.jpeg'
import p5 from '../assets/p5.jpeg'
import p6 from '../assets/p6.jpeg'
function Testimonial() {
  return (
    <div>
        <h1 className=' text-5xl  mt-20 lg:m-10 tracking-tight  text-center '> What Are People Saying</h1>
         <div className='flex flex-wrap text-center w-[80vw] m-auto'>
              <div className='w-full lg:w-1/3'>
              <p className='text-neutral-800 m-2 p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam libero doloremque aut culpa sit dolores nostrum. Ab neque provident ex quasi, perspiciatis praesentium rerum exercitationem.</p>
             <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img className='w-20 rounded-4xl'  src={p1} alt="" /> </span>
              <span className='font-semibold'>John Doe</span>
               </div>
              </div>

              <div className='w-full lg:w-1/3'>
              <p className='text-neutral-800 m-2 p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam libero doloremque aut culpa sit dolores nostrum. Ab neque provident ex quasi, perspiciatis praesentium rerum exercitationem.</p>
              <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img  className='w-20 rounded-4xl'  src={p2} alt="" /></span>
              <span className='font-semibold'>Michale</span>
              </div>
              </div>

              <div className='w-full lg:w-1/3 '>
              <p className='text-neutral-800 m-2 p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam libero doloremque aut culpa sit dolores nostrum. Ab neque provident ex quasi, perspiciatis praesentium rerum exercitationem.</p>
             <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img  className='w-20 rounded-4xl' src={p3} alt="" /></span>
              <span className='font-semibold'>Emma</span>
              </div>
              </div>

              <div className='w-full lg:w-1/3'>
              <p className='text-neutral-800 m-2 p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam libero doloremque aut culpa sit dolores nostrum. Ab neque provident ex quasi, perspiciatis praesentium rerum exercitationem.</p>
              <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img  className='w-20 rounded-4xl' src={p4} alt="" /></span>
              <span className='font-semibold'>Sunil</span>
              </div>
              </div>

              <div className='w-full lg:w-1/3'>
              <p className='text-neutral-800 m-2 p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam libero doloremque aut culpa sit dolores nostrum. Ab neque provident ex quasi, perspiciatis praesentium rerum exercitationem.</p>
              <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img  className='w-20 rounded-4xl' src={p5} alt="" /></span>
              <span className='font-semibold'>Sunil</span>
              </div>
              </div>

              <div className='w-full lg:w-1/3'>
              <p className='text-neutral-800 m-2 p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam libero doloremque aut culpa sit dolores nostrum. Ab neque provident ex quasi, perspiciatis praesentium rerum exercitationem.</p>
              <div className='flex gap-5 justify-center'>
              <span className=' object-contain rounded-4xl'><img  className='w-20 rounded-4xl' src={p6} alt="" /></span>
              <span className='font-semibold'>Sunil</span>
              </div>
              </div>
         </div>
         
    </div>
  )
}

export default Testimonial