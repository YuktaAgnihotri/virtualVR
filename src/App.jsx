// import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import FeaturesSection from './components/features'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/footer'
function App() {
  

  return (
   < div className='bg-neutral-400 w-full'>
   <Navbar/>
   <div className="max-w-7xl mx-auto px-6 pt-20">
    <Hero/>
    <FeaturesSection/>
    <Pricing/>
    <Testimonial/>
    <Footer/>
   </div>
   </div>
  )
}

export default App
