import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

export function GithubUser(){
    const[data, setData] = useState(null)
    const {username} = useParams()

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then ((response)=>{
            return response.json()
        })
        .then ((json)=> {
            console.log(json)
            setData(json);
        })
    }, [username])

    return <div>
        {data && <h1>Hello, {data.name}</h1>}</div>
}

export function GithubUserList(){
const[users, setUser] = useState([]);
const[inputText, setInputText] = useState([]);


  return(
    <div>
       <ul>
          {users.map((user)=>(
                <li>{user}</li>
          ))}
              
          </ul>
          <input
          name="username"
              value={inputText}
              onChange={(ev)=>{
              let text = ev.target.value;
              setInputText(text);}
          } type="text"/>
          <button
             onClick={()=>{
             let userNew = [...users, inputText];
             setUser(userNew);
          }}>Add user</button>
          
          <GithubUser username={inputText}/>
    </div>
)}