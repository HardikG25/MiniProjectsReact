import { useEffect, useRef } from 'react';
import { useState, useCallback } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passGenerator = useCallback(() => { 
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(char) str += "!@#$%^&*~+=_-"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, char, password]);

  const passwordRef = useRef(null)

  useEffect(()=>{
    passGenerator()
  }, [length, number, char, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,14)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-md px-4 py-3 my-8 text-pink-600 bg-purple-300'>
        <h1 className='text-2xl text-center text-black my-3'>Password Generator</h1>
        <div className='flex shadow rounded-xl overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-double w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPassword} className='outline-none bg-[#A0522D] text-white px-3 py-1 shrink-0 hover:bg-gray-700 hover:text-white'>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label className='text-black'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={number}
            id='numberInput'
            onChange={(e)=>{setNumber((prev) => !prev)}}
             />
             <label className='text-black' htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={char}
            id='charInput'
            onChange={(e)=>{setChar((prev => !prev))}}
             />
             <label className='text-black' htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>

      {/* <button onClick={buttonClick} className='flex items-center bg-[#A0522D] text-white px-2 py-3 text-center mx-auto rounded-lg shadow-xl'>Generate Password</button> */}
    </>
  )
}

export default App
