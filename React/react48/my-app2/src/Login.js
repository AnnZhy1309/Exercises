import React from 'react'

export class Login extends React.Component{
    state = {
        username:'',
        password:'',
        disable: true,
    }

    onLogin=(event)=>{
        const name = event.target.name
        const value = event.target.value
        let disable = event.target.disabled
        this.setState({
            [name]: value,
            [name]: value === "" ? disable =true : disable = false
        })}


   render (){
    return(
        <div>
            <input name="username"></input>
            <input name="password"></input>
            <button name="login" onClick={this.onLogin} disabled={this.state.disable}>Login</button>
        </div>
    )
   }
} 