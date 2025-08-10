import React from 'react'
import logo from '../assets/logo.png'
import { navitems } from '../constants/constant'
import { useState } from 'react';
import { menu } from '../constants/constant';

function Navbar() {
 
  const[mobileDrawer,setMobileDrawer] = useState(false);
  function toggleNavBar(){
   setMobileDrawer(!mobileDrawer)
  }


  return (
   <nav className=' w-full sticky z-50 top-0 py-3 backdrop-blur-lg'>
    <div className="container px-4 mx-auto relative text-sm">
      <div className="flex justisfy-between item-center">
        <div className="flex item-center flex-shrink-0">
          <img className='h-10 w-10 mr-2'  src={logo}alt="img" />
          <span className='text-xl tracking-tight '> VirtualVR </span>
        </div>
        <ul className=' hidden lg:flex  ml-14 space-x-12'>
         {navitems.map((item,index) => (
          <li key={index}>
             <a href={item.href}>    {item.label}   </a>
          </li>
        ))}
        </ul>
        <div className='hidden lg:flex justify-center  items-end space-x-12 ml-[28vw] '> 
           <a href="#" className='py-2 px-3 border rounded-md'> 
            Sign In 
            </a>
            <a href="#" className=' bg-gradient-to-r from-purple-400 to-purple-800 py-2 px-3 rounded-md'> 
            Create an Account
            </a>  
        </div>
        <div className='lg:hidden md:flex-col justify-end'>
        <button onClick={toggleNavBar}>
         {mobileDrawer ? (<><p>X 
          <ul className='relative-2 text-lg font-semibold'><li> Features</li>
          <li> Pricing</li>
          <li> Testimonial </li></ul> </p>
         <ul className=' hidden lg:flex  ml-14 space-x-12 '>
         {navitems.map((item,index) => (
          <li key={index}>
             <a href={item.href}>    {item.label}   </a>
          </li>
        ))}
        </ul>
        </> 
        ) : (
          <ul> {/* Wrap the mapped items in a parent element like a ul */}
            {menu.map((item, index) => (
              <li key={item.id}> {/* Use a unique key for list items */}
                {item.content}
              </li>
            ))}
          </ul> 
         )
         }
        </button>
        </div>
      </div>
    </div>
     </nav>
    
  )
}

export default Navbar