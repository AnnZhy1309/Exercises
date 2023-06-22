import React from 'react'
import { GithubUser } from "./GHfetch";
import {Routes, Route, Link} from 'react-router-dom'
import Notfound from './NotFound';



export function App(){
 return(
           <div>
            <Routes>
              <Route path="/" element={<h1>Hey</h1>}/>
              <Route path="users/:username" element={<GithubUser/>}/>
              <Route path="*" element={<Notfound/>}/>
            </Routes>
            <Link to="users/:username">User</Link>
            <br/>
            <Link to="/">Homepage</Link>
           </div>
)}

  export default App