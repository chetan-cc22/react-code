import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [counter , setCounter]=useState(0)

const addValue =() =>{
  // console.log("value is " , Math.random())
  // counter=counter+1;
  if(counter<20){
    setCounter(counter+1)
  }
  
}

const subValue =()=>{
  if(counter>0){
    setCounter(counter-1)
  }
}

  return (
    <>
    <h1> counter value : {counter} </h1>
    <button onClick={addValue}>Add</button>
    <br></br>
     <br></br>
    <button onClick={subValue}>SUb</button>
    </>
  )
}

export default App
