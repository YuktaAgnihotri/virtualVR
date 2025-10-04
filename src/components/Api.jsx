import { useState } from "react"
import { useEffect } from "react"
import { prompts } from "../constants/constant";
import Footer from "./footer";
import th from '../assets/th.webp'
export default function Api(){


return(
<>
<h1 className=" text-5xl tracking-wide font-light pb-3 m-10 text-center">Crafted prompts at prompNext</h1>
<div className="flex flex-wrap justify-center  ">
    
  { 
  prompts.map((dat, index)=>(
   <ul key = {index.id} className="border-2 p-2  w-1/2 lg:w-1/3 rounded-2xl bg-gradient-to-r from bg-neutral-800 to-purple-900 ">
   <li className="w-[80px]"> <img src={th} alt=""/></li>
    <li className="text-3xl font-bold tracking-tighter p-2 "> {dat.title} </li>
    <li className=" p-4 text-[17px]"> {dat.prompt} </li>

   </ul>
   ))
   }
</div>
<Footer/>
</>)
}