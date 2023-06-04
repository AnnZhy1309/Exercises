import React from "react";
import {InteractiveWelcome} from "./Welcome";
import { CounterDisplay } from "./Counter";

class App extends React.Component{
  render(){
    return(
      <div>
      <InteractiveWelcome name="John" />
      <CounterDisplay />
      </div>
    )
  }
}

  export default App