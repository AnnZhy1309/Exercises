import React from 'react';
import { useState } from 'react';


export function Todos (){
    
 const [items, setItems] = useState([]);
 const [name, setName] = useState("");

   const handlerOnClick =() => {
      let itemsNew = [...items, name];
      setItems(itemsNew);}

   const deleteItem =(index)=>{
      let toDelete = [...items];
      toDelete.splice(index,1);
      setItems(toDelete);}

        return(
            <div>
               <ul>
                 {items.map((item) => (
                  <div>
                    <li>{item}</li>
                    <button onClick={()=>{deleteItem()}}>Delete Me</button>
                  </div>
                 ))}
               </ul>

               <input type="text" 
                onChange={(e)=> {
                let text = e.target.value;
                setName(text);}} />

               <button onClick={handlerOnClick}>Submit</button>
            </div>)}