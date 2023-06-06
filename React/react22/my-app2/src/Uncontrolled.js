import React from 'react'

export class UncontrolledLogin extends React.Component{
    render(){
        return(
            <div>
                <h1>Uncontrolled Login</h1>
                <form>
                    <input name="username" defaultValue="Enter Username"/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox"/>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}