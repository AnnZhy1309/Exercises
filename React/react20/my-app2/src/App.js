import React from "react";
import {Welcome} from "./Welcome";
import { Login } from "./Login";


class App extends React.Component{
  render(){
    return(
      <div>
      <Welcome name="John" />
      <Login/>
      </div>
    )
  }
}

  export default App