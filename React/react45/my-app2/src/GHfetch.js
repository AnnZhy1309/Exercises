import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function GithubUser(){
    const[data, setData] = useState(null)
    const {username} = useParams();

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

    return <div>{data && <h1>Hello, {data.name}</h1>}</div>
}