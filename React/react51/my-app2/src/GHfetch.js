import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { useState } from 'react';

const fetcher = url => username && fetch(url).then (response =>response.json())

export function UseGithubUser(){
    const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher)
    

    return <div>
        {!data && !error && <h3>loading</h3>}
        {error && <h3>ERROR</h3>}
        {data && !error && data.name}
    </div>;
}

export function GithubUser({username}){
    const user = UseGithubUser(username)
    return <h1>Hello, {user}</h1>;
}

