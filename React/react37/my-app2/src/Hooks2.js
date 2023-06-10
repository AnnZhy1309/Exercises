import React from 'react'
import { useState } from 'react'

function useForm (){
 const[data, setData] = useState({
    username: '',
    password: '',
  })

  function handleInputChange (event){
    const value= event.target
    setData(value)
   }
 
   return handleInputChange

}


export function MyForm(){
const handleInputChange = useForm("")
    return(
        <div>
            <input onChange={handleInputChange}/>
            <input type="password" onChange={handleInputChange}/>
        </div>
    )
}