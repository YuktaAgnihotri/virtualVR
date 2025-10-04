import React from 'react'
import logo from '../assets/logo.png'
import { navitems,menu } from '../constants/constant'
import { useState } from 'react';
//import { menu } from '../constants/constant';
//import { Link } from 'react-router-dom';
//import Sign from './Sign';
//import CreateAccount from './CreateAccount';
//import {useNavigate} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
//import { Outlet } from "react-router-dom";
function Navbar() {
 
  const[mobileDrawer,setMobileDrawer] = useState(false);

  function toggleNavBar(){
   setMobileDrawer(!mobileDrawer)
  }

  return (

   <nav   id = "homeId" className=' w-full sticky z-50 top-0 py-3 backdrop-blur-lg'>
    <div className="container px-4 mx-auto relative text-sm">
      <div className="flex justisfy-between item-center">
        <div className="flex item-center flex-shrink-0">
          <img className='h-10 w-10 mr-2'  src={logo}alt="img" />
          <span className='text-xl tracking-tight '> <HashLink to='#homeId'> PromptNExt</HashLink> </span>
        </div>
        <ul className=' hidden lg:flex  ml-14 space-x-12'>
         {/* {navitems.map((item,index) => (
          <li key={index}>
             <a href={item.path}>    {item.label}   </a>
          </li>
        ))} */}
        <li> <HashLink smooth to="/#FeatureId"> Features</HashLink> </li>
        <li> <HashLink smooth to="/#PricingId" > Pricing </HashLink> </li> 
         <li> <HashLink smooth to='/#TestimonialId'> Testimonial </HashLink> </li>
        {/* <li> <HashLink></HashLink> </li> */}
        </ul>
        <div className='hidden lg:flex justify-center  items-end space-x-12 ml-[28vw] '> 
           <button  onClick={()=> window.open('/#/sign' , '_blank')}className='py-2 px-3 border rounded-md'> 
                 Sign In
            </button>
         
            <button onClick={()=>window.open('/#/createaccount' , "_blank")}  className=' bg-gradient-to-r from-purple-400 to-purple-800 py-2 px-3 rounded-md'> 
            Create Account
            </button>  
          
        </div>
        <div className='lg:hidden md:flex-col justify-end'>
        <button onClick={toggleNavBar}>
         {mobileDrawer ? (<>X 
          <ul className='relative-2 text-lg font-semibold'>
        <li> <HashLink smooth to="/#FeatureId"> Features</HashLink> </li>
        <li> <HashLink smooth to="/#PricingId" > Pricing </HashLink> </li> 
         <li> <HashLink smooth to='/#TestimonialId'> Testimonial </HashLink> </li>
          </ul>
           <button  onClick={()=> window.open('/#/sign' , '_blank')}className='py-2 px-3 m-2 border rounded-md'> 
                 Sign In
            </button>
         
            <button onClick={()=>window.open('/#/createaccount' , "_blank")}  className=' bg-gradient-to-r from-purple-400 to-purple-800 py-2 px-3 rounded-md'> 
            Create Account
            </button> 
        
         <ul className=' hidden lg:flex  ml-14 space-x-12 '>
       { /* {navitems.map((item,index) => (
          <li key={index}>
             <Link to={item.path}>    {item.label}   </Link>
          </li>
        ))}*/}
        </ul>
        </> 
        ) : (
          <ul className='ml-[2vw]'> {/* Wrap th mapped items in a parent element like a ul */}
            {menu.map((item, index) => (
              <li key={index}> {/* Use a unique key for list items */}
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
