import React from 'react'
import { GithubUser } from "./GHfetch";
import {Routes, Route, Link} from 'react-router-dom'



export function App(){
 return(
           <div>
            <Routes>
              <Route path="/" element={<h1>Hey</h1>}/>
              <Route path="users/:username" element={<GithubUser/>}/>
            </Routes>
            <Link to="users/:username">User</Link>
            <Link to="/">Homepage</Link>
           </div>
)}

  export default App