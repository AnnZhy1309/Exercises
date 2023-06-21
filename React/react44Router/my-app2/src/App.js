import React from 'react'
import { Counter } from './Counter2';
import {Route, Routes } from 'react-router-dom'



export function App(){
 return(
  <div><Routes>
    <Route path="/counter" element={<Counter/>}></Route>
  </Routes>
  </div>   
)}

  export default App