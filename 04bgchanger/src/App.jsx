import { useState } from "react"

function App() {
  const [color,setColor] = useState("white")
 return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 
      inset-x-0 px-2">
        <div className="fixed flex-wrap justify center gap-3 shadow-lg bg-white
        px-3 py-2 rounded-3xl"> 
        
        <button onClick={()=>setColor("green")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
         style={{backgroundColor:"green"}}>Green</button >
        
        <button onClick={()=>setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor:"red"}}>red</button >
        
        <button onClick={()=>setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
        style={{backgroundColor:"yellow"}}>yellow</button >

        <button onClick={()=>setColor("black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor:"black"}}>black</button >

        <button onClick={()=>setColor("white")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
        style={{backgroundColor:"olive"}}>olive</button >
        </div>
      </div>
    </div>
    </>
  )
}

export default App
