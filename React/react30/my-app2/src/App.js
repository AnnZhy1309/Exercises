import React from "react";
import {Todos} from "./TodoList"
import { Counter } from "./Counter2";


class App extends React.Component{

  
  render(){
    return(
      <div>
         <Counter initialValue={1} />
      </div>
    )
  }
}

  export default App