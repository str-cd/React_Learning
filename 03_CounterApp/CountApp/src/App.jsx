import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 2;

  // let addValue = () => {
  //   console.log(counter);
  //   counter=counter+1;
    
  // }

  // let decreaseValue = () => {
  //   console.log(counter);
  //   counter=counter-1;
    
  // }

  let [counter ,setCounter] = useState(0);

  const addValue = () =>{
    if(counter==20){
      return;
    }
    setCounter(counter+1);

  }

  const decreaseValue = ()=>{
    if(counter==0){
      return;
    }
    setCounter(counter-1); 
    
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>Counter Value :{counter}</h3>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
