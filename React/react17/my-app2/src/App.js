import React from "react";
import {Welcome} from "./Welcome";
import { CounterDisplay } from "./Counter";

class App extends React.Component{
  render(){
    return(
      <div>
      <Welcome name="John" />
      <CounterDisplay />
      </div>
    )
  }
}

  export default App