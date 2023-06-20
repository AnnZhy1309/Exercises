import React from 'react'
import { useCounter } from './UseCallbeck';



export function App({initialValue=0}){
  const {counter, onIncrement, onReset, onDecremennt} = useCounter(initialValue)
 return(
         <div>
          <h1>{counter}</h1>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onReset}>Reset</button>
          <button onClick={onDecremennt}>Decremennt</button>
         </div>
)}

  export default App