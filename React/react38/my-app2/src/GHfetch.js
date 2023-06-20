import { useEffect, useState } from "react";

function useGithubUser({username}){
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
    return data;
}

export function GithubUser({username}){
 const {data} = useGithubUser(username)
    return <h1>Hello, {data}</h1>;
}

