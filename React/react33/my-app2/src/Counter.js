import {useEffect, useState} from 'react'

export function Counter({initialValue=0}){
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrease(){
        setCounter((c)=> c+1)
    }

    useEffect(()=>{
        console.log('I have mounted')
       return ()=>{
        console.log('I am unmounting')
       }},[])

    return(
       <div>
        <h2>Counter: {counter}</h2>
        <button onClick={handleCounterIncrease}>Increase</button>
       </div>
    )
}