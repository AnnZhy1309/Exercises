import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { useState } from 'react';

const fetcher = url => fetch(url).then (response =>response.json())

export function UseGithubUser(){
    const [username, setUsername] = useState("")
    const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return <div>
           <input onChange={(ev)=>{
        let text = ev.target.value
        setUsername(text)
      }}/>
        {!data && !error && <h3>loading</h3>}
        {error && <h3>ERROR</h3>}
        {data && !error && data.name}
    </div>;
}

export function GithubUser({username}){
    const user = UseGithubUser(username)
    return <h1>Hello, {user}</h1>;
}

