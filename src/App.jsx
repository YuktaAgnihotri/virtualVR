// import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import FeaturesSection from './components/FeaturesSection'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/footer'
import { Route , Routes} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Sign from './components/Sign'
import CreateAccount from './components/CreateAccount'
import AuthContext from './components/AuthContext'
// import { Features } from 'tailwindcss'

function MainLayout(){
   return(
   <div className="max-w-7xl mx-auto px-6 pt-20">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
      );
}
function App() {

  return (
  <AuthContext>
   < div className='bg-neutral-400 w-full h-full relative top-0'>
     
    <Routes>
     
        <Route path='/' element={<MainLayout/>} />
      
       <Route  path="/sign" element={<Sign/>} />
      <Route  path="/createaccount" element={<CreateAccount/>} />
    </Routes>
     </div>
    </AuthContext>
);
}
export default App;
