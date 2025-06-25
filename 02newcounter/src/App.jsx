import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)  // setCounter is a method which will controll the counter variable(like updation and changes )

  const AddValue =  () =>{
    if (counter == 20) {
      setCounter(counter=20)
    } else{
      setCounter(counter + 1);
    }
    
    }
    
  
  const removeValue = () =>{
    if (counter <= 0) {
      setCounter(counter=0)
    }else{
    setCounter (counter - 1) ;
    }
  }
  
  return (
    <>
      <h1>Chai aur React{counter}</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={AddValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}
export default App
