import React from 'react';
import { useState } from 'react';


export function Todos (){
    
 const [items, setItems] = useState([]);
 const [name, setName] = useState("");

   const handlerOnClick =() => {
        let itemsNew = [...items, name];
        setItems(itemsNew);}

        return(
            <div>
               <ul>
                 {items.map((item) => (
                    <li>{item}</li>
                 ))}
               </ul>

               <input type="text" 
                onChange={(e)=> {
                let text = e.target.value;
                setName(text);}} />

               <button onClick={handlerOnClick}>Submit</button>
            </div>
        )
                }
