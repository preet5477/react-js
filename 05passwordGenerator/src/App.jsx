import { useCallback, useEffect, useState, useRef } from 'react'

import './App.css'

function App() {
  //hooks (var)
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useref hook
  const passwordRef = useRef(null)

  //function for generate password
  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "012456789"
    if(charAllowed) str += "~!#$%^&*(){}[]<>,.?/"

    for (let i = 0; i <= length; i++) { 
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed
    ,setPassword]) 

    //copy to clipboard
    const copyPasswordToClipboard = useCallback(()=> {
      passwordRef.current?.select();//for effect 
      passwordRef.current?.setSelectionRange(0,79);//selection range
      window.navigator.clipboard.writeText(password)
    }, [password])

    //calling function for generate password
    useEffect(()=>{
      passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator])
   
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
       rounded-lg px-2 py-3 my-5 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-2'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden md-4'>
            <input 
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='PASSWORD'
              readOnly 
              ref= {passwordRef}
            /> 
            <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white
            px-3 py-0.5 shrink-0 '>COPY</button>
          </div>

          <div className='flex text-sm gap-x-2 my-4'>
              <div className='flex items-center gap-x-1'>
                <input
                  type='range'
                  min={6}
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => setLength(e.target.value)}
                />
                <lable className='mx-2'>LENGTH : {length}</lable>
              </div>

              <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={()=>{
                  setNumberAllowed((prev)=> !prev);
                 }}
                />
                <label htmlFor='numberInput'> NUMBER</label>
              </div>

              <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  defaultChecked={charAllowed}
                  id="charactorInput"
                  onChange={()=>{
                  setCharAllowed((prev)=> !prev);
                 }}
                />
                <label htmlFor='charactorInput'> CHARACTERS</label>
              </div>

          </div>
      </div>   
    </>
  )
}

export default App
