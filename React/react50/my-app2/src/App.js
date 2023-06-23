import React from 'react'
import { GithubUserList, GithubUser } from "./GHfetch";
import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom';
import {UseGithubUser} from './GHfetch'



export function App(){
 return(
  <div>
        <Routes>
          <Route path=":username" element={<UseGithubUser/>}/>
        </Routes>
        <Link to=":username"> Username</Link>
  </div>
)}

  export default App