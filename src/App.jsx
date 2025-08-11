// import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import FeaturesSection from './components/FeaturesSection'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/footer'
import { Route , Routes,useNavigate } from 'react-router-dom'
import Sign from './components/Sign'
import CreateAccount from './components/CreateAccount'
// import { Features } from 'tailwindcss'
function App() {
  

  return (
   < div className='bg-neutral-400 w-full'>
   
   
    <Routes>
    <Route  path="/" element={<Navbar/>}></Route>
     {/* <Route  path="/FeaturesSection" element={<FeaturesSection/>}></Route> */}
      <Route  path="/Pricing" element={<Pricing/>}></Route>
     <Route  path="/Testimonial" element={<Testimonial/>}></Route>
       <Route  path="/Sign" element={<Sign/>}></Route>
         <Route  path="/CreateAccount" element={<CreateAccount/>}></Route>
   </Routes>
     
   <div className="max-w-7xl mx-auto px-6 pt-20">
    <Hero/>
    <FeaturesSection/>
    <Footer/>
   </div>
   </div>
  )
}

export default App
