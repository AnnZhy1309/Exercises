import React from "react";
import {Todos} from "./TodoList"


  const items = [
    {"todo1"},
      {"todo2"},
      {"todo3"}
  ]


class App extends React.Component{

 const [items, setItems] = useState([]);

  
  render(){
    return(
      <div>
         <Todos items={items}/>
      </div>
    )
  }
}

  export default App