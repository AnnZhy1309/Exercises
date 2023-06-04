import React from "react";
import { ClickCounter } from "./Counter";

class App extends React.Component{
  render(){
    return(
      <div>
      <ClickCounter initialValue = {0} />
      </div>
    )
  }
}

  export default App