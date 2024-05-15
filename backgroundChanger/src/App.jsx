import { useState } from 'react'
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap px-3 py-2 bg-white rounded-xl gap-3 shadow-2xl'>
            <button onClick={() => setColor("red")} className='outline-none text-white px-4 py-2 rounded-full' style={{backgroundColor: "red"}}>
                RED
            </button>
            <button onClick={() => setColor("green")} className='outline-none text-white px-4 py-2 rounded-full' style={{backgroundColor: "green"}}>
                GREEN
            </button>
            <button onClick={() => setColor("blue")} className='outline-none text-white px-4 py-2 rounded-full' style={{backgroundColor: "blue"}}>
                BLUE
            </button>
            <button onClick={() => setColor("lavender")} className='outline-none text-black px-4 py-2 rounded-full' style={{backgroundColor: "lavender"}}>
                LAVENDER
            </button>
            <button onClick={() => setColor("black")} className='outline-none text-white px-4 py-2 rounded-full' style={{backgroundColor: "black"}}>
                BLACK
            </button>
            <button onClick={() => setColor("pink")} className='outline-none text-black px-4 py-2 rounded-full' style={{backgroundColor: "pink"}}>
                PINK
            </button>
            <button onClick={() => setColor("white")} className='outline-dotted outline-black text-black px-4 py-2 rounded-full' style={{backgroundColor: "white"}}>
                WHITE
            </button>
            <button onClick={() => setColor("purple")} className='outline-none text-white px-4 py-2 rounded-full' style={{backgroundColor: "purple"}}>
                PURPLE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
