import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { useState } from 'react';

const fetcher = url => username && fetch(url).then (response =>response.json())

export function UseGithubUser(){
    const {data, error, mutate} = useSWR(`https://api.github.com/users/${username}`, fetcher)
    function fetchGithubUser(){
        mutate()
    }

    return <div>
        <button onClick={fetchGithubUser}>Refetch the data</button>
        {!data && !error && <h3>loading</h3>}
        {error && <h3>ERROR</h3>}
        {data && !error && data.name}
    </div>;
}

export function GithubUser({username}){
    const user = UseGithubUser(username)
    return <h1>Hello, {user}</h1>;
}

