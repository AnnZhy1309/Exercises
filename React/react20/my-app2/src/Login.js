import React from 'react'

export class Login extends React.Component{
    state = {
        username:'',
        password:'',
        disabled: true,
    }

    onLogin=(event)=>{
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value,
        })}

    handleResetState =()=>{
        this.setState({
            username: "",
            password: '',
            disabled: true,
        });
    };
    componentDidUpdate(){
        console.log(this.state);
    }

   render (){
    return(
        <div>
            <input name="username" value={this.state.username} onChange={(e)=> this.setState({username:e.target.value})}></input>
            <input name="password" type="password" value={this.state.password}></input>
            <button name="login" onClick={this.onLogin} disabled={this.state.disabled}>Login</button>
            <button onClick={this.handleResetState}>Reset</button>
        </div> 
    )
   }
} 