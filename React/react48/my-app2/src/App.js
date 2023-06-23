import React from 'react'
import { GithubUser, GithubUserList , ShowGithubUser} from "./GHfetch";
import {Routes, Route, Link} from 'react-router-dom'



export function App(){
 return(
           <div>
            <Routes>
              <Route path="/" element={<h1>Hey</h1>}/>
              <Route path="/users" element={<GithubUserList/>}>
                <Route path="showGithubUser" element={<ShowGithubUser/>}/>
              </Route>
            </Routes>
            <Link to="users">User</Link>
           <br/>
            <Link to="/">Homepage</Link>
            <br/>
            <Link to="users/showGithubUser">Show Guthub user</Link>
           </div>
)}

  export default App