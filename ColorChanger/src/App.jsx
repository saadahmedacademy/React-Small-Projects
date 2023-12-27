import { useState } from "react"

function App() {
 const [color,setColor] = useState("orange")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl"> 
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
    <button className="outline-none px-4 py-1 rounded-full text-black "  style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button> 
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>orange</button> 
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>  
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>Brown</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"skyblue"}} onClick={()=>setColor("skyblue")}>Skyblue</button> 
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
    <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"  style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>white</button>
    <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"  style={{backgroundColor:"greenyellow"}} onClick={()=>setColor("greenyellow")}>Greenyellow"</button>
         </div>         
         </div>
     </div>
    </>
  )
}

export default App
