import React from "react";
import {Welcome} from "./Welcome";
import { Counter } from "./Counter";

class App extends React.Component{
  render(){
    return(
      <div>
      <Welcome name="John" />
      <Counter incrementInterval={2000} incrementValue={10} initialValue={6}/>
      </div>
    )
  }
}

  export default App