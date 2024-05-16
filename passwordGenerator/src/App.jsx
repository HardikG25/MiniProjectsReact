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

    for (let index = 1; index <= array.length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

}, [length, number, char, password]);

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
          />

          <button className='outline-none bg-[#A0522D] text-white px-3 py-1 shrink-0 hover:bg-gray-700 hover:text-white'>Copy</button>

        </div>
      </div>
    </>
  )
}

export default App
