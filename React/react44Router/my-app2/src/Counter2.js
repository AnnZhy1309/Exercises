import {useState} from 'react'

export function Counter({initialValue=0}){
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrease(){
        setCounter((c)=> c+1)
    }

    return(
       <div>
        <h2>Counter: {counter}</h2>
        <button onClick={handleCounterIncrease}>Increase</button>
       </div>
    )
}