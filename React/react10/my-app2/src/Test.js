import {useState, useEffect} from 'react'
import React from 'react';
export function Form(){
    const API = 'http://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'
   
    useEffect(()=>{
        fetch(API)
        .then((response) => {
            return response.json()})
        .then((json)=>{
            setNumber(json)
        })
    }, [])
    const [number, setNumber]= useState(0);

    function Increment(){
      setNumber((n)=>n+1)
    }   
    
    function Save(){
        localStorage.setItem("number", {number})
    }

    function Load(){
        let number = JSON.parse(localStorage.getItem("number"))
        setNumber(number);
    }

    return(
        <div>
            <p>{number}</p>
            <button onClick={Increment}>increment</button>
            <button onClick={Save}>Save</button>
            <button onClick={Load}>Load</button>
        </div>
    )
}