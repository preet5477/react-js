import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
  username:"preet",
  age:22
  }
  let arr = [1,2,3]
   
  return (
    <>
     <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4' >tailwind test</h1>
     <Card username="chaiAurCode" someobj = {arr} btn="clich her"/>
     <Card username="ChaiAurReact." someobj = {arr}/>
    </>
  )
}

export default App
