import React from "react";
import {Todos} from "./TodoList"
import { GithubUser } from "./GHfetch";



class App extends React.Component{

  
  render(){
    return(
      <div>
         <GithubUser username="AnnZhy1309"/>
      </div>
    )
  }
}

  export default App