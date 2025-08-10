import React from 'react'

function Pricing() {
  return (
    <div>
        <h1 className='text-6xl tracking-tight font-extralight  text-center mt-20 mb-10 lg:mt-10 '>Pricing</h1>
          <div className='flex flex-wrap w-full lg:ml-[10vw] justify-center items-center '>
            <div className='lg:w-1/3 w-full text-center'>
              <div className='m-7'>
                   <h1 className='text-3xl font-semibold'>Free </h1>
                   <span className='text-2xl'>$0 </span>
                    <span className='text-neutral-500 text-sm'> /month </span> 
                    <ul className='list-disc list-inside'>
                        <li>Lorem ipsum dolor sit amet .</li>
                        <li>Lorem ipsum dolor sit amet .</li>
                        <li>Lorem ipsum dolor sit amet .</li>
                        <li>Lorem ipsum dolor sit amet .</li>
                    </ul>
                    <button className='pb-0 pt-0 m-2 pr-30 pl-30 lg:pr-10 lg:pl-10 bg-purple-400 rounded hover:bg-purple-700'> Subscribe</button>
              </div>
            </div>

             <div className='lg:w-1/3 w-full text-center'>
              <div className='outline-offest-[2px]'>
                   <h1 className='text-3xl font-semibold'>Pro </h1>
                   <span className='text-2xl'>$10 </span>
                   <span className='bg-gradient-to-r from bg-purple-500 to-purple-950 bg-clip-text text-transparent font-medium text-[20px]'> (most popular)</span>
                    <span className='text-neutral-500 text-sm'> /month </span> 
                    <ul className='list-disc list-inside'>
                        <li>Lorem ipsum dolor sit amet .</li>
                        <li>Lorem ipsum dolor sit amet .</li>
                        <li>Lorem ipsum dolor sit amet .</li>
                        <li>Lorem ipsum dolor sit amet .</li>
                    </ul>
                    <button className='pb-0 pt-0 m-2 pr-30 pl-30 lg:pr-10 lg:pl-10 bg-purple-400 rounded hover:bg-purple-700'> Subscribe</button>
              </div>
            </div>

             <div className='lg:w-1/3 w-full text-center  '>
              <div>
                   <h1 className='text-3xl font-semibold'>Enterprises </h1>
                   <span className='text-2xl'>$30 </span>
                    <span className='text-neutral-500 text-sm'> /month </span> 
                    <ul className='list-disc list-inside'>
                        <li>Lorem ipsum dolor sit amet .</li>
                        <li>Lorem ipsum dolor sit amet .</li>
                        <li>Lorem ipsum dolor sit amet .</li>
                        <li>Lorem ipsum dolor sit amet .</li>
                    </ul>
                    <button className='pb-0 pt-0 m-2 pr-30 pl-30 lg:pr-10 lg:pl-10  bg-purple-400 rounded hover:bg-purple-700'> Subscribe</button>
              </div>
            </div>
            


          </div>
    </div>
  )
}

export default Pricing