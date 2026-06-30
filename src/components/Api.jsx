import { useState } from "react"
import { useEffect } from "react"
import { prompts } from "../constants/constant";
import Footer from "./footer";
import th from '../assets/th.webp'
export default function Api(){

const mystyle ={
  width: "10vw",
  height: "5vh",
  backgroundColor: "rgb(255, 255, 255)",
  color: "black",
  borderRadius: "10px" ,
  margin: "5px"
  
}

const [filter , setFilter]  = useState("all");
 const filteredPrompts = filter === "all"
    ? prompts
    : prompts.filter(dat => dat.tags.includes(filter));
  console.log(filter);
  



return(
<>
<h1 className=" text-5xl tracking-wide font-light pb-3 m-10 text-center">Crafted prompts at prompNext</h1>
<div className="flex align-middle justify-center "> 
<button style={mystyle} onClick={() => setFilter("all")}>
  All
</button>

<button style={mystyle} onClick={() => setFilter("bio")}>
  Bio
</button>

<button style={mystyle} onClick={() => setFilter("profile")}>
  Profile
</button>

<button style={mystyle} onClick={() => setFilter("repositories")}>
  Repository
</button>

<button style={mystyle} onClick={() => setFilter("impact")}>
  Impact
</button>

<button style={mystyle} onClick={() => setFilter("funding")}>
  Funding
</button>
</div>
<div className="flex flex-wrap justify-center  ">
  

   {filteredPrompts.map((dat) => (
    <ul
      key={dat.id}
      className="border-2 p-2 w-1/2 lg:w-1/3 rounded-2xl bg-gradient-to-r from-neutral-800 to-purple-900"
    >
      <li className="w-[80px]">
        <img src={th} alt="" />
      </li>

      <li className="text-3xl font-bold tracking-tighter p-2">
        {dat.title}
      </li>

      <li className="p-4 text-[17px]">
        {dat.prompt}
      </li>
    </ul>
  ))}
 
</div>
<Footer/>
</>)
}