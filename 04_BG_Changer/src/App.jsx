import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

    let [color ,setColor] = useState("#aed6f1");
  return (
    <>
     <div className='w-screen h-screen relative' style={{backgroundColor:color}}>

    <div className='flex flex-row gap-2 absolute bottom-10 left-[28rem] bg-white p-4 rounded-2xl' >  
        <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 bg-red-500 cursor-pointer" onClick={() => setColor("Red")}>RED</button>
        <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 bg-black cursor-pointer" onClick={() => setColor("Black")}>Black</button>
        <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 bg-yellow-400 cursor-pointer" onClick={() => setColor("Yellow")}>Yellow</button>
        <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 bg-gray-500 cursor-pointer" onClick={() => setColor("Grey")}>Grey</button>
        <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 bg-green-500 cursor-pointer" onClick={() => setColor("Green")}>Green</button>
        <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 bg-violet-500 cursor-pointer" onClick={() => setColor("Violet")}>Violet</button>
        
      </div>
    
    </div>
    </>
  )
}

export default App
