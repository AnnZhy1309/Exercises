import React from 'react';
import { useState } from 'react';


export function Todos (props){
    
 const [items, setItems] = useState([]);
 const [name, setName] = useState("");
 const[count, setCount] = useState(0);
    
   function Counter(){
      setInterval(()=>{
         setCount((c)=>c+1)
      }, 1000)
   }
   const handlerOnClick =() => {
        let itemsNew = [...items, name];
        setItems(itemsNew);
        }
        return(
            <div>
               <ul>
                 {items.map((item) => (
                    <li>{item}</li>
                 ))}
               </ul>

               <input type="text" id="theinput"
                onChange={(e)=> {
                let text = e.target.value;
                setName(text);}} />

               <button onClick={handlerOnClick}>Submit</button>
               <h3>Counter: {count}</h3>
            </div>
        )
                }
