import { useEffect, useState } from "react";

export function GithubUserList(){
    const[inputText, setInputText] = useState([]);
    const [users, setUser] = useState([]);
    
    
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
              
        </div>
    )}
    
    
    export function ShowGithubUser(){
        const{username = "annzhy1309"} = useParams()
        const[data, setData] = useState(null)
    
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
    
        return <h1>{data.name}</h1>
    }