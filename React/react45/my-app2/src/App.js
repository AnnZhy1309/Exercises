import React from 'react'
import { GithubUser } from "./GHfetch";
import {Routes, Route} from 'react-router-dom'



export function App(){
 return(
           <div>
            <Routes>
              <Route path="/" element={<h1>Hey</h1>}/>
              <Route path="users/:username" element={<GithubUser/>}/>
            </Routes>
           </div>
)}

  export default App