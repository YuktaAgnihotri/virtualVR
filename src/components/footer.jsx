import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white w-full'>
        <div className=' mt-15 flex flex-wrap gap-20 text-center'>
            <div className='w-1/3'>
            <h1 className=' font-semibold'> Resources</h1> 
            <ul className='text-neutral-500 text-sm'>
                <li> Getting started</li>
                <li> Documentation</li>
                <li> Tutorials</li>
                <li> API Integreation</li>
                <li> Communnity Forums</li>
            </ul>
            </div>

             <div className='w-1/3'>
            <h1 className=' font-semibold'> Platform</h1> 
            <ul className='text-neutral-500 text-sm'>
                <li> Getting started</li>
                <li> Documentation</li>
                <li> Tutorials</li>
                <li> API Integreation</li>
                <li> Communnity Forums</li>
            </ul>
            </div>

             <div className=' '>
            <h1 className=' font-semibold'> Community</h1> 
            <ul className='text-neutral-500 text-sm'>
                <li> Getting started</li>
                <li> Documentation</li>
                <li> Tutorials</li>
                <li> API Integreation</li>
                <li> Communnity Forums</li>
            </ul>
            </div>
            
             
        </div>
    </div>
  )
}

export default Footer