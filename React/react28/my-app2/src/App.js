import React from "react";
import {Todos} from "./TodoList"
import { Welcome } from "./Welcome";
import { Age } from "./Welcome";
import { DisplayLanguage } from "./LanguageContext";



export class App extends React.Component{

  state = {
    language: 'en'
  }

  handleLanguageChange = (event)=>{
    this.setState({
      language: event.target.value
    })
  }
  
  render(){
    return(
      <div>
        <select value = {this.state.language} onChange={this.handleLanguageChange}>
          <option value='en'>English</option>
          <option value='ru'>Русский</option>
        </select>
        <DisplayLanguage.Provider value={this.state.language}>
           <Welcome name="Albert" age={30}/>
        </DisplayLanguage.Provider>
      </div>
    )
  }
}

  export default App